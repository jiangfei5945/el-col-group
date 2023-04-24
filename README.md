# el-col-group
## Powerful and Flexable column for Element table
The "el-col-group" is a Vue.js functional component that allows you to create a group of columns for an "el-table" component with customizable rendering and formatting options.

## Installation

```bash
# Install with npm
npm install el-col-group

# Install with yarn
yarn add el-col-group
```

## Usage

Once installed, you can use the "el-col-group" component in your Vue.js application by importing it and registering it as a component. Here's an example:

```vue
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
```

In the above example, the "el-col-group" component is used inside an "el-table" component, and the "columns" prop is bound to an array of column configurations stored in the "columnConfigs" data property.

## Props

The "el-col-group" component accepts the following props:

- **columns** (Array, required): An array of column configurations. Each column configuration should be an object with properties like "label", "prop", "formatter", "render", "children", and "visible". See the "Column Configuration" section for more details.

## Column Configuration

Each column configuration object in the "columns" prop should have the following properties:

- **label** (String, required): The label or title of the column.
- **prop** (String, required): The property name of the data item that corresponds to the column.
- **formatter** (Function, optional): A custom function to format the column value. It should take three arguments: the row data, the column config, and the column value, and return the formatted value. If not provided, the default value will be displayed.
- **render** (Function, optional): A custom function to render the content of the column. It should take three arguments: the Vue "createElement" function (aliased as "h"), the row data, and the column config, and return the Vue VNode for the custom content. If this function is provided, it will take precedence over the "formatter" function.
- **children** (Array, optional): An array of child column configurations to create nested columns.
- **visible** (Boolean, optional, default: true): Whether the column is visible or not.

## Contributing

If you would like to contribute to the "el-col-group" component, please follow the standard GitHub fork and pull request workflow. You can also open issues for bug reports or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

The "el-col-group" component is inspired by and based on the [Element UI](https://element.eleme.io/) library, which is a popular Vue.js component library for building UIs.