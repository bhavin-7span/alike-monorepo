<template>
  <Story>
    <div class="flex gap-10 flex-col">
      <div class="flex flex-col gap-3">
        <Button label="Button Label" theme="solid" type="primary" size="sm" />
        <Button
          label="Button Label"
          theme="outlined"
          type="primary"
          size="sm"
        />
        <Button label="Button Label" theme="muted" type="primary" size="sm" />
      </div>

      <div class="flex flex-col gap-3">
        <Button label="Button Label" theme="solid" type="secondary" size="md" />
        <Button
          label="Button Label"
          theme="outlined"
          type="secondary"
          size="md"
        />
        <Button label="Button Label" theme="muted" type="secondary" size="md" />
      </div>

      <div class="flex flex-col gap-3">
        <Button label="Button Label" theme="solid" type="grey" size="sm" />
        <Button label="Button Label" theme="outlined" type="grey" size="sm" />
        <Button label="Button Label" theme="muted" type="grey" size="sm" />
      </div>

      <div class="flex flex-col gap-3">
        <Button label="Button Label" theme="solid" type="black" size="sm" />
        <Button label="Button Label" theme="outlined" type="black" size="sm" />
        <Button label="Button Label" theme="muted" type="black" size="sm" />
      </div>
    </div>
  </Story>
</template>
<script setup>
import Button from "components/button.vue";
</script>
<style scoped></style>
<docs lang="md">
## Button Props

- label
- varient like : default, info, danger, warning
</docs>
