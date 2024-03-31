"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoRowItem_1 = require("./TodoRowItem");
const TodoTable = (props) => {
    return ((0, jsx_runtime_1.jsxs)("table", Object.assign({ className: "table table-hover" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", Object.assign({ scope: "col" }, { children: "#" })), (0, jsx_runtime_1.jsx)("th", Object.assign({ scope: "col" }, { children: "Description" })), (0, jsx_runtime_1.jsx)("th", Object.assign({ scope: "col" }, { children: "Assigned" }))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: props.todos.map(todo => ((0, jsx_runtime_1.jsx)(TodoRowItem_1.TodoRowItem, { rowNumber: todo.rowNumber, rowDescription: todo.rowDescription, rowAssigned: todo.rowAssigned, deleteTodo: props.deleteTodo }, todo.rowNumber))) })] })));
};
exports.TodoTable = TodoTable;
