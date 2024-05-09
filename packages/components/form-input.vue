<template>
  <div>
    <div>
      <label v-if="label" :for="id">{{ label }}</label>
      <input :type="type" :placeholder="placeholder" :id="id" :name="name" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  id: [String, Number],
  name: [String, Number],
});
</script>
