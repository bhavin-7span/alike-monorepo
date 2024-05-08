<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <Radio
        :disabled="state.disabled"
        :type="state.type"
        :label="state.label"
        v-model="isSelected"
      />
      <p class="mt-10">Selected: {{ isSelected }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstText v-model="state.label" title="label" />
          <HstSelect
            v-model="state.type"
            title="type"
            :options="radioTypeOptions"
          />
          <HstCheckbox v-model="state.disabled" title="disabled" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Radio from "components/radio.vue";
import { reactive } from "vue";
import { ref } from "vue";

const state = reactive({
  disabled: false,
  type: "radio",
  label: "Are you sure!",
});

const isSelected = ref(true);

const radioTypeOptions = ["radio", "checkboxVue"];
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
