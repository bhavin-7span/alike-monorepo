<template>
  <Story auto-props-disabled>
    <div class="h-96 p-10 w-[500px]">
      <Form
        @submit="handleSubmit($event)"
        autocomplete="off"
        v-slot="{ errors }"
      >
        <Field
          v-slot="{ field }"
          rules="required"
          name="fname"
          :value="fname"
          type="text"
          class="w-full field"
        >
          <Input name="fname" type="text" v-bind="field" v-model="fname" />
        </Field>
        {{ errors }}
        <Button type="submit" size="sm" theme="outlined" icon="AwIconArrowRight"
          >submit</Button
        >
      </Form>
      <p class="mt-10">Input: {{ fname }}</p>
    </div>
    <template #controls>
      <ControlGroup>
        <template #props> </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Input from "components/input.vue";
import { Form } from "vee-validate";
import { Field } from "vee-validate";
import Button from "components/button.vue";
import { reactive } from "vue";
import { ref } from "vue";

const fname = ref(null);

const state = reactive({
  type: "text",
  label: "Enter First name",
  placeholder: "First Name",
  id: "fname",
  name: "fname",
  icon: "AwIconCurrencyInr",
  direction: "row",
  size: "md",
  color: "grey",
  theme: "muted",
  shape: "rounded",
  disabled: false,
  before: null,
  after: null,
});

const sizes = ["md", "sm"];
const colors = ["grey"];
const themes = ["outlined-light", "outlined", "muted"];
const shapes = ["rounded", "square"];
const directions = ["row", "flex-row-reverse"];

function handleSubmit(value) {
  console.log("form submitted", value);
}
</script>
<style scoped></style>
<docs lang="md">
## slot

| Name Description | description                              |
| ---------------- | ---------------------------------------- |
| icon             | render anything at place of icon         |
| before           | add anything before (left side) of input |
| after            | add anything after (right side) of input |
</docs>
