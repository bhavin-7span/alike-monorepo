<template>
  <div>
    <button
      @click="changeValue(option.value, option)"
      :disabled="disabled"
      v-for="(option, index) in options"
      :key="index"
      class="text-start outline-none border-none"
    >
      <div class="hidden">
        <input
          type="checkbox"
          v-model="selectedValues"
          :id="`label${index}`"
          :name="name"
          :value="option.value"
        />
        <label :for="`label${index}`">{{ option.name }}</label>
      </div>
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
              v-if="selectedValues.includes(option.value)"
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
    </button>
  </div>
</template>
<script setup>
import Icon from "./icon.vue";
import { ref, onMounted } from "vue";
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

// Setting up value if already or default selection
onMounted(() => {
  if (props.modelValue?.length) {
    selectedValues.value = props.modelValue;
  }
});

function changeValue(value, option) {
  if (props.type == "checkbox") {
    if (selectedValues.value.includes(value)) {
      selectedValues.value.splice(selectedValues.value.indexOf(value), 1);
    } else {
      selectedValues.value.push(value);
    }
    emit("input", option);
    updateValue();
  } else {
    if (selectedValues.value != value) {
      selectedValues.value = [value];
      emit("input", option);
      updateValue();
    }
  }
}

function getSelectedValues() {
  const values = [];
  selectedValues.value.map((selected_val) => {
    props.options.map((option) => {
      if (option.value === selected_val) {
        values.push(option);
      }
    });
  });
  return values;
}

function updateValue() {
  //will return only value-key from object
  emit("update:modelValue", selectedValues.value);

  //will emit full object
  emit("change", getSelectedValues());
}
</script>
