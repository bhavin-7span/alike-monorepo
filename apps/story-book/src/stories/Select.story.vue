<template>
  <Story auto-props-disabled>
    <div class="p-8">
      <Select
        v-model="selectedCurrency"
        :options="currencies"
        :icon-after="state.iconAfter"
        :show-option-icon="state.showOptionIcon"
        :selected-icon="state.selectedIcon"
        :icon="state.icon"
        :disabled="state.disabled"
        :count="state.count"
        :placeholder="state.placeholder"
        :placeholder-icon="state.placeholderIcon"
        :dynamic-placeholder-icon="state.dynamicPlaceholderIcon"
        :show-dropdown-icon="state.showDropdownIcon"
        :theme="state.theme"
        :color="state.color"
        :size="state.size"
        name="currency-select"
      />
    </div>
    <p>selected Value: {{ selectedCurrency }}</p>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.color" title="color" :options="colors" />
          <HstSelect v-model="state.size" title="size" :options="sizes" />
          <HstSelect v-model="state.theme" title="theme" :options="themes" />
          <HstText v-model="state.placeholder" title="placeholder" />
          <HstText v-model="state.selectedIcon" title="SelectedIcon" />
          <HstText
            type="number"
            v-model="state.placeholderIcon"
            title="placeholderIcon"
          />
          <HstText v-model="state.icon" title="icon (default)" />
          <HstText type="number" v-model="state.count" title="count" />
          <HstCheckbox v-model="state.showOptionIcon" title="showOptionIcon" />
          <HstCheckbox
            v-model="state.dynamicPlaceholderIcon"
            title="dynamicPlaceholderIcon"
          />
          <HstCheckbox v-model="state.iconAfter" title="iconAfter" />
          <HstCheckbox v-model="state.disabled" title="disabled" />
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
import Select from "components/select.vue";

import { reactive } from "vue";
import { ref } from "vue";

const state = reactive({
  placeholder: "Select Currency",
  selectedIcon: "AwIconRadioChecked",
  icon: "AwIconRadioBlank",
  color: "black",
  theme: "outlined",
  size: "md",
  count: "",
  placeholderIcon: "AwIconFilter",
  dynamicPlaceholderIcon: false,
  showOptionIcon: true,
  iconAfter: false,
  disabled: false,
  showDropdownIcon: true,
});

const selectedCurrency = ref();

const sizes = ["md", "sm"];
const colors = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted", "link"];

const currencies = reactive([
  {
    name: "AED",
    label: "Currency-AED",
    icon: "AwIconCurrencyAed",
    id: 1,
    value: 11,
  },
  {
    name: "Euro",
    label: "Currency-Euro",
    icon: "AwIconCurrencyEuro",
    id: 2,
    value: 21,
  },
  {
    name: "GBP",
    label: "Currency-GBP",
    icon: "AwIconCurrencyGbp",
    id: 3,
    value: 31,
  },
]);
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name                   | Type             | Default Value      | Description                                                                                             |
| ---------------------- | ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| name                   | `String`         | select             | if you are using multi select in single page the provide a name of select group.                        |
| options                | `Array`          | []                 | Array of options.                                                                                       |
| placeholder            | `String`         | Select             | placeholder for select.                                                                                 |
| iconAfter              | `Boolean`        | false              | if true, Icon will be show after the label.                                                             |
| showOptionIcon         | `Boolean`        | false              | provide the icon key in option object to show the individual icon.                                      |
| selectedIcon           | `String,Boolean` | AwIconRadioChecked | if you want to show only icon on selected item then pass the name of that icon else pass false to hide. |
| icon                   | `String`         | AwIconRadioBlank   | Show icon before label in each item.                                                                    |
| count                  | `String,Number`  | -                  | pass the count number to show at the place of select dropdown arrow.                                    |
| disabled               | `Boolean`        | false              | to disabled the select component.                                                                       |
| placeholderIcon        | `String,Boolean` | AwIconFilter       | pass icon name to shoe the placeholder icon, pass false to hide the placeholder icon .                  |
| dynamicPlaceholderIcon | `Boolean`        | false              | pass true, if you want to show the dynamic placeholder icon from your option object only .              |
| showDropdownIcon       | `Boolean`        | true               | To hide and show the dropdown icon of select component.                                                 |

## Slots

| Name    | Default Content | Data Available            | Description                                                                                              |
| ------- | --------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| default | radio buttons   | data,index,isActive,value | you can get selected data of option, value of selected options, option is active or not, index of option |

## Events

| Name              | Data   | Description                                  |
| ----------------- | ------ | -------------------------------------------- |
| update:modelValue | array  | emit value of selected option. (Use v-model) |
| change            | array  | array selected values with full data object. |
| input             | object | return only changed value                    |
</docs>
