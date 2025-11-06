const supabaseUrl = "https://dwyuevxhkggpbmsveaxo.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eXVldnhoa2dncGJtc3ZlYXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNDk5MDEsImV4cCI6MjA2ODgyNTkwMX0.rly4ZRgwox-LZgIGA0k8T9Y7nYJUf5mgPL-9GB8b0kU`;
const client = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("studentForm");
const loader = document.getElementById("loader");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Stop default form submission

    loader.style.display = "block"; // Show loader

    // Get values
    const user = {
      name: document.getElementById("name").value,
      fatherName: document.getElementById("fatherName").value,
      mobile: document.getElementById("mobile").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      course: document.getElementById("course").value,
      address: document.getElementById("address").value,
      lastQualification: document.getElementById("qualification").value,
      rollNumber: document.getElementById("rollNumber").value,
    };

    const { error, data } = await client
      .from("StudentsForm")
      .insert(user)
      .select();

    if (error) {
      console.log("error" + error.message);
    } else {
      console.log("data", data);
    }
  });
}

let table = document.getElementById("show");


  async function render() {
    const { data, error } = await client.from("StudentsForm").select("*");

    if (error) {
      console.log("error" + error.message);
    } else {
      data.forEach((element) => {
        table.innerHTML += `<tr>
            <td>${element.rollNumber}</td>
            <td>${element.name}</td>
            <td>${element.fatherName}</td>
            <td>${element.mobile}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.course}</td>
            <td>${element.address}</td>
            <td>${element.lastQualification}</td>
            <td>${element.status}</td>
            </tr>`;
      });
    }

  return data
  }

  render();

const ws = XLSX

console.log(ws);


async function download(){



  let data = await  render()  
  console.log(data);



    const ws = XLSX.utils.json_to_sheet(data); // Converts JSON to Excel sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Students"); // Append the sheet to the workbook

    // Trigger Excel download
    XLSX.writeFile(wb, "students_data.xlsx");
}

document.getElementById("downloadBtn").addEventListener("click", download);

async function check() {
  let ab = document.getElementById("number").value;
  console.log("ggjhghj");

  const { data, error } = await client
    .from("StudentsForm")
    .select("name, fatherName , mobile , status")
    .eq("rollNumber", ab);

  if (error) {
    console.log("error" + error.message);
  } else {
    console.log("data", data);
  }
}
