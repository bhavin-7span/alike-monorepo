<template>
  <Story>
    <Button
      label="Button Label"
      :theme="state.theme"
      :type="state.type"
      :size="state.size"
      :is-loading="state.loading"
      :icon-after="state.iconAfter"
      icon="AwIconArrowRight"
    />
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.size" title="Size" :options="sizes" />
          <HstSelect v-model="state.type" title="Color" :options="types" />
          <HstSelect v-model="state.theme" title="Theme" :options="themes" />
          <HstCheckbox v-model="state.loading" title="Loading" />
          <HstCheckbox v-model="state.iconAfter" title="Icon After" />
        </template>
      </ControlGroup>
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
  loading: false,
  iconAfter: false,
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
