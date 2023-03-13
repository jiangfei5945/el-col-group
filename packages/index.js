import ElColGroup from "./el-col-group.vue";

const install = function (Vue) {
  if (install.installed) return;
  Vue.component(ElColGroup.name, ElColGroup);
};

export default {
  install,
  ElColGroup,
};
