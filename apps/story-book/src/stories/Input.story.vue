<template>
  <Story auto-props-disabled>
    <div class="h-96 p-10 w-[500px]">
      <Input
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
        :before="state.before"
        :after="state.after"
        v-model="fname"
      >
        <template #after>
          <div class="m-1 p-2 text-white bg-grey-700 rounded-full">
            <Icon name="AwIconSearch" class="text-xl" />
          </div>
        </template>
      </Input>
      <p class="mt-10">Input: {{ fname }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.size" title="size" :options="sizes" />
          <HstSelect v-model="state.color" title="color" :options="colors" />
          <HstSelect v-model="state.theme" title="theme" :options="themes" />
          <HstSelect v-model="state.shape" title="shape" :options="shapes" />
          <HstSelect
            v-model="state.direction"
            title="direction"
            :options="directions"
          />

          <HstCheckbox v-model="state.disabled" title="disabled" />
          <HstText v-model="state.type" title="type" />
          <HstText v-model="state.label" title="label" />
          <HstText v-model="state.placeholder" title="placeholder" />
          <HstText v-model="state.icon" title="icon" />
          <HstText v-model="state.before" title="before" />
          <HstText v-model="state.after" title="after" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Input from "components/input.vue";
import { reactive } from "vue";
import { ref } from "vue";

const fname = ref(null);

const state = reactive({
  type: "text",
  label: "Enter First name",
  placeholder: "First Name",
  id: "fname",
  name: "fname",
  icon: "AwIconCurrencyInr",
  direction: "row",
  size: "md",
  color: "grey",
  theme: "muted",
  shape: "rounded",
  disabled: false,
  before: null,
  after: null,
});

const sizes = ["md", "sm"];
const colors = ["grey"];
const themes = ["outlined-light", "outlined", "muted"];
const shapes = ["rounded", "square"];
const directions = ["row", "flex-row-reverse"];
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name  | Type     | Default Value | Description                            |
| ----- | -------- | ------------- | -------------------------------------- |
| rules | `String` | -             | name of vee-validate rules.            |
| error | `String` | -             | message to show on vee-validate error. |

## slot

| Name Description | description                              |
| ---------------- | ---------------------------------------- |
| icon             | render anything at place of icon         |
| before           | add anything before (left side) of input |
| after            | add anything after (right side) of input |
</docs>
