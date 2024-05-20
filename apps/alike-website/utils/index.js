// Default Props for all Sections
export const defaultProps = () => {
  return {
    collectionName: {
      type: String,
      required: true,
    },
    itemId: {
      type: [String, Number],
      required: true,
    },
  };
};

// Assets URL
export const getAssetURL = (path) => {
  const env = useRuntimeConfig();
  return env.public?.directusAssetsUrl + path;
};

// Just pass the parent keys in array & it generates deep language filter.
export const getDeepLocaleFilter = (keys) => {
  const { locale } = useI18n();
  const filter = {};
  let currentFilter = filter;

  keys.forEach((key, index) => {
    currentFilter[key] = {};

    if (index === keys.length - 1) {
      currentFilter[key]["translations"] = {
        _filter: {
          _and: [
            {
              languages_id: {
                code: {
                  _eq: locale.value,
                },
              },
            },
          ],
        },
      };
    } else {
      currentFilter = currentFilter[key];
    }
  });

  return filter;
};
