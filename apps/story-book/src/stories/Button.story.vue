<template>
  <Story auto-props-disabled>
    <Button
      label="Button Label"
      icon="AwIconCurrencyInr"
      :theme="state.theme"
      :type="state.type"
      :size="state.size"
      :is-loading="state.loading"
      :icon-after="state.iconAfter"
      :disabled="state.disabled"
      :shape="state.shape"
    />
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.size" title="Size" :options="sizes" />
          <HstSelect v-model="state.type" title="Color" :options="types" />
          <HstSelect v-model="state.theme" title="Theme" :options="themes" />
          <HstSelect v-model="state.shape" title="shape" :options="shapes" />
          <HstCheckbox v-model="state.loading" title="Loading" />
          <HstCheckbox v-model="state.iconAfter" title="Icon After" />
          <HstCheckbox v-model="state.disabled" title="Disabled" />
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
  shape: "rounded",
  loading: false,
  iconAfter: false,
  disabled: false,
});

const sizes = ["md", "sm"];
const types = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted"];
const shapes = ["rounded", "circle"];
</script>
<style scoped></style>
<docs lang="md">
## Button Props

- label
- varient like : default, info, danger, warning
</docs>
