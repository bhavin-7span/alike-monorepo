<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <Choice
        :disabled="state.disabled"
        :label="state.label"
        v-model="isSelected"
      />
      <p class="mt-10">Selected: {{ isSelected }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstText v-model="state.label" title="label" />

          <HstCheckbox v-model="state.disabled" title="disabled" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Choice from "components/choice.vue";
import { reactive } from "vue";
import { ref } from "vue";

const state = reactive({
  disabled: false,
  type: "radio",
  label: "Are you sure!",
});

const isSelected = ref(true);
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name     | Type      | Default Value | Description                   |
| -------- | --------- | ------------- | ----------------------------- |
| label    | `String`  | radio-group   | label to show.                |
| disabled | `Boolean` | false         | radio-group will be disabled. |

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
