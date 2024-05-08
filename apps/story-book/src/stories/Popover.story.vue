<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <Popover
        :placeholder="state.placeholder"
        :selectedValue="state.selectedValue"
        :count="state.count"
        :popoverIcon="state.popoverIcon"
        :popoverClass="state.popoverClass"
        :showDropdownIcon="state.showDropdownIcon"
        :color="state.color"
        :size="state.size"
        :theme="state.theme"
        :arrowPosition="state.arrowPosition"
      />
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.color" title="color" :options="colors" />
          <HstSelect v-model="state.theme" title="theme" :options="themes" />
          <HstSelect v-model="state.size" title="size" :options="sizes" />
          <HstText v-model="state.placeholder" title="placeholder" />
          <HstText v-model="state.selectedValue" title="selectedValue" />
          <HstText v-model="state.popoverClass" title="popoverClass" />
          <HstText v-model="state.popoverIcon" title="popoverIcon" />
          <HstNumber type="number" v-model="state.count" title="count" />
          <HstNumber
            type="number"
            v-model="state.arrowPosition"
            title="arrowPosition"
          />
          <HstCheckbox
            v-model="state.showDropdownIcon"
            title="showDropdownIcon"
          />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Popover from "components/Popover.vue";
import { reactive } from "vue";

const state = reactive({
  placeholder: "Select",
  selectedValue: "",
  count: "",
  popoverIcon: "AwIconFilter",
  popoverClass: "top-20",
  showDropdownIcon: true,
  color: "black",
  size: "md",
  theme: "outlined",
  arrowPosition: 50,
});

const sizes = ["md", "sm"];
const colors = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted", "link"];
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name             | Type             | Default Value | Description                                                                                                                             |
| ---------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Placeholder      | `String`         | Select        | Placeholder (placeholder) for popover.                                                                                                  |
| count            | `String, Number` |               | To show the count at the place of dropdown arrow.                                                                                       |
| popoverClass     | `String`         |               | Add a class for set the position,shadow,padding,border radius of popover (class absolute, drop-shadow, bg-white is added byt default ). |
| popoverIcon      | `String`         | AwIconFilter  | name of icon to show in popover button on left side                                                                                     |
| showDropdownIcon | `Boolean`        | true          | hide the dropdown icon in popover button right side.                                                                                    |
| selectedValue    | `String, Number` |               | If you will add selected value then label (placeholder) will replaced with selectedValue. (use for radio & checkbox)                    |
| color            | `String`         | black         | color type like primary,secondary,grey,black.                                                                                           |
| size             | `String`         | md            | size like sm,md                                                                                                                         |
| theme            | `String`         | muted         | theme type like solid, outlined, muted                                                                                                  |
| arrowPosition    | `Number`         | 50            | popover arrow postition                                                                                                                 |

## Slots

| Name    | Default Content           | Data Available | Description                                                      |
| ------- | ------------------------- | -------------- | ---------------------------------------------------------------- |
| default | Your content will be here | -              | render anything inside this slot ex. radio group, checkbox group |
</docs>
