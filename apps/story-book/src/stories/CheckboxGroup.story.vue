<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <CheckboxGroup
        class="grid gap-3 mt-5 md:mt-6 grid-cols-1 md:grid-cols-4"
        :label-is="state.labelIs"
        :value-is="state.valueIs"
        :type="state.type"
        :disabled="state.disabled"
        :color="state.color"
        v-model="selectedCityIds"
        name="cities"
        @change="setSelectedCities($event)"
        @input="changedValue = $event"
        :options="cities"
      ></CheckboxGroup>
      <div class="flex flex-col gap-3 mt-10">
        <p>Selected city ids: {{ selectedCityIds }}</p>
        <p>Selected cities objects: {{ selectedCities }}</p>
        <p>Changed value: {{ changedValue }}</p>
      </div>
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
            v-model="state.valueIs"
            title="Value Key"
            :options="valueKeys"
          />
          <HstSelect v-model="state.type" title="Type" :options="types" />
          <HstSelect
            v-model="state.color"
            title="color"
            :options="colorOptions"
          />
          <HstCheckbox v-model="state.disabled" title="Disabled" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import CheckboxGroup from "components/checkbox-group.vue";
import { reactive } from "vue";
import { ref } from "vue";

const state = reactive({
  valueIs: "id",
  labelIs: "name",
  disabled: false,
  type: "checkbox",
  color: "black",
});

const selectedCityIds = ref([]);
const selectedCities = ref([]);
const changedValue = ref(null);

const labelKeys = ["label", "name"];
const valueKeys = ["id", "value"];
const types = ["checkbox", "radio"];
const colorOptions = ["primary", "black"];

function setSelectedCities(event) {
  selectedCities.value = event;
}

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

| Name     | Type      | Default Value  | Description                                               |
| -------- | --------- | -------------- | --------------------------------------------------------- |
| name     | `String`  | checkbox-group | name of group.                                            |
| options  | `Array`   | []             | Array of options.                                         |
| disabled | `Boolean` | false          | radio-group will be disabled.                             |
| valueIs  | `String`  | value          | key name of value from object. ex. id, value, uid         |
| labelIs  | `String`  | label          | key name of label from object. ex. name, label, city_name |

## Slots

| Name    | Default Content | Data Available            | Description                                                                                    |
| ------- | --------------- | ------------------------- | ---------------------------------------------------------------------------------------------- |
| default | checkboxes      | data,index,isActive,value | you can get selected data of option, value of option, option is active or not, index of option |

## Events

| Name              | Data   | Description                                  |
| ----------------- | ------ | -------------------------------------------- |
| update:modelValue | value  | emit value of selected option. (Use v-model) |
| change            | object | emit full object (option).                   |
</docs>
