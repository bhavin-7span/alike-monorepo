<template>
  <Story auto-props-disabled>
    <Button
      label="Button Label"
      icon="AwIconCurrencyInr"
      :theme="state.theme"
      :tag="state.tag"
      :href="state.href"
      :to="state.to"
      :type="state.type"
      :size="state.size"
      :is-loading="state.loading"
      :icon-after="state.iconAfter"
      :disabled="state.disabled"
      :shape="state.shape"
    />
    <template #controls>
      <ControlGroup>
        <template #props>
          <HstSelect v-model="state.size" title="Size" :options="sizes" />
          <HstSelect v-model="state.type" title="Color" :options="types" />
          <HstSelect v-model="state.theme" title="Theme" :options="themes" />
          <HstSelect v-model="state.shape" title="shape" :options="shapes" />
          <HstCheckbox v-model="state.loading" title="Loading" />
          <HstCheckbox v-model="state.iconAfter" title="Icon After" />
          <HstCheckbox v-model="state.disabled" title="Disabled" />
          <HstText v-model="state.tag" title="tag" />
          <HstText v-model="state.href" title="href" />
          <HstText v-model="state.to" title="to" />
        </template>
      </ControlGroup>
    </template>
  </Story>
</template>
<script setup>
import Button from "components/button.vue";
import { reactive } from "vue";

const state = reactive({
  type: "primary",
  theme: "solid",
  size: "md",
  shape: "rounded",
  loading: false,
  iconAfter: false,
  disabled: false,
  tag: "button",
  href: "",
  to: "",
});

const sizes = ["md", "sm"];
const types = ["primary", "secondary", "grey", "black"];
const themes = ["solid", "outlined", "muted", "link"];
const shapes = ["rounded", "circle"];
</script>
<style scoped></style>
<docs lang="md">
## Button Props

- label
- varient like : default, info, danger, warning
</docs>
<docs lang="md">
## Props

| Name       | Type            | Default Value | Description                                                             |
| ---------- | --------------- | ------------- | ----------------------------------------------------------------------- |
| label      | `String`        |               | label text.                                                             |
| icon       | `String`        |               | Enter the icon name.                                                    |
| iconAfter  | `Boolean`       | false         | to move the icon to right or left of label                              |
| isLoading  | `Boolean`       | false         | Toggle Loading state of button                                          |
| loaderIcon | `String`        |               | Enter loader icon name (That you should have in your components list)   |
| tag        | `String`        | `button`      | tag name like button, a, nuxt-link, router-link                         |
| href       | `String`        |               | Use button as anchor tag (Will render as anchor tag)                    |
| to         | `String,Object` |               | Use button as router-link component (Will render as anchor router-link) |
| disabled   | `Boolean`       | false         | to disables the button                                                  |

## Slots

| Name    | Default Content | Data Available | Description                                                   |
| ------- | --------------- | -------------- | ------------------------------------------------------------- |
| icon    | Icon Component  | -              | Render your own icon or any other component at place of icon. |
| default | label           | -              | By default label is rendered here.                            |
</docs>
