import { ref, watch } from "vue";

const currentLang = ref("zh");

export function useLanguage() {
  const switchLanguage = () => {
    currentLang.value = currentLang.value === "zh" ? "en" : "zh";
    localStorage.setItem("language", currentLang.value);
  };

  const initLanguage = () => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "zh" || savedLang === "en")) {
      currentLang.value = savedLang;
    }
  };

  watch(currentLang, (newLang) => {
    localStorage.setItem("language", newLang);
  });

  return {
    currentLang,
    switchLanguage,
    initLanguage,
  };
}
