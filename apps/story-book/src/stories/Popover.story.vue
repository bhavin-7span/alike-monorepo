<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <Popover
        :label="state.label"
        :selectedValue="state.selectedValue"
        :count="state.count"
        :popoverClass="state.popoverClass"
      />
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstText v-model="state.label" title="label" />
          <HstText v-model="state.selectedValue" title="Selected Value" />
          <HstText v-model="state.count" title="Count" />
          <HstText v-model="state.popoverClass" title="Popover Class" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Popover from "components/Popover.vue";
import { reactive } from "vue";

const state = reactive({
  label: "Select",
  selectedValue: "",
  count: "",
  popoverClass: "",
});
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name          | Type             | Default Value | Description                                                                                                                             |
| ------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| label         | `String`         | Select        | label (placeholder) for popover.                                                                                                        |
| selectedValue | `String, Number` |               | If you will add selected value then label (placeholder) will replaced with selectedValue. (use for radio & checkbox)                    |
| count         | `String, Number` |               | To show the count at the place of dropdown arrow.                                                                                       |
| popoverClass  | `String`         |               | Add a class for set the position,shadow,padding,border radius of popover (class absolute, drop-shadow, bg-white is added byt default ). |

## Slots

| Name    | Default Content | Data Available | Description                                                   |
| ------- | --------------- | -------------- | ------------------------------------------------------------- |
| icon    | Icon Component  | -              | Render your own icon or any other component at place of icon. |
| default | label           | -              | By default label is rendered here.                            |
</docs>
