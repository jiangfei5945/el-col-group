<script>
const createColumn = (h, columnConfig) => {
  const { render, children } = columnConfig;

  let option = {
    props: { ...columnConfig },
    scopedSlots: {},
    key: columnConfig.label,
  };
  if (render) {
    option.scopedSlots.default = (props) => {
      return render(h, props.row, props.column);
    };
  } else {
    option.scopedSlots.default = ({ row, column, $index }) => {
      const { formatter, prop } = columnConfig;
      const val = formatter
        ? formatter(row, column, row[prop], $index)
        : row[prop];
      return h("span", {}, [val]);
    };
  }
  let childNodes = [];
  if (children && children.length) {
    childNodes = children.map((column) => {
      return createColumn(h, column);
    });
  }
  return h("el-table-column", option, childNodes);
};

export default {
  name: "el-col-group",
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  render(createElement, context) {
    const {
      props: { columns },
    } = context;

    const displayColumnOptions = columns.filter((v) => v.visible !== false);

    return displayColumnOptions.map((column) => {
      return createColumn(createElement, column);
    });
  },
};
</script>
