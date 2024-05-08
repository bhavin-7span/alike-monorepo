<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <RadioGroup
        v-model="city"
        :options="cities"
        :disabled="state.disabled"
        :color="state.color"
        class="grid grid-cols-2 gap-3"
      />
      <p class="mt-10">Selected: {{ city }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect
            v-model="state.color"
            title="color"
            :options="colorOptions"
          />
          <HstCheckbox v-model="state.disabled" title="disabled" />
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
  disabled: false,
  color: "primary",
});

const city = ref(null);

const colorOptions = ["primary", "black"];

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
| color         | `String`  | primary       | radio-icon color ex. primary,black.                                                         |
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
