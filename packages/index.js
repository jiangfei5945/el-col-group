import ElColGroup from "./el-col-group.vue";

const install = function (Vue) {
  if (install.installed) return;
  Vue.component(ElColGroup.name, ElColGroup);
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ElColGroup,
};
