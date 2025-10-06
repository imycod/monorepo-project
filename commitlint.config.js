export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [2, "always", [
      "feat",
      "fix",
      "docs",
      "style",
      "refactor",
      "perf",
      "test",
      "build",
      "chore",
      "revert",
      // "ci",
      // "wip",
      // "workflow",
      // "release"
    ]],
  },
  prompt: {
    types: [
      {
        value: "feat", name: "新功能: 新增功能", description: "feat: 新功能"
      },
      {
        value: "fix", name: "修复: 修复缺陷", description: "fix: 修复"
      },
      {
        value: "docs", name: "文档: 更新文档", description: "docs: 文档"
      },
      {
        value: "style", name: "🌽样式：样式调整 (不影响代码运行)", description: "style: 样式"
      },
      {
        value: "refactor", name: "🏗 重构：代码重构 (不新增功能也不修复bug) ", description: "refactor: 重构"
      },
      {
        value: "perf", name: "🚀 性能：提升性能", description: "perf: 性能"
      },
      {
        value: "test", name: "🧪 测试：添加测试或更新测试", description: "test: 测试"
      },
      {
        value: "build", name: "🚚 构建：影响构建系统或外部依赖", description: "build: 构建"
      },
      {
        value: "chore", name: "🔨 工具：更改构建流程或辅助工具", description: "chore: 杂项"
      },
      {
        value: "revert", name: "👈 回滚：代码回滚", description: "revert: 回滚"
      },
      // {
      //   value: "ci", description: "ci: 持续集成"
      // },
      // {
      //   value: "wip", description: "wip: 开发中"
      // },
      // {
      //   value: "workflow", description: "workflow: 工作流"
      // },
      // {
      //   value: "release", description: "release: 发布"
      // }
    ]
  },
  scopes: [
    "root",
    "frontend",
    "backend",
    "components",
    "utils",
    "config",
    "docs",
    "tests",
  ],
  allowCustomScopes: true,
  skipQuestions: ["body", "footer", "breaking", "footerPrefix"], // 跳过详细描述和底部信息
  messages: {
    type: "选择提交类型:",
    scope: "选择影响范围(可选):",
    subject: "💻写一个简洁明了的变更描述:",
    body: "提供更详细的变更说明(可选):",
    // breaking: "是否包含破坏性变更(可选):",
    footer: "提供与变更相关的元信息 关联ISSUE 或 BREAKING CHANGE (可选):",
    confirmCommit: "确定提交?",
  }
}