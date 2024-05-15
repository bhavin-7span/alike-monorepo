<template>
  <div>
    <label
      v-for="(option, index) in options"
      type="button"
      :key="index"
      :disabled="disabled"
      class="text-start outline-none border-none"
    >
      <Field
        v-slot="{ field }"
        :name="name"
        v-model="selectedValues"
        :value="option.value"
        type="checkbox"
      >
        <input
          v-bind="field"
          @change="updateValue(selectedValues)"
          type="checkbox"
          class="hidden"
        />
        <slot
          name="default"
          :data="option"
          :index="index"
          :value="selectedValues"
          :isActive="selectedValues.includes(option.value)"
        >
          <div class="flex items-center gap-2">
            <div class="h-6 w-6">
              <Icon
                v-if="field.checked"
                :name="
                  color == 'primary' ? 'AwIconCheckboxOrange' : 'AwIconCheckbox'
                "
                :class="disabled ? 'opacity-50' : ''"
              />
              <Icon v-else name="AwIconCheckboxBlank" />
            </div>
            <p class="text-base text-start">{{ option.label }}</p>
          </div>
        </slot>
      </Field>
    </label>
  </div>
</template>
<script setup>
import Icon from "./icon.vue";
import { ref, onMounted } from "vue";
import { Field } from "vee-validate";

const emit = defineEmits(["change", "input", "update:modelValue"]);
const props = defineProps({
  type: {
    type: String,
    default: "checkbox",
  },
  options: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: "checkbox-group",
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "black",
  },
});
const selectedValues = ref([]);

function updateValue(values) {
  //will return only value-key from object
  emit("update:modelValue", values);
}
</script>
