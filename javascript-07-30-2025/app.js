// import { client } from "./confg.js";
// console.log(client);

const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";

const client = supabase.createClient(supabaseUrl, supabaseKey);

let submitBtn = document.getElementById("submit");
let todoList = document.getElementById("todo_list");
let inputField =  document.getElementById("data")
let editingId = null;



submitBtn.addEventListener("click", async () => {
  const todoText = inputField.value.trim();
  if (!todoText) return alert("Please enter some text");

  if (editingId) {
    //  UPDATE
    const { error } = await client
      .from("todo")
      .update({ todo_text: todoText })
      .eq("id", editingId);

    if (error) {
      console.error("Update Error:", error.message);
      return;
    }

    alert("Todo updated successfully!");
    editingId = null;
    submitBtn.innerText = "Submit";

  } else {
    //  INSERT
    const { error } = await client.from("todo").insert({ todo_text: todoText });

    if (error) {
      console.error("Insert Error:", error.message);
      return;
    }

    alert("Todo added successfully!");
  }

  inputField.value = "";
  show();
});





// async function show() {
//   const { data, error } = await client.from("todo").select("*");
//   if (error) {
//     console.error("Error fetching data:", error.message);
//     return;
//   }
//   todo_list.innerHTML = "";
//   data.forEach((element) => {
//     todo_list.innerHTML += `<li>${element.todo_text} 
//     <button class="delete-btn" onclick="delete1(${element.id})">Delete</button>
//     <button class="delete-btn" onclick="edit(${element.id})">Edit</button>
//     </li>`;
//   });
// }


// Show all todos
async function show() {
  const { data, error } = await client.from("todo").select("*");
  if (error) {
    console.error("Fetch Error:", error.message);
    return;
  }

  todoList.innerHTML = "";
  data.forEach((todo) => {
    todoList.innerHTML += `
      <li>
        ${todo.todo_text} 
        <button onclick="deleteTodo(${todo.id})">Delete</button>
        <button onclick="editTodo(${todo.id})">Edit</button>
      </li>`;
  });
}


// Delete todo
async function deleteTodo(id) {
  const { error } = await client.from("todo").delete().eq("id", id);
  if (error) {
    console.error("Delete Error:", error.message);
    return;
  }
  alert("Todo deleted");
  show();
}



// Edit todo
async function editTodo(id) {
  const { data, error } = await client
    .from("todo")
    .select("todo_text")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Edit Error:", error.message);
    return;
  }

  inputField.value = data.todo_text;
  editingId = id;
  submitBtn.innerText = "Update";
}

show(); // Initial load
