const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());



const todos = [
    {
        id: new Date().getTime(),
        title: "Todo 1",
        description: "Description 1",
        status: "pending"
    },
    {
        id: new Date().getTime(),
        title: "Todo 2",
        description: "Description 2",
        status: "pending"
    },
    {
        id: new Date().getTime(),
        title: "Todo 3",
        description: "Description 3",
        status: "pending"
    }
]



app.get('/getTodos', (req, res) => {
    res.json({
        message: "Todos fetched successfully",
        todos
    });
})

app.post("/addTodo", (req, res) => {
    const { title, description } = req.body;
    const newTodo = {
        id: new Date().getTime(),
        title,
        description,
        status: "pending"
    };
    todos.push(newTodo);
    res.json({
        message: "Todo added successfully",
        newTodo
    });
})

app.put("/updateTodo/:id", (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    todo.title = title;
    todo.description = description;
    res.json({
        message: "Todo updated successfully",
        todo
    });
})

app.delete("/deleteTodo/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    todos.splice(todos.indexOf(todo), 1);
    res.json({
        message: "Todo deleted successfully",
        todo
    });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
