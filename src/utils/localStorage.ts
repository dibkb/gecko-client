interface LOCAL_STORAGE {
  LOCAL_STORAGE_HEADING: string;
  LOCAL_STORAGE_BLOG: string;
  LOCAL_STORAGE_USER: string;
  LOCAL_STORAGE_TAGS: string;
}
export const LOCAL_STORAGE: LOCAL_STORAGE = {
  LOCAL_STORAGE_HEADING: "GECKO_Heading",
  LOCAL_STORAGE_BLOG: "GECKO_Blog",
  LOCAL_STORAGE_USER: "GECKO_User",
  LOCAL_STORAGE_TAGS: "GECKO_Tags",
};
export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_BLOG);
  localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_HEADING);
};
