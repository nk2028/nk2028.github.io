// Bilingual content data
const i18n = {
  "page-title": {
    zh: "nk2028 - 計算語言學專家",
    en: "nk2028 - Computational Linguistics Experts",
  },
  "subtitle": {
    zh: "計算語言學專家",
    en: "Computational Linguistics Experts",
  },
  "overview-title": {
    zh: "概述",
    en: "Overview",
  },
  "overview-p1": {
    zh: "在 nk2028，我們相信技術的力量可以解開語言和交流的奧秘。利用我們在計算語言學方面的專業知識，我們努力建立工具，以便於研究人員、學生和語言愛好者存取、分析和理解我們的語言。",
    en: "At nk2028, we believe in the power of technology to unlock the mysteries of language and communication. With our expertise in computational linguistics, we strive to build tools that make it easier for researchers, students, and language enthusiasts to access, analyse, and understand our languages.",
  },
  "overview-p2": {
    zh: "我們的專業範疇涵蓋了各種語言學領域，但是我們在 CJKV（中文、日文、韓文和越南文）歷史語言學方面的卓越工作使我們得到認可，並在該領域中成為領導者。此外，我們的團隊正在積極探索現代中文和其他語言領域的新可能性，進一步貢獻了我們對推進語言處理領域的承諾。",
    en: "Our expertise spans a diverse array of linguistic disciplines, but we have gained recognition for our exceptional work in CJKV (Chinese, Japanese, Korean, and Vietnamese) historical linguistics. Our commitment to excellence in this field has established us as a leader in this domain. In addition, our team is actively exploring new possibilities in the realm of modern Chinese and other languages, contributing to our ongoing commitment to advancing the field of language processing.",
  },
  "projects-title": {
    zh: "專案",
    en: "Projects",
  },
  "projects-intro": {
    zh: "請在我們的 GitHub 頁面中查看我們的專案列表。我們的計算語言學專案儲存庫不斷增長，我們邀請您探索和了解我們的工作。",
    en: "Please visit our GitHub page to view our list of projects. Our repository of computational linguistics projects is constantly growing, and we invite you to explore and learn more about our work.",
  },
  "github-button": {
    zh: "訪問 GitHub",
    en: "Visit GitHub",
  },
  "contact-title": {
    zh: "聯絡",
    en: "Contact",
  },
  "contact-intro-span1": {
    zh: "如果您有任何疑問或想與我們聯絡，請傳送電子郵件至：",
    en: "If you have any questions or would like to contact us, please send an email to: ",
  },
  "contact-intro-span2": {
    zh: "。",
    en: ".",
  },
  "join-title": {
    zh: "加入我們",
    en: "Join Us",
  },
  "join-text-span1": {
    zh: "我們一直在尋找有才華和熱情的人加入我們的團隊。如果您有興趣與我們一起在尖端計算語言學專案上工作，請不要猶豫，傳送電子郵件至",
    en: "We are always looking for talented and passionate individuals to join our team. If you are interested in working with us on cutting-edge computational linguistics projects, please don't hesitate to send an email to",
  },
  "join-text-span2": {
    zh: "。我們期待與您聯絡！",
    en: ". We look forward to hearing from you!",
  },
  "footer-text": {
    zh: "· 計算語言學專家",
    en: "· Computational Linguistics Experts",
  },
  "lang-button": {
    zh: "English",
    en: "中文",
  },
};

// Project descriptions
const projects = [
  {
    url: "tshet-uinh-autoderiver",
    name: {
      zh: "切韻音系自動推導器",
      en: "Tshet-uinh Autoderiver",
    },
  },
  {
    url: "tshet-uinh-tools",
    name: {
      zh: "切韻音系查詢器",
      en: "Tshet-uinh Query Tool",
    },
  },
  {
    url: "tshet-uinh-flashcard",
    name: {
      zh: "切韻 Flashcard",
      en: "Tshet-uinh Flashcards",
    },
  },
  {
    url: "tshet-uinh-fanqie",
    name: {
      zh: "反切計算器",
      en: "Fanqie Calculator",
    },
  },
  {
    url: "yindian",
    name: {
      zh: "音典網頁版",
      en: "Yindian Web App",
    },
  },
  {
    url: "putonghua-ipa-converter",
    name: {
      zh: "普通話-IPA 轉換器",
      en: "Putonghua-IPA Converter",
    },
  },
  {
    url: "ipa-practise",
    name: {
      zh: "IPA 練習器",
      en: "IPA Practice Tool",
    },
  },
  {
    url: "rhyme-stat",
    name: {
      zh: "韻段離合指數統計工具",
      en: "Rhyme Statistics Tool",
    },
  },
  {
    url: "opencc-web",
    name: {
      zh: "OpenCC 網頁版",
      en: "OpenCC Web Interface",
    },
  },
  {
    url: "uyghur",
    name: {
      zh: "維吾爾語相關資源",
      en: "Uyghur Language Resources",
    },
  },
  {
    url: "tshet-uinh-js",
    name: {
      zh: "TshetUinh.js 文檔",
      en: "TshetUinh.js Documentation",
    },
  },
  {
    url: "uinh-kyaengh-js",
    name: {
      zh: "UinhKyaengh.js 文檔",
      en: "UinhKyaengh.js Documentation",
    },
  },
];

// Function to set or update meta tags
function setOrUpdateMeta(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

// Detect user preferred language
function getUserPreferredLanguage() {
  const languages = navigator.languages || [navigator.language || navigator.userLanguage];

  // Check whether the user prefers Chinese (zh) or English (en)
  for (let lang of languages) {
    const langCode = lang.toLowerCase().split("-")[0];

    if (langCode === "zh") return "zh";
    if (langCode === "en") return "en";
  }

  return "en";
}

// Get language from URL parameter or default to en-GB
function getLanguageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");
  return lang === "zh-HK" || lang === "zh" ? "zh" : lang === "en-GB" || lang === "en" ? "en" : null;
}

// Emplace project cards dynamically
function emplaceProjectCards(lang) {
  const grid = document.getElementById("projects-grid");

  // Clear existing cards
  grid.innerHTML = "";

  // Add cards for each project
  projects.forEach(project => {
    const card = document.createElement("a");
    card.href = "https://nk2028.shn.hk/" + project.url + "/";
    card.className = "project-card";
    card.target = "_blank";
    card.rel = "noopener";

    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = project.name[lang];

    const desc = document.createElement("div");
    desc.className = "project-desc";
    desc.lang = "en-GB"; // URLs are in English
    desc.textContent = project.url;

    card.appendChild(title);
    card.appendChild(desc);
    grid.appendChild(card);
  });
}

// Apply language to all elements
function applyLanguage(lang) {
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[key]) {
      el.textContent = i18n[key][lang];
    }
  });

  // Update language toggle button
  document.getElementById("lang-button-text").textContent = i18n["lang-button"][lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang === "en" ? "en-GB" : "zh-HK";

  // Update title
  document.title = i18n["page-title"][lang];
}

// Initialize or update language settings
function initOrUpdateLanguage(lang) {
  setOrUpdateMeta("og:locale", lang === "zh" ? "zh_HK" : "en_GB");
  setOrUpdateMeta("og:locale:alternate", lang === "zh" ? "en_GB" : "zh_HK");
  applyLanguage(lang);
  emplaceProjectCards(lang);
}

// Toggle language function
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "en-GB" ? "zh" : "en";
  initOrUpdateLanguage(newLang);
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  const initialLang = getLanguageFromURL() || getUserPreferredLanguage();
  initOrUpdateLanguage(initialLang);
});
