# dsh-model-extension
> 基于 deepseek-harness 的模型扩展插件

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![npm](https://img.shields.io/npm/v/dsh-model-extension.svg?label=npm&labelColor=000000&color=ff4b01)](https://www.npmjs.com/package/dsh-model-extension) [![DeepSeek Harness:0.1.7-rc.2](https://img.shields.io/badge/DeepSeek%20Harness-0.1.7--rc.2-success.svg?labelColor=4D6BFE)](https://github.com/deepseek-ai/deepseek-harness) [![Desktop: supported](https://img.shields.io/badge/Desktop-supported-success.svg?labelColor=4D6BFE)](#安装)

| 供应商 | 模型 |
| --- | --- |
| ![模型+ 供应商](assets/models-plus-demo-provider-tab.png) | ![模型+ 模型](assets/models-plus-demo-models-tab.png) |

> **作者建议（非AI编写）**
> 安装该插件或该类型插件：clone仓库源码 -> 执行安全检查/扫描 -> 从源码构建 -> 安装

## 功能

- 新增「模型+」设置导航（通过 bundle patch 禁用官方模型设置页，本页为唯一模型设置页）。
- 模型目录每行展开区新增扩展配置：
  - **推理挡位**（`reasoningEfforts`）：声明模型支持的思考档位（off/minimal/low/medium/high/xhigh/max）及线上取值；
  - **输入模态**（`input`）：text / image；
  - **兼容性**（`compat`）：`supportsReasoningEffort` 开关与 `thinkingFormat` 线制格式。
- 支持通过 `models.json` 元数据自动预填。可通过插件下载或自行下载并放到 `$DSH_HOME/models.json` 供插件使用。
    - **仅支持`https://models.dev/models.json`数据格式**。
- 支持 **DeepSeek 账号**路由（`deepseek-account`）：置顶显示，无可用模型时整行隐藏；编辑卡片只含模型目录（账号不使用 API 密钥与地址）。
- 所有保存走 DSH 原生 `settings.mutate`，落盘 `$DSH_HOME/settings.yaml`。

## 安装
> Desktop 与 CLI 共享同一 `$DSH_HOME` 下的会话、设置、凭证与工作区，但**插件激活与 lockfile 彼此独立**——同一插件需要在两侧分别安装。

### Web / CLI（`web` profile）

```bash
# github
dsh plugin --profile web add github:lovezi0/dsh-model-extension

# npm
dsh plugin --profile web add dsh-model-extension
```

### Desktop（Electron 应用）
只能在 Desktop 应用内的**插件页**安装，安装源填以下任意一种：

- `github:lovezi0/dsh-model-extension`（git 源）
- `dsh-model-extension`（npm 源）
- 本机某一**绝对路径**（开发自测）

## 从源码构建

构建自包含——官方逻辑模块已 vendor 至 `src/client/vendor/`（`store` / `operations` / `schema-operations`，见文件头来源标注），无需 DeepSeek Harness 宿主源码：

```bash
npm install
npm run build
```

## 版本历史

- **1.3.0**
    - 💪适配 deepseek harness 0.1.7-rc.2
    - 💪适配 deepseek harness 官方 Desktop
    - 🐛修复 deepseek harness desktop 快速装入下拉框透明的问题
- **1.2.3**
    - 🐛移除已作废的 dsh.adapter 逻辑
    - npm publish
    - **1.2.3-alpha.2**
        - 💪适配deepseek harness 0.1.7-alpha.1
    - **1.2.3-alpha.1**
        - 🐛修复 llm-deepseek 获取模型错误的问题
- **1.2.1**
    - 🐛修复非 openai-completions API 协议网关保存报错
    - 💪快速装入 model id 显示对应的API协议
- **1.2.0**
    - 🔥支持 dsh 内置 llm-pi-ai model 元数据快速装入
    - 💪快速装入选项拆分，筛选模型更方便&准确
    - 💪通过 llm-pi-ai 数据装入时，动态显示更多 model.compat
- **1.1.0**
    - npm publish
    - **1.1.0-alpha.1**
        - 💪适配deepseek harness 0.1.5-alpha.2
- **1.0.0**
    - 🔥重构[模型+]界面
    - 🔥新增models.json元数据自动预填
    - 🔥禁用官方模型设置页（bundle patch id 覆盖）

- **outdated（0.x）** — 开放deepseek harness内置模型扩展参数；v0.x 历史，见 [CHANGELOG.md](./CHANGELOG.md)

## 许可

MIT。包含自 [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)（MIT）的 vendored 官方逻辑模块与派生代码。
