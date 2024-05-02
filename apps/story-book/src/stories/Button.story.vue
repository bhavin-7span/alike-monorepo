<template>
  <Story>
    <Button
      label="Button Label"
      :theme="state.theme"
      :type="state.type"
      :size="state.size"
    />
    <template #controls>
      <div>
        <HstSelect v-model="state.size" title="Size" :options="sizes" />
        <HstSelect v-model="state.type" title="Color" :options="types" />
        <HstSelect v-model="state.theme" title="Theme" :options="themes" />
      </div>
    </template>
  </Story>
</template>
<script setup>
import Button from "components/button.vue";
import { reactive } from "vue";

const state = reactive({
  type: "primary",
  theme: "solid",
  size: "md",
});

const sizes = ["md", "sm"];
const types = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted"];
</script>
<style scoped></style>
<docs lang="md">
## Button Props

- label
- varient like : default, info, danger, warning
</docs>
