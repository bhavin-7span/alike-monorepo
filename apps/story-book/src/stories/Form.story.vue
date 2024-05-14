<template>
  <Story auto-props-disabled>
    <div class="h-96 p-10 w-[500px]">
      <Form
        @submit="handleSubmit($event)"
        autocomplete="off"
        v-slot="{ errors }"
      >
        <Input
          name="fname"
          rules="required"
          :error="errors.fname"
          v-model="fname"
        />
        <RadioGroup
          v-model="city"
          :options="cities"
          rules="required"
          name="city"
          :error="errors.city"
          class="grid grid-cols-2 gap-3"
        />
        <Button
          type="submit"
          class="mt-2"
          size="sm"
          theme="outlined"
          icon="AwIconArrowRight"
          >submit</Button
        >
      </Form>
      <p class="mt-10">Input: {{ fname }}</p>
      <p class="mt-10">City: {{ city }}</p>
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
import RadioGroup from "components/radio-group.vue";
import { Form } from "vee-validate";
import { Field } from "vee-validate";
import Button from "components/button.vue";
import { reactive } from "vue";
import { ref } from "vue";

const fname = ref(null);
const city = ref(null);

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
