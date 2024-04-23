import gql from "graphql-tag";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { authToken } from "./auth-token";
import { getLanguage } from "@/composables/index.js";
// Get Cookie
// function getCookie(name) {
//   const cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();
//     if (cookie.startsWith(name + "=")) {
//       return cookie.substring(name.length + 1, cookie.length);
//     }
//   }
//   return null;
// }

// Query Function
export const gqlQuery = async (rawQuery, variable = null, header = null) => {
  const token = await authToken();
  const lang = await getLanguage();

  return new Promise((resolve, reject) => {
    const Query = gql`
      ${rawQuery}
    `;
    try {
      const { onResult, onError } = useQuery(Query, variable, {
        context: {
          headers: {
            Authorization: token ? "Bearer " + token : undefined,
            store: `abudhabi_${lang}`,
            // store: "alike",
            ...header,
          },
        },
      });
      onResult((result) => {
        if (result.data) {
          resolve(result);
        }
      });
      onError((error) => {
        // Cors Error Caught Here
        console.error(error);
        let isNotAuthorized = error.message.includes("isn't authorized");
        if (isNotAuthorized) {
          document.cookie = `ab_auth=;path=/;domain=${
            import.meta.env.VITE_COOKIE_HOST
          }`;
          window.location.href = "/signin";
        }
      });
    } catch (error) {
      console.error("Catch Error : ", error);
      reject(error);
    }
  });
};

// Mutation Function
export const gqlMutation = async (rawQuery, variable) => {
  const token = await authToken();
  const lang = await getLanguage();
  return new Promise(async (resolve, reject) => {
    const Query = gql`
      ${rawQuery}
    `;
    try {
      const { mutate } = useMutation(Query, {
        context: {
          headers: {
            Authorization: token ? "Bearer " + token : undefined,
            store: `abudhabi_${lang}`,
            // ...header,
          },
        },
      });
      const response = await mutate(variable);
      if (response && response.data) {
        resolve(response);
      } else {
        console.error("Something Went Wrong!");
      }
    } catch (error) {
      // console.error("Mutation Error : ", error);
      reject(error);
    }
  });
};
