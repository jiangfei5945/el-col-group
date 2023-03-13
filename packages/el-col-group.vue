<script>
const dealNull = (val) => {
  return val || (val === 0 ? 0 : " - ");
};

const createColTooltip = (h, info) =>
  h("el-tooltip", { props: { effect: "light" } }, [
    h("i", { class: "col-tooltip" }),
    h("span", { slot: "content", domProps: { innerHTML: info } }),
  ]);

const createColumn = (h, columnConfig) => {
  const { columnProps, render, children, info } = columnConfig;

  let option = {
    props: { ...columnProps },
    scopedSlots: {},
    key: columnProps.label,
  };
  if (render) {
    option.scopedSlots.default = (props) => {
      return render(h, props.row, props.column);
    };
  } else {
    option.scopedSlots.default = ({ row, column, $index }) => {
      const { formatter, prop } = columnProps;
      const val = formatter
        ? formatter(row, column, row[prop], $index)
        : row[prop];
      return h("span", {}, [dealNull(val)]);
    };
  }
  if (info) {
    option.props.renderHeader = (h, { column, $index }) => {
      return [
        columnProps.renderHeader
          ? columnProps.renderHeader(h, { column, $index })
          : column.label,
        createColTooltip(h, info),
      ];
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

    return columns.map((column) => {
      return createColumn(createElement, column);
    });
  },
};
</script>
