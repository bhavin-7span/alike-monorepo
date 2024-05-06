<template>
  <client-only>
    <button
      v-for="(option, index) in options"
      :key="index"
      :class="_class"
      @click="updateValue(option)"
    >
      <input type="radio" class="hidden" :name="name" :value="option" />
      <slot
        name="default"
        :data="option"
        :index="index"
        :isActive="option[valueIs] == modelValue[valueIs]"
        :value="option"
      >
      </slot>
    </button>
  </client-only>
</template>
<script setup>
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "radio-group",
  },
  valueIs: {
    type: String,
    default: "value",
  },
  options: {
    type: Array,
    default: () => [],
  },
  changeOnClick: {
    type: Boolean,
    default: true,
  },
  _class: String,
  modelValue: [String, Number, Boolean, Object],
});

// const value = computed({
//   get() {
//     return this.modelValue;
//   },
//   set(value) {
//     this.$emit("update:modelValue", value);
//   },
// });

function updateValue(option) {
  if (props.changeOnClick) {
    emit("update:modelValue", option);
    emit("change", option);
  }
}
</script>
