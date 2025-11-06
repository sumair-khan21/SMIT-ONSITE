const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";

const client = supabase.createClient(supabaseUrl, supabaseKey);


let adminForm = document.getElementById("adminForm");

if (adminForm) {
    adminForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        let label = document.getElementById("label").value;
        let category = document.getElementById("category").value;
        console.log(label, category);
        let { data, error } = await client.from("adminForm").insert({
            label,
            category
        })
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(data);
            window.location.href = "form.html";
        }




    })
}



async function show() {
    let stdData = document.getElementById("stdData");
    let { data, error } = await client.from("adminForm").select("*");
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
        // return data;
    }

    data.forEach((item) => {
        stdData.innerHTML += `
            <div>
                <input type="${item.category}" placeholder="${item.label}" id="${item.label}">
            </div>
            `
    })
}

show()

let userData = document.getElementById("userData");
if (userData) {
    userData.addEventListener("click", async (e) => {
        let data1 = {};
        let inputs = document.querySelectorAll("#stdData input");

        inputs.forEach((item) => {
            data1[item.id] = item.value;
        })
        console.log(data1);
        let { data, error } = await client.from("selectFields").insert({
            response_data: data1
        })
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(data);
            alert("Data inserted successfully");
            inputs.forEach((item) => {
                item.value = "";
            })
            // window.location.href = "form.html";
        }

        let fieldsData = document.getElementById("fieldsData");
        fieldsData.innerHTML = "";
        fieldsData.innerHTML += `
        <div>
        <p>Name : ${data1.text}</p>
        <p>Email : ${data1.email}</p>
        <p>Number : ${data1.number}</p>
        <p>Descrition : ${data1.textarea}</p>

        </div>
        `
        // data1.forEach((item) => {
        //     fieldsData.innerHTML += `
        //     <div>
        //         <p>${item}</p>
        //     </div>
        //     `
        // })


    })
}

