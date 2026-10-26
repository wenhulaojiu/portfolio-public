/* ==========================================================
   双语引擎：静态文案字典 + 语言切换（公开展示版）
   动态内容由 main.js 的 renderDynamic 读取 data.js 的 *_en 字段
   ========================================================== */

const I18N = {
  "META.title_zh": "朱洋意 · 福建师范大学 · 计算机专业 | 个人作品集（公开展示版）",
  "META.title_en": "Zhu Yangyi · CS @ Fujian Normal University | Portfolio (Public Edition)",
  "META.desc_zh": "朱洋意的作品集公开展示版 — 福建师范大学计算机专业 2025 级，四个零依赖手写项目。本页不含直接联系方式，联系请走 GitHub。",
  "META.desc_en": "Public edition of Zhu Yangyi's portfolio — CS undergrad at Fujian Normal University (class of 2025). Four hand-built, zero-dependency projects. GitHub is the only contact channel.",

  "nav.logo": { zh: "朱洋意<span class=\"nav-logo-dot\">.</span>", en: "Zhu Yangyi<span class=\"nav-logo-dot\">.</span>" },
  "footer.logo": { zh: "朱洋意<span class=\"footer-dot\">.</span>", en: "Zhu Yangyi<span class=\"footer-dot\">.</span>" },
  "nav.about": { zh: "关于", en: "About" },
  "nav.skills": { zh: "技能", en: "Skills" },
  "nav.projects": { zh: "项目", en: "Projects" },
  "nav.contact": { zh: "联系", en: "Contact" },
  "nav.cta": { zh: "招实习生？点这里", en: "Hiring? This way." },

  "hero.eyebrow": { zh: "PORTFOLIO — 福建师范大学 · 计算机专业 · 2025 级", en: "PORTFOLIO — FUJIAN NORMAL UNIVERSITY · CS MAJOR · CLASS OF 2025" },
  "hero.typingLabel": { zh: "IS", en: "IS A" },
  "hero.desc": {
    zh: "把想法做成能跑起来的东西。喜欢手写每一行代码，也擅长让 AI 加速——<br class=\"br-desktop\" />目前正在寻找 <strong>2027 暑期 / 日常开发实习</strong>（前端 · 全栈 · AI 应用）。",
    en: "I turn ideas into things that run — hand-writing every line, with AI as my accelerator.<br class=\"br-desktop\" />Currently looking for a <strong>2027 summer / part-time internship</strong> (frontend · full-stack · AI apps).",
  },
  "hero.cta1": { zh: "查看项目 <span class=\"btn-arrow\">→</span>", en: "View Projects <span class=\"btn-arrow\">→</span>" },
  "hero.cta2": { zh: "与我联系", en: "Contact Me" },
  "hero.meta2": { zh: "福州 · 福建", en: "Fuzhou · Fujian" },

  "about.title": { zh: "关于我<span class=\"sec-title-dot\">.</span>", en: "About Me<span class=\"sec-title-dot\">.</span>" },
  "about.lede": {
    zh: "你好！我是朱洋意，福建师范大学计算机专业 2025 级本科生。从写下第一行 Hello&nbsp;World 开始，我就对「做东西给人用」这件事上了瘾。",
    en: "Hi! I'm Zhu Yangyi, a CS undergraduate (class of 2025) at Fujian Normal University. Ever since my first Hello&nbsp;World, I've been hooked on building things people actually use.",
  },
  "about.p1": {
    zh: "大一到现在，我已独立完成并上线了两个 AI 小游戏（<strong>圈层谣言攻防战</strong>、<strong>AI 伪装狼人杀</strong>）和一个浏览器扩展（<strong>刘看山网页助手</strong>），全部零第三方依赖。这个网站是我最新的作品——从视觉设计到每一行动画全部手写。它会一直迭代，欢迎随时回来看看新东西。",
    en: "So far I've shipped two AI games — <strong>Circle Rumor Warfare</strong> and <strong>AI Werewolf</strong> — plus a browser extension, <strong>Liu Kanshan Web Assistant</strong>, all with zero third-party dependencies. This site is my latest build: designed and hand-coded down to every animation, and always evolving.",
  },
  "about.p2": {
    zh: "目前主攻 <strong>Web 全栈</strong> 与 <strong>AI 应用开发</strong>：白天啃数据结构和计算机网络，晚上写自己的小项目。我习惯用 AI 辅助编程提效，但坚持搞懂每一行代码背后的原理——毕竟面试官问的是我，不是 Copilot。",
    en: "I'm deep into <strong>full-stack web</strong> and <strong>AI application development</strong>: core courses by day, side projects by night. I move fast with AI-assisted tooling but insist on understanding every line behind it — in the end, interviews ask me, not Copilot.",
  },
  "about.eduSchool": { zh: "福建师范大学", en: "Fujian Normal University" },
  "about.eduMajor": { zh: "计算机科学与技术 · 本科在读（大二）", en: "B.Sc. in Computer Science · Sophomore" },

  "skills.title": { zh: "技能版图<span class=\"sec-title-dot\">.</span>", en: "The Skill Map<span class=\"sec-title-dot\">.</span>" },
  "skills.sub": { zh: "不背名词，只列真正写过代码的。", en: "No buzzword bingo — only things I've actually written code for." },

  "projects.title": { zh: "项目精选<span class=\"sec-title-dot\">.</span>", en: "Selected Works<span class=\"sec-title-dot\">.</span>" },
  "projects.sub": { zh: "数量不多，每一个都亲手完成。列表会持续更新。", en: "Not many, but every one is genuinely mine. The list keeps growing." },

  "contact.title": {
    zh: "正在找实习的<em>我</em>，<br />正在招实习生的<em>你</em>。",
    en: "Looking for an internship: <em>me</em>.<br />Looking for interns: <em>you</em>.",
  },
  "contact.sub": { zh: "实习机会、项目合作、或者单纯聊聊技术——欢迎通过 GitHub 联系，我会尽快回复。", en: "Internships, collabs, or just talking tech — reach me on GitHub, I reply as fast as I can." },
  "contact.note": { zh: "本页为公开展示版 · GitHub 是唯一公开联系方式 · 卡片可一键复制", en: "Public edition · GitHub is the only contact channel · click a card corner to copy" },

  "ui.backTop": { zh: "回到顶部 ↑", en: "Top ↑" },
  "ui.music": { zh: "背景音乐（点击开关）", en: "Background music (click to toggle)" },
  "chat.title": { zh: "AI 助手", en: "AI Assistant" },
  "chat.ph": { zh: "问我任何关于他的问题…", en: "Ask me anything about Zhu…" },
  "toast": { zh: "已复制到剪贴板 ✓", en: "Copied to clipboard ✓" },
};

function currentLang() {
  return localStorage.getItem("zyy-lang") === "en" ? "en" : "zh";
}
function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return currentLang() === "en" ? entry.en : entry.zh;
}
function L(zh, en) {
  return currentLang() === "en" ? (en ?? zh) : zh;
}

function applyLang(lang) {
  localStorage.setItem("zyy-lang", lang);
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
  document.title = currentLang() === "en" ? I18N["META.title_en"] : I18N["META.title_zh"];
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", currentLang() === "en" ? I18N["META.desc_en"] : I18N["META.desc_zh"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = currentLang() === "en" ? "中" : "EN";

  if (typeof window.renderDynamic === "function") window.renderDynamic();
  window.dispatchEvent(new CustomEvent("langchange"));
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang() === "en" ? "zh" : "en");
});

if (currentLang() === "en") applyLang("en");
