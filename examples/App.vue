<template>
  <div id="app">
    <div>
      <el-checkbox v-model="checked">隐藏系统</el-checkbox>
    </div>
    <el-table :data="tableData">
      <el-col-group :columns="tableColumnOption"></el-col-group>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      checked: false,
      tableData: [
        {
          appId: "2e5ab8ce1b",
          appName: "一点通",
          appType: "Android",
          dayAve: "0.00062",
          quartAve: "0.00000",
        },
        {
          appId: "fcd8e7a04c",
          appName: "一点通",
          appType: "iOS",
          dayAve: "0.00028",
          quartAve: "0.00000",
        },
        {
          appId: "c1b5ef62eb",
          appName: "二点通",
          appType: "Android",
          dayAve: "0.00007",
          quartAve: "0.2",
        },
      ],
    };
  },
  computed: {
    tableColumnOption() {
      return [
        {
          label: "App",
          prop: "appName",
        },
        {
          visible: !this.checked,
          label: "系统",
          prop: "appType",
          renderHeader: (h, { column }) => {
            return h("div", { style: { color: "red" } }, [column.label]);
          },
        },
        {
          label: `季度平均崩溃率`,
          prop: "quartAve",
          render: (h, row) => {
            return h(
              "span",
              {
                domProps: {
                  style: `color: ${row.quartAve > 0.1 ? "red" : "green"}`,
                },
              },
              [row.quartAve]
            );
          },
        },
      ];
    },
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
