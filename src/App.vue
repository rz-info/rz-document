<!--
 * @Author: Zhang Qin
 * @Date: 2020-08-19 12:07:45
 * @LastEditTime: 2020-08-20 15:23:58
 * @LastEditors: 
 * @Version: 
 * @Description: 
 * @param: 
 * @FilePath: \v2.0.1d:\项目\rz-document.github.io\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>
<style>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%;
  }

  code,
  pre {
    font-family: "Roboto Mono", Monaco, courier, monospace;
    font-size: 0.85em;
    background-color: #f8f8f8;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
  }

  pre {
    padding: 3px 5px;
  }

  code:not([class]) {
    display: inline-block;
    color: #d63200;
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 2px;
    white-space: nowrap;
  }
</style>