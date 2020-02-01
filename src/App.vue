<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <CanvasGrid/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CanvasGrid from "./components/CanvasGrid";

export default {
  name: "App",
  components: {
    HelloWorld,
    CanvasGrid
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
