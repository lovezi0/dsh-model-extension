# `settings.llm-pi-ai` 参数速查（@ dsh 0.1.2-rc.1）

> 事实源：`packages/llm/llm-pi-ai/src/config.ts`、`catalog.ts`、`provider.ts`；`packages/llm/llm/src/retry-policy.ts`
> 命名空间常量：`const NS = 'llm-pi-ai'`（`index.ts:93`），schema 为 `Config`（`config.ts:340`）

## 结构总览

```yaml
llm-pi-ai:
  providers:                 # 唯一顶层键，dict，key = provider route（默认 {}）
    <route>:                 # 例：openai / anthropic / my-gateway
      apiKeyEnv: ...         # 凭据引用（环境变量名）
      displayName: ...
      api: ...
      baseURL: ...
      models: [...]          # 整体替换该 route 的目录
      modelOverrides: {...}  # 按 id 改目录里单个模型
      compat: {...}          # route 级 wire 兼容开关
      ...（其余标量/对象见下表）
```

## 一、顶层

| 键 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `providers` | dict<string, profile> | `{}` | route 字典，**key 就是 route**。空/省略 = 休眠姿态（挂载 0 路由，等 settings 供给）。传数组会报错 |

## 二、Provider（route）级字段

| 键 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `apiKeyEnv` | string（`role: credential-ref`） | — | 凭据引用名，只存引用，真值在 credential store。留空 = 未配置 |
| `displayName` | string | route key | 展示名；空串报错 |
| `api` | `openai-completions` \| `openai-responses` \| `anthropic-messages` | 目录模型自带 | 手声明 route 必须给；目录 route 可省（沿用目录模型各自协议） |
| `baseURL` | string | 目录 endpoint | 空串报错 |
| `models` | ModelProfile[] | 目录原样 | 显式列出 = 整体替换目录；每项未设字段从同 id 目录模型继承 |
| `modelOverrides` | dict<id, ModelOverride> | — | 仅在与 `models` 互斥、且 route 在目录里、且 id 目录存在时有效；否则**拒绝而非跳过** |
| `compat` | CompatProfile | — | route 级兼容开关，模型级逐字段覆盖 |
| `defaultContextWindow` | int ≥1 | `262144` | 兜底上下文；只是"猜"，网关小就改这里 |
| `defaultMaxTokens` | int ≥1 | `32768` | 兜底输出能力，**不会**自动变成每请求上限 |
| `defaultInput` | `text`\|`image`[] | `['text']` | 兜底模态，**不可为空数组**（下面没有兜底层） |
| `headers` | dict<string,string> | — | 请求头，解析时用 Fetch `Headers` 校验；Harness 保留名以归属为准 |
| `reasoning` | `off`\|`minimal`\|`low`\|`medium`\|`high`\|`xhigh`\|`max` | — | 提供者无关的推理档位 |
| `thinkingBudgets` | `{minimal,low,medium,high}` 各 number | — | 支持 token 预算的推理提供者用 |
| `cacheRetention` | `none`\|`short`\|`long` | — | prompt 缓存保留偏好 |
| `transport` | `sse`\|`websocket`\|`websocket-cached`\|`auto` | — | 流式传输偏好 |
| `timeoutMs` | natural | — | HTTP/SDK 超时（ms） |
| `websocketConnectTimeoutMs` | natural | — | WS 连接超时（ms） |
| `streamIdleTimeoutMs` | number，>0 且 ≤ `MAX_TIMER_DELAY_MS` | `300000` | 单次流读取的最大空闲时间 |
| `maxRequestImageBytes` | int ≥1 | `20971520`（20MiB） | 每请求 base64 图片总量上限，超出把最老图片换成文本占位 |
| `requestImagePixelBudget` | int ≥1 | `4194304`（2048²） | 每个内联版本的像素预算 |
| `requestImageMaxBytes` | int ≥1 | `1048576`（1MiB） | 每个内联版本的原始编码字节目标 |
| `retryPolicy` | RetryPolicyConfig | normal / 5 次 | 见第五节 |

⚠ 已移除字段（写了直接报错）：`provider`（改用 providers dict key）、`maxRetries` / `maxRetryDelayMs`（改用 `retryPolicy` 或 dsh-llm-retry）。

## 三、`models[]` 条目（`modelOverrides.<id>` 字段相同，只是 id 在 key 里）

