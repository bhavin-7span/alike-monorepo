<template>
  <div class="flex items-end">
    <h2 class="text-3xl font-bold font">${{ amount }}</h2>
    <p v-if="amountPer" class="text-grey-500 text-base">
      <span>/</span>{{ amountPer }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  amountPer: String,
});
</script>
