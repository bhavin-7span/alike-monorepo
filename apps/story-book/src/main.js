import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { register } from "./global";

const app = createApp(App);
app.mount("#app");

//register global components
register(app);
