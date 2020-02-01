import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/* Vue.component("test-template", {
  template: "#testTemplate",
  props: ["testValue"]
}); */

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
