<template>
  <Story auto-props-disabled>
    <div class="h-96">
      <FormInput />
    </div>
    <template #controls>
      <ControlGroup>
        <!-- <template #props>
          <HstSelect
            v-model="state.color"
            title="color"
            :options="colorOptions"
          />
          <HstCheckbox v-model="state.disabled" title="disabled" />
        </template> -->
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import FormInput from "components/form-input.vue";
import { reactive } from "vue";
import { ref } from "vue";

const fname = ref(null);
</script>
<style scoped></style>
<docs lang="md">
## Props

| Name | Type     | Default Value | Description    |
| ---- | -------- | ------------- | -------------- |
| name | `String` | radio-group   | name of group. |

## Events

| Name              | Data  | Description                                  |
| ----------------- | ----- | -------------------------------------------- |
| update:modelValue | array | emit value of selected option. (Use v-model) |
</docs>
