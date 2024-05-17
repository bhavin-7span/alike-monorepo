<template>
  <Story auto-props-disabled>
    <RichText
      :data="state.data"
      :as="state.as"
      :weight="state.weight"
      :size="state.size"
    />

    <div>
      <p class="font-bold mt-10">Font-sizes:</p>
      <pre>{{ textSizes }}</pre>

      <p class="font-bold mt-10">Font-Weight:</p>
      <pre>{{ fontWeight }}</pre>
    </div>
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

const textSizes = [
  "xs - (12px)",
  "sm - (14px)",
  "base - (16px)",
  "lg - (20px)",
  "xl - (24px)",
  "3xl - (28px)",
  "4xl - (32px)",
  "5xl - (36px)",
  "6xl - (48px)",
  "7xl - (60px)",
  "8xl - (72px)",
];

const fontWeight = ["normal-400", "medium-500", "semibold-600", "bold-700"];

const weightOptions = ["normal", "medium", "semi-bold", "bold"];
const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
</script>
<style scoped></style>
