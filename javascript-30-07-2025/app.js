// import { client } from "./confg.js";
// console.log(client);

const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";

const client = supabase.createClient(supabaseUrl, supabaseKey);

let submit = document.getElementById("submit");
let todo_list = document.getElementById("todo_list");
let showInput =  document.getElementById("data")

if (submit) {
  submit.addEventListener("click", async () => {
    let todoData = document.getElementById("data").value;
    console.log(todoData);

    const { error } = await client.from("todo").insert({ todo_text: todoData });

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }
    alert("Data inserted successfully");
    document.getElementById("data").value = "";
    show();
  });
}

async function show() {
  const { data, error } = await client.from("todo").select("*");
  if (error) {
    console.error("Error fetching data:", error.message);
    return;
  }
  todo_list.innerHTML = "";
  data.forEach((element) => {
    todo_list.innerHTML += `<li>${element.todo_text} 
    <button class="delete-btn" onclick="delete1(${element.id})">Delete</button>
    <button class="delete-btn" onclick="edit(${element.id})">Edit</button>
    </li>`;
  });
}

async function delete1(todo_id) {
  const response = await client.from("todo").delete().eq("id", todo_id);

  todo_list.innerHTML = "";
  if (response.error) {
    console.error("Error deleting data:", response.error.message);
    return;
  } else {
    alert("Data deleted successfully");

    show();
  }
}
show();

async function edit(todo_id) {
  // console.log(todo_list.value);
  const { data, error } = await client
    .from("todo")
    .select("todo_text")
    .eq("id", todo_id)
    .single();

  // todo_list.value = todo_id;
  if (error) {
    console.error("Error updating data:", error.message);
    return;
  }
  // alert("Data updated successfully");
  showInput.value = data.todo_text
//   document.getElementById("data").value = data.todo_text;

  //     const { error:updateError } = await client
  //   .from('todo')
  //   .update({ todo_text: todo_list })
  //   .eq('id', todo_id)

submit.innerText = "update";
}

async function update(todo_id) {
  const { data: updateData, error: updateError } = await client
  .from("todo")
  .update({ todo_text: showInput.value })
  .eq("id", todo_id)
  // .select();
//   todo_list.innerHTML = "";
  if (updateError) {
    console.log("Error updating data:", updateError.message);
  } else {
    console.log("Data updated successfully:", updateData);
  }
//   show();
}