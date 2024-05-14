<template>
  <slot name="label">
    <label v-if="label" :for="id" class="text-base font-semibold mb-2">{{
      label
    }}</label>
  </slot>
  <Field
    v-slot="{ field }"
    :rules="rules"
    :name="name"
    :value="modelValue"
    type="text"
  >
    <div :class="inputCss">
      <slot name="before">
        <p v-if="before" class="pl-3">{{ before }}</p>
      </slot>
      <div
        class="h-full input-wrapper w-full flex items-center"
        :class="{
          [direction]: true,
          'gap-2': icon,
        }"
      >
        <slot name="icon">
          <Icon v-if="icon" :name="icon" class="text-lg" />
        </slot>
        <input
          :type="type"
          :placeholder="placeholder"
          :id="id"
          :name="name"
          v-bind="field"
          :value="modelValue"
          @input="handleInput($event)"
          class="focus:outline-none text-current h-full w-full bg-transparent"
        />
      </div>
      <slot name="after">
        <p v-if="after" class="pr-3">{{ after }}</p>
      </slot>
    </div>
    <p v-if="error" class="text-sm mt-1 text-danger-500">{{ error }}</p>
  </Field>
</template>
<script setup>
import { computed } from "vue";
import { formInput } from "./cva-css/form-input.js";
import { twMerge } from "tailwind-merge";
import Icon from "./icon.vue";
import { Field } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  id: [String, Number],
  name: String,
  icon: String,
  direction: {
    type: String,
    default: "row",
  },
  size: String,
  color: String,
  theme: String,
  shape: String,
  before: [String, Number],
  after: [String, Number],
  modelValue: [String, Number],
  error: String,
  rules: String,
});

const inputCss = computed(() => {
  return twMerge(
    formInput({
      color: props.color,
      size: props.size,
      theme: props.theme,
      shape: props.shape,
    })
  );
});

function handleInput($event) {
  emit("update:modelValue", $event.target.value);
}
</script>
<style lang="scss">
.input-px-4 {
  .input-wrapper {
    @apply px-4;
  }
}
.input-px-6 {
  .input-wrapper {
    @apply px-6;
  }
}
.placeholder-grey-400 {
  input {
    @apply placeholder:text-grey-400;
  }
}
.placeholder-grey-500 {
  input {
    @apply placeholder:text-grey-500;
  }
}
</style>
