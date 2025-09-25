export const getStoredLanguage = () => {
  return localStorage.getItem("i18nextLng") || "en";
};

export const setStoredLanguage = (lang) => {
  localStorage.setItem("i18nextLng", lang);
};
