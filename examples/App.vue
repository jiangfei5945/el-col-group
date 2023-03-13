<template>
  <div id="app">
    <el-table :data="tableData">
      <el-col-group :columns="columnOption"></el-col-group>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableData: [],
      columnOption: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
