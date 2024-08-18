import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import ByWorld from "./components/ByWorld.vue";
import HelloWorld from "./components/HelloWorld.vue";

const app = createApp(App);
app.component("ByeWorld", ByWorld); // jis name se compoenet pahchan jayega wo name "ByeWorld"
app.component("HellowWorld", HelloWorld);
app.mount("#app");
