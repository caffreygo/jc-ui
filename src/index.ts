import { createApp } from "vue/dist/vue.esm-bundler.js";
import JcUI from "./entry";

createApp({
  template: `
        <div>
            <MyButton>普通按钮</MyButton>
        </div>
    `,
})
  .use(JcUI)
  .mount("#app");
