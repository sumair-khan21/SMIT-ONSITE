import { client } from "./confg.js";
// console.log(client);

let submit = document.getElementById("submit");
let deleteButton = document.getElementById("delete");


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
  });
}



async function show() {
  const { data, error } = await client.from("todo").select();
  if (error) {
    console.error("Error fetching data:", error.message);
    return;
  }
  console.log("data", data);
  let output = document.getElementById("output");
  // output.innerHTML = "";
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<p>${item.todo_text}</p>
    <button id="delete" ${item.id}>Delete</button>`;
    output.appendChild(div);
    
  });



  


    document.addEventListener('click', async (id)=>{
  data.forEach(async (item) => {
  console.log("Deleting item with ID:", item.id);
  console.log("Deleting " ,id);
        })
  

    })
   
}

show();







































// import { client } from "./confg.js";

// // Data insert karna (todo likhna)
// let submit = document.getElementById("submit");

// if (submit) {
//   submit.addEventListener("click", async () => {
//     let todoData = document.getElementById("data").value;
//     console.log(todoData);

//     const { error } = await client.from("todo").insert({ todo_text: todoData });

//     if (error) {
//       console.error("Error inserting data:", error.message);
//       return;
//     }
//     alert("Data inserted successfully");
//     document.getElementById("data").value = ""; // Input clear karna
//   });
// }

// // Data show karna aur delete ka button kaam karwana
// async function show() {
//   const { data, error } = await client.from("todo").select();
//   if (error) {
//     console.error("Error fetching data:", error.message);
//     return;
//   }
//   console.log("Data:", data);

//   let output = document.getElementById("output");
//   output.innerHTML = ""; // Pura list pehle clear karte hain

//   // Har item ko loop kar ke dikhana aur usme delete ka button dena
//   data.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <p>${item.todo_text}</p>
//       <button class="delete-btn" data-id="${item.id}">Delete</button>
//     `;
//     output.appendChild(div);
//   });

//   // Delete button ke liye event listener
//   let deleteButtons = document.querySelectorAll(".delete-btn");
  
//   deleteButtons.forEach((button) => {
//     button.addEventListener('click', async (e) => {
//       let itemId = e.target.getAttribute("data-id"); // Button ke saath unique ID aayi thi
//       console.log("Deleting item with ID:", itemId);

//       // Database se item delete karna
//       const response = await client
//         .from('todo')
//         .delete()
//         .eq('id', itemId);

//       if (response.error) {
//         console.error("Error deleting data:", response.error.message);
//       } else {
//         alert("Item deleted successfully");
//         show(); // Todo list ko dobara reload karna
//       }
//     });
//   });
// }

// show(); // Initial data load karna
