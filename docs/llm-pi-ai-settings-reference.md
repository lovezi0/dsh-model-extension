# `settings.llm-pi-ai` 参数速查（@ dsh 0.1.5-rc.2）

> 事实源：`packages/llm/llm-pi-ai/src/config.ts`、`catalog.ts`、`provider.ts`；`packages/llm/llm/src/retry-policy.ts`
> 命名空间常量：`const NS = 'llm-pi-ai'`（`index.ts:93`），schema 为 `Config`（`config.ts:340`）
> 目录数据源：`@earendil-works/pi-ai`（经其公开子路径 `providers/all`），见第七节
> 版本基准：**0.1.5-rc.2**（第四节的可写 compat 集合与第七节按此版本对拍，`npm run audit:pi-ai`）。第一至六节的其余内容成文于 0.1.2-rc.1，本次核对覆盖到的字段两版一致

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
| `supportsThinkingTokenBudget` | boolean | openai-completions（= `thinkingTokenBudgetField: 'thinking_token_budget'` 的别名，vLLM） |
| `thinkingTokenBudgetField` | `thinking_token_budget` \| `thinking_budget` \| `thinking_budget_tokens` | openai-completions |
| `vllmPriority` | number | openai-completions |
| `supportsStrictMode` | boolean | openai-completions + Responses + bedrock-converse-stream |
| `supportsMaxOutputTokens` | boolean | 三个 Responses 协议（openai-responses / azure / codex） |
| `cacheControlFormat` | `anthropic` | openai-completions |
| `supportsLongCacheRetention` | boolean | openai-completions + Responses + anthropic-messages |
| `supportsEagerToolInputStreaming` | boolean | anthropic-messages |
| `supportsCacheControlOnTools` | boolean | anthropic-messages |
| `supportsTemperature` | boolean | anthropic-messages |
| `forceAdaptiveThinking` | boolean | anthropic-messages |
| `allowEmptySignature` | boolean | anthropic-messages |
| `supportsStrictTools` | boolean | anthropic-messages |

`thinkingFormat` 取值（11 项）：`openai` / `deepseek` / `openrouter` / `together` / `baseten` / `zai` / `qwen` / `chat-template` / `qwen-chat-template` / `string-thinking` / `ant-ling`

`chatTemplateKwargs` / `chatTemplateArgs` 的 `$var` 取值：`thinking.enabled` / `thinking.effort` / `thinking.budget`；可带 `omitWhenOff: boolean`。值也可以是 string / number / boolean / null。

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

## 七、内置目录（`@earendil-works/pi-ai`）——`llm-pi-ai` 的数据来源

route 与模型并非都写在自己的配置里：目录自带的 provider / 模型由 `@earendil-works/pi-ai` 提供，`llm-pi-ai` 通过 pi-ai 的公开子路径 `@earendil-works/pi-ai/providers/all` 读取（`getBuiltinProviders()` / `getBuiltinModels()`）。

**目录随 pi-ai 包发布，pi-ai 是 `llm-pi-ai` 的依赖 → 目录版本跟随宿主，不要钉版本。** 消费它一律走上述公开子路径；直接解析 pi-ai 的内部数据文件布局是在猜内部结构，pi-ai 换布局时的失败是**静默的**（不报错，只是字段读不出来）。

### 7.1 route 与目录的对应

- **route key 必须等于目录里的 provider id** 才能命中目录（`deepseek`、`openai`、`zai`…）。它同时决定凭据引用名的派生（见第六节），所以**不要为了改名而改 route key**——改了就同时断开目录匹配与凭据引用；要改名用 `displayName`（默认 = route key，对所有 route 都适用，内置 route 也可配）。
- `api` / `baseURL`：目录 route 可省（沿用目录值），也因此行里**不可配协议**；手声明 route 必须给 `api`。

### 7.2 目录模型字段 ↔ `models[]` 条目

| 目录字段 | 行字段 | 关系 |
|---|---|---|
| `id` / `name` | `id` / `name` | 同名 |
| `contextWindow` / `maxTokens` | 同左 | 同名 |
| `input` | `input` | 同名；目录可能给出 `text`/`image`/`audio`/`video`/`pdf` 超集，行只接受 `text` \| `image` |
| `thinkingLevelMap` | `reasoningEfforts` | **同构但 `null` 语义相反**，见 7.3 |
| `compat` | `compat` | 同名；**只有被 offer 的字段可写**，见第四节与 7.4 |
| `reasoning` | — | 行里无对应字段；`reasoning: false` 时应写 `reasoningEfforts: false` |
| `cost` | — | 行里无对应字段（目录保留） |
| `api` | — | 模型级，由目录决定，行里不可配 |

