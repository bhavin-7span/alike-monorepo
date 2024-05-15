import { toRaw } from "vue";

export const useSectionData = async (props, params) => {
  return await useAsyncData(props.itemId, () => {
    const { getItemById } = useDirectusItems();
    return getItemById({
      collection: props.collectionName,
      id: props.itemId,
      params,
    });
  })
    .then(({ data: { value } }) => {
      return toRaw(value);
    })
    .catch((error) => {
      console.log("Error While Fetch Pages : ", error);
    });
};
