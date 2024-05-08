import { toRaw } from "vue";

export const useSectionData = (props, params) => {
  // console.log("Params", params);
  const fetchData = () => {
    const { getItemById } = useDirectusItems();
    return getItemById({
      collection: props.collectionName,
      id: props.itemId,
      params,
    });
  };

  return useAsyncData(props.itemId, fetchData).then(({ data: { value } }) => {
    return toRaw(value);
  });
};