### 7.3 `reasoningEfforts` ↔ `thinkingLevelMap`：`null` 两侧语义相反 ⚠

| 写法 | 目录里的含义 | 行里的含义 |
|---|---|---|
| `null` | 该档**不支持** | 该档**支持但不发送**参数（适配器把该键丢掉） |
| 键缺席 | 基础档（`off`/`minimal`/`low`/`medium`/`high`）默认**支持**；`xhigh`/`max` 默认**不支持** | 未声明 |
| 整块 `false` | `reasoning: false`（不推理） | 非推理模型。比"只留 `off` 的 dict"更准确——适配器拒绝只有 `off` 的 dict |

所以把目录值写进行里必须**映射**，不能照抄：

| 目录 `map[level]` | 写入行 |
|---|---|
| 字符串 `S` | `level: S` |
| `null` | **不写该键** |
| 键缺席（`off`） | `off: null`（= 支持但不发送） |
| 键缺席（`minimal`/`low`/`medium`/`high`） | `level: <该档的兜底拼写>`，见下 |
| 键缺席（`xhigh`/`max`） | **不写该键** |
| 无 map 且 `reasoning: false` | `reasoningEfforts: false` |

**"该档的兜底拼写"并不恒等于档位名**——pi-ai 各 dispatch 分支的兜底是 `map[effort] ?? 该分支默认值`，其中两个协议的默认值不同：

| 协议 | 非 `off` 档位的兜底 |
|---|---|
| 其余协议 | 档位名本身 |
| `anthropic-messages` / `bedrock-converse-stream` | `minimal` → **`low`**，其余为档位名 |
| `mistral-conversations` | 一律 → **`high`** |

只有在上述协议上，"写档位名"才与"不写"不等价。

### 7.4 compat 的"缺席"有两层含义

1. **行里不写的键 → 继承目录值**（逐字段覆盖，见 7.5）。
2. **目录里也没有的键 → 由适配器按 baseURL 自动检测。**

   例：`supportsReasoningEffort` 在目录里常常缺席，此时 pi-ai 用一份端点排除名单从 URL 推出结论——不在名单里的端点会被判为 `true`。**所以"目录没写这个开关" ≠ "档位不生效"**：档位走各协议自己的 thinking 参数（由 `thinkingFormat` 决定），该开关只额外控制要不要发 `reasoning_effort` 字段。两者回答的是不同问题。

协议不认的字段是**拒绝**而非忽略（见第三节末），所以行里只能写第四节表内的字段；目录记录但被 withhold 的开关（路由偏好、会话亲和、deferred tools、grammar tools 等）**不要照搬**。

### 7.5 每个行字段都是"覆盖"，不写 = 继承

`models[]`（以及 `modelOverrides`）里的字段全部是**覆盖**语义：不写就沿用目录同 id 模型的值，写了的才落进 `settings.yaml`。

推论：

- **全继承时目录给出的就是精确值**——只要 route 命中目录、id 命中目录模型，什么都不写也已经是 pi-ai 的行为。
- **一旦显式写入，宿主升级 pi-ai 修正过的目录值就对这一行不再生效**（旧值锁死在该行）。
- 所以值得显式写的是：自建 route（id 不在目录）、id 不在目录、或确实要偏离目录的字段。其余情况优先留空。

### 7.6 契约漂移的核对

目录数据随宿主升级变化，可写字段的 offer 集合也可能变。核对手段：

- `npm run audit:pi-ai`：从**已装适配器**反推 offer 集合与 `thinkingFormat` 清单，与本插件的常量、档位映射对拍。**每次适配器锚点版本 bump 后跑一次**，FAIL 可以卡发布。
- offer / withhold 清单不在 pi-ai 的任何导出里，运行时读不到 → 只能靠上述脚本，无法在运行时自测。**offer/withhold 翻转的后果是保存被拒（拒绝而非忽略）**，所以这条最关键。
