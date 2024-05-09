<template>
  <Story auto-props-disabled>
    <div class="h-96 p-10 w-[500px]">
      <FormInput
        :type="state.type"
        :label="state.label"
        :placeholder="state.placeholder"
        :id="state.id"
        :name="state.name"
        :icon="state.icon"
        :direction="state.direction"
        :size="state.size"
        :color="state.color"
        :theme="state.theme"
        :shape="state.shape"
      />
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.size" title="size" :options="sizes" />
          <HstSelect v-model="state.color" title="color" :options="colors" />
          <HstSelect v-model="state.theme" title="theme" :options="themes" />
          <HstSelect v-model="state.shape" title="shape" :options="shapes" />
          <HstSelect
            v-model="state.color"
            title="color"
            :options="colorOptions"
          />
          <HstCheckbox v-model="state.disabled" title="disabled" />
          <HstText v-model="state.type" title="type" />
          <HstText v-model="state.label" title="label" />
          <HstText v-model="state.placeholder" title="placeholder" />
          <HstText v-model="state.icon" title="icon" />
          <HstText v-model="state.direction" title="direction" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import FormInput from "components/form-input.vue";
import { reactive } from "vue";
import { ref } from "vue";

const fname = ref(null);

const state = reactive({
  type: "text",
  label: "Enter First name",
  placeholder: "First Name",
  id: "fname",
  name: "fname",
  icon: "AwIconInr",
  direction: "row",
  size: "md",
  color: "grey",
  theme: "muted",
  shape: "rounded",
});

const sizes = ["md", "sm"];
const colors = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted", "link"];
const shapes = ["rounded", "square"];
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name | Type     | Default Value | Description    |
| ---- | -------- | ------------- | -------------- |
| name | `String` | radio-group   | name of group. |

## Events

| Name              | Data  | Description                                  |
| ----------------- | ----- | -------------------------------------------- |
| update:modelValue | array | emit value of selected option. (Use v-model) |
</docs>
