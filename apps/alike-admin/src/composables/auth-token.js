const name = "ab_auth";

/**
 * Get token from the cookie
 */
export const authToken = async () => {
  try {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  } catch (error) {
    console.error("Catch Error : ", error);
    throw error;
  }
};
