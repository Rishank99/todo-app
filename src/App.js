"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const react_1 = require("react");
const TodoTable_1 = require("./components/TodoTable");
const NewTodoForm_1 = require("./components/NewTodoForm");
const App = () => {
    const [showAddTodoForm, setShowAddTodoForm] = (0, react_1.useState)(false);
    const [todos, setTodos] = (0, react_1.useState)([
        { rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One" },
        { rowNumber: 2, rowDescription: "Water Plants", rowAssigned: "User Two" },
        { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User One" },
        { rowNumber: 4, rowDescription: "Charge Phone Battery", rowAssigned: "User One" }
    ]);
    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        }
        else {
            rowNumber = 1;
        }
        const newTodo = {
            rowNumber: todos.length + 1,
            rowDescription: description,
            rowAssigned: assigned
        };
        setTodos(todos => [...todos, newTodo]);
    };
    const deleteTodo = (deleteTodoRowNumber) => {
        let filterd = todos.filter(function (value) {
            return value.rowNumber !== deleteTodoRowNumber;
        });
        setTodos(filterd);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container mt-5" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-header" }, { children: "Your Todo's" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)(TodoTable_1.TodoTable, { todos: todos, deleteTodo: deleteTodo }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-primary", onClick: () => setShowAddTodoForm(!showAddTodoForm) }, { children: showAddTodoForm ? 'Close New Todo' : 'New Todo' })), showAddTodoForm &&
                            (0, jsx_runtime_1.jsx)(NewTodoForm_1.NewTodoForm, { addTodo: addTodo })] }))] })) })));
};
exports.App = App;
