<template>
  <Story auto-props-disabled>
    <RichText
      :data="state.data"
      :as="state.as"
      :weight="state.weight"
      :size="state.size"
    />
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstText v-model="state.data" title="data" />
          <HstSelect v-model="state.as" title="as" :options="tags" />
          <HstSelect v-model="state.size" title="size" :options="sizes" />
          <HstSelect
            v-model="state.weight"
            title="weight"
            :options="weightOptions"
          />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import RichText from "components/common/rich-text.vue";
import { reactive } from "vue";

const state = reactive({
  as: "h1",
  data: "This is <b><u>RichText</u></b> component",
  size: "base",
  weight: "normal",
});

const sizes = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
];

const weightOptions = ["normal", "medium", "semi-bold", "bold"];
const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
</script>
<style scoped></style>
