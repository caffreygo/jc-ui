import { createApp } from "vue/dist/vue.esm-bundler.js";
import JcUI from "./entry";

createApp({
  template: `
    <div>
        <MyButton color="blue" round plain icon="search" >Hello</MyButton>
        <MyButton color="green" round plain icon="edit" ></MyButton>
        <MyButton color="gray" round plain icon="check" ></MyButton>
        <MyButton color="yellow" round plain icon="message" ></MyButton>
        <MyButton color="red" round plain icon="delete" ></MyButton>
    </div>
    `,
})
  .use(JcUI)
  .mount("#app");
