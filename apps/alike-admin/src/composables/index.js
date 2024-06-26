const name = "ab_locale";

/**
 * Get token from the cookie
 */
export const getLanguage = () => {
  try {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return "en";
  } catch (error) {
    console.error("Catch Error : ", error);
    throw error;
  }
};
