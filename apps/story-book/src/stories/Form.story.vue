<template>
  <Story auto-props-disabled>
    <div class="h-96 p-10 w-[500px]">
      <Form
        @submit="handleSubmit($event)"
        :validation-schema="validationSchema"
        autocomplete="off"
        v-slot="{ errors }"
        class="flex flex-col gap-5"
      >
        {{ errors }}
        <Field
          v-slot="{ field }"
          :value="fname"
          rules="required"
          name="fname"
          type="text"
        >
          <Input name="fname" :field="field" v-model="fname" />
        </Field>
        <RadioGroup
          v-model="city"
          :options="cities"
          name="city"
          class="grid grid-cols-2 gap-3"
        />
        <CheckboxGroup
          v-model="selectedCities"
          :options="cities"
          name="selectCity"
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
      <p>City: {{ city }}</p>
      <p>selectedCities: {{ selectedCities }}</p>
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
import RadioGroup from "components/radio-group.vue";
import CheckboxGroup from "components/checkbox-group.vue";
import Button from "components/button.vue";
import { reactive } from "vue";
import { ref } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const fname = ref(null);
const city = ref(null);
const selectedCities = ref(null);

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
    label: "City-Surat",
    value: 21,
  },
  {
    label: "City-Vadodara",
    value: 31,
  },
  {
    label: "City-Gandhinagar",
    value: 41,
  },
  {
    label: "City-Rajkot",
    value: 51,
  },
]);

const validationSchema = toTypedSchema(
  zod.object({
    fname: zod.string({ message: "Please enter valid name" }),
    city: zod.number({ message: "Please select any one city" }),
    selectCity: zod
      .array()
      .min(2, { message: "please select at least 2 cities." }),
  })
);

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
