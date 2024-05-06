<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <RadioGroup
        v-model="city"
        :value-is="state.valueIs"
        :options="cities"
        :label-is="state.labelIs"
        :disabled="state.disabled"
        :color="state.color"
        class="flex gap-3"
      />
      <p>Selected: {{ city }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect
            v-model="state.labelIs"
            title="Label Key"
            :options="labelKeys"
          />
          <HstSelect
            v-model="state.valueIs"
            title="Value Key"
            :options="valueKeys"
          />
          <HstSelect
            v-model="state.color"
            title="Color"
            :options="colorOptions"
          />
          <HstCheckbox v-model="state.disabled" title="Disabled" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import RadioGroup from "components/radio-group.vue";
import { reactive } from "vue";
import { ref } from "vue";

const state = reactive({
  valueIs: "id",
  labelIs: "name",
  disabled: false,
  color: "primary",
});

const city = ref(null);

const labelKeys = ["label", "name"];
const valueKeys = ["id", "value"];
const colorOptions = ["primary", "secondary", "black"];

const cities = reactive([
  {
    name: "Ahmedabad",
    label: "City-Ahmedabad",
    id: 1,
    value: 11,
  },
  {
    name: "Surat",
    label: "City-Surat",
    id: 2,
    value: 21,
  },
  {
    name: "Vadodara",
    label: "City-Vadodara",
    id: 3,
    value: 31,
  },
  {
    name: "Gandhinagar",
    label: "City-Gandhinagar",
    id: 4,
    value: 41,
  },
  {
    name: "Rajkot",
    label: "City-Rajkot",
    id: 5,
    value: 51,
  },
]);
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name          | Type      | Default Value | Description                                                                                 |
| ------------- | --------- | ------------- | ------------------------------------------------------------------------------------------- |
| name          | `String`  | radio-group   | name of group.                                                                              |
| type          | `String`  | checkbox      | if enter type radiobox it will react like radio box group.                                  |
| options       | `Array`   | []            | Array of options.                                                                           |
| disabled      | `Boolean` | false         | radio-group will be disabled.                                                               |
| valueIs       | `String`  | value         | key name of value from object. ex. id, value, uid                                           |
| labelIs       | `String`  | label         | key name of label from object. ex. name, label, city_name                                   |
| color         | `String`  | primary       | radio-icon color ex. primary,secondary.                                                     |
| changeOnClick | `Boolean` | true          | if false, value will not change on click. (we need it in radio-card for other button click) |

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
