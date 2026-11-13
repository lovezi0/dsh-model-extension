# 版本历史

> 归档约定：**1.x 为当前推进中的版本**，逐版本记录在 README「版本历史」节点，不写入本文件；
> 升级到 **2.x** 时，将 README 中 1.x 的全部内容提炼后迁移至此归档，并在 README 版本历史中总结为「1.x —— 提炼内容」。

## 1.3.3-legacy
- **1.3.3**
    - 更改插件兼容性定义为 engines.dsh
    - 💪适配 deepseek harness 0.2.1-rc.2
    - npm publish 1.3.3
    - **1.3.3-alpha.1**
        - 💪同步官方API密钥保存&读取策略
        - 💪其他UI优化
- **1.3.2**
    - 🔥模型列表支持拖动排序
- **1.3.1**
    - dsh peer [0.1.7 ... 0.2.0]
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

## outdated（0.x 历史）
- 0.3.3 — 适配 deepseek harness 0.1.2-rc.1
- 0.3.2.alpha.4 — 适配 deepseek harness 0.1.2-alpha.4
- 0.3.1 — 原 0.2.0 发布
- 0.3.0-rc1 — 支持 deepseek harness 0.1.2-alpha.2
- 0.2.0 — 新增允许以 developer 角色发送系统提示
- 0.1.1 — 修复 peer 范围 bug
- 0.1.0 — 新增「模型+」开启 dsh 隐藏设置
