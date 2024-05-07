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
        name="currency-select"
      />
    </div>
    <p>selected Value: {{ selectedCurrency }}</p>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstText v-model="state.placeholder" title="Placeholder" />
          <HstText v-model="state.selectedIcon" title="Selected Icon" />
          <HstText
            type="number"
            v-model="state.placeholderIcon"
            title="Placeholder Icon"
          />
          <HstText v-model="state.icon" title="Icon (default)" />
          <HstText type="number" v-model="state.count" title="Show Count" />
          <HstCheckbox
            v-model="state.showOptionIcon"
            title="Show option Icon"
          />
          <HstCheckbox
            v-model="state.dynamicPlaceholderIcon"
            title="Placeholder Icon from option"
          />
          <HstCheckbox v-model="state.iconAfter" title="Icon After" />
          <HstCheckbox v-model="state.disabled" title="Disabled" />
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
  count: "",
  placeholderIcon: "AwIconFilter",
  dynamicPlaceholderIcon: false,
  showOptionIcon: true,
  iconAfter: false,
  disabled: false,
});

const selectedCurrency = ref();

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
