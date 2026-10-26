# 朱洋意 · 作品集（公开展示版 / Public Edition）

> 🌐 线上地址：https://wenhulaojiu.github.io/portfolio-public/
> 📦 主站（完整版，含完整联系方式）：https://wenhulaojiu.github.io/portfolio/

与主站**样式完全一致**的作品集部署，但为公开传播场景做了脱敏：

| 项目 | 主站 | 本站（公开展示版） |
|---|---|---|
| 电话 / 微信 / QQ | 显示 | ❌ 已移除 |
| QQ 邮箱 / Gmail | 显示 | ❌ 已移除 |
| GitHub 入口 | ✅ | ✅ 唯一联系方式 |
| 姓名 / 学校 / 城市 | ✅ | ✅ 保留 |
| 全部功能（双语/音乐/主题/AI 助手/交互层） | ✅ | ✅ 完全相同 |

## 本地预览

```bash
python -m http.server 8080   # 访问 http://localhost:8080
```

## 怎么改内容

与主站结构一致：动态内容在 `js/data.js`，静态文案在 `js/i18n.js`。
改完 `git push` 后约 1 分钟线上自动生效。

## 与主站的同步方式

主仓库的新功能（css/main.js）如需同步到本仓库：把主仓库的
`css/style.css`、`js/main.js`、`404.html` 复制过来覆盖即可——
本仓库与主站的差异**只在** `js/data.js`（联系区）、`js/i18n.js`（联系文案）、
`index.html`（大邮箱链接 → GitHub 链接、页脚、meta 地址）和本 README。
