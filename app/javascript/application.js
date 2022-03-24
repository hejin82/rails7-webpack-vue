// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import Counter from "./components/Counter.vue"
import {createApp} from "vue"


// document.addEventListener("turbo:load", () => {
//   console.log("turbo:load")
//   createApp(Counter).mount("#counter")
// });

document.addEventListener("DOMContentLoaded", () => {
  createApp(Counter).mount("#counter")
});