| 键 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id` | string | ✅ | 发给提供者的模型 id |
| `name` | string | — | 展示名，默认目录名 → id |
| `contextWindow` | int ≥1 | — | 请求+响应总上下文 |
| `maxTokens` | int ≥1 | — | 最大输出；**显式配置会同时成为该模型的每请求默认**（继承来的只算能力） |
| `input` | `text`\|`image`[] | — | 接受的输入模态。省略/空 = 沿用目录 → `defaultInput` |
| `reasoningEfforts` | `false` \| dict<level, string\|null> | — | 省略=继承目录；`false`=非推理模型（剥掉推理）；dict=可选档位及其线上拼写。`off` 的值可留空（=不发送），其他档位必须给值 |
| `compat` | CompatProfile | — | 模型级兼容开关，逐字段覆盖 route 级；协议不认的字段会**拒绝**（不是忽略） |

`reasoningEfforts` 的 key 取值范围：`off` / `minimal` / `low` / `medium` / `high` / `xhigh` / `max`。

## 四、`compat` 字段（含归属协议）

| 字段 | 类型 | 协议 |
|---|---|---|
| `supportsStore` | boolean | openai-completions |
| `supportsDeveloperRole` | boolean | openai-completions + 三个 Responses |
| `supportsReasoningEffort` | boolean | openai-completions |
| `supportsUsageInStreaming` | boolean | openai-completions |
| `supportsFinishReason` | boolean | openai-completions |
| `maxTokensField` | `max_completion_tokens` \| `max_tokens` | openai-completions |
| `requiresToolResultName` | boolean | openai-completions |
| `requiresAssistantAfterToolResult` | boolean | openai-completions |
| `requiresThinkingAsText` | boolean | openai-completions |
| `requiresReasoningContentOnAssistantMessages` | boolean | openai-completions |
| `thinkingFormat` | 见下 11 项 | openai-completions |
| `chatTemplateKwargs` | dict<string, string\|number\|boolean\|null\|`{$var, omitWhenOff}`> | openai-completions |
| `chatTemplateArgs` | 同上 | openai-completions（`baseten` 格式） |
| `supportsThinkingTokenBudget` | boolean | openai-completions |
| `supportsStrictMode` | boolean | openai-completions + Responses + bedrock-converse-stream |
| `cacheControlFormat` | `anthropic` | openai-completions |
| `supportsLongCacheRetention` | boolean | openai-completions + Responses + anthropic-messages |
| `supportsEagerToolInputStreaming` | boolean | anthropic-messages |
| `supportsCacheControlOnTools` | boolean | anthropic-messages |
| `supportsTemperature` | boolean | anthropic-messages |
| `forceAdaptiveThinking` | boolean | anthropic-messages |
| `allowEmptySignature` | boolean | anthropic-messages |
| `supportsStrictTools` | boolean | anthropic-messages |

`thinkingFormat` 取值（11 项）：`openai` / `deepseek` / `openrouter` / `together` / `baseten` / `zai` / `qwen` / `chat-template` / `qwen-chat-template` / `string-thinking` / `ant-ling`

`chatTemplateKwargs` / `chatTemplateArgs` 的 `$var` 取值：`thinking.enabled` / `thinking.effort`；可带 `omitWhenOff: boolean`。

被 **withhold**（不可配，目录自带）的字段：`openRouterRouting`、`vercelGatewayRouting`、`zaiToolStream`、`supportsOpenAIGrammarTools`、`sendSessionAffinityHeaders`、`deferredToolsMode`、`sessionAffinityFormat`、`supportsAdditionalTools`、`supportsToolSearch`、`supportsExplicitPromptCacheMode`、`supportsToolReferences`。

## 五、`retryPolicy`

**normal 模式**（默认）

| 键 | 类型 | 默认 |
|---|---|---|
| `mode` | `'normal'`（必填） | — |
| `maxRetries` | int ≥0 | `5` |
| `retryableCodes` | string[] | `['EMPTY_RESPONSE','RATE_LIMIT','SERVER','TIMEOUT','TRANSPORT']` |
| `backoff.initialDelayMs` | number | `500` |
| `backoff.maxDelayMs` | number | `10000` |
| `backoff.jitterRatio` | number 0~1 | `0.1` |

**always 模式**：只有 `mode: 'always'`（必填）+ `backoff{...}`。未知键一律报错。

## 六、与保存链路相关的两条（复用前次结论）

- `settings.yaml` 只存 `apiKeyEnv` 引用名；密钥真值走 `ctx.remote.credentials.set(ref, value)`，永不进 draft。
- 引用名派生：`apiKeyEnv` 缺省时 `deriveKeyRef(provider)` = `${provider.toUpperCase().replace(/[^A-Z0-9]+/g,'_')}_API_KEY`（`minimax-cn` → `MINIMAX_CN_API_KEY`）。
