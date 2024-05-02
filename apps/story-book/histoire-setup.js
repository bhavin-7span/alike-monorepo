import "./src/style.css";
import { defineSetupVue3 } from "@histoire/plugin-vue";
import { register } from "@/global";
export const setupVue3 = defineSetupVue3(({ app }) => {
  app.config.productionTip = false;
  register(app);
  return {};
});
