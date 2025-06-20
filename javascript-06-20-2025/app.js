let std = [
    {
        name: "John Doe",
        age: 20,
        class: "10th",
        gender: "Male",
        phoneNumber: "123-456-7890",
        email: "abc@gmail.com",
        action: "Edit"

    },
    {
        name: "John Doe",
        age: 20,
        class: "10th",
        gender: "Male",
        phoneNumber: "123-456-7890",
        email: "abc@gmail.com",
        action: "Edit"

    },
    {
        name: "John Doe",
        age: 20,
        class: "10th",
        gender: "Male",
        phoneNumber: "123-456-7890",
        email: "abc@gmail.com",
        action: "Edit"

    }
]

let show = document.getElementById("show");
for(let i =0; i < std.length; i++){
    // let row = document.createElement("tr");
    
    show.innerHTML += `
    <tr>
    <td>${std[i].name}</td>
    <td>${std[i].age}</td>
    <td>${std[i].class}</td>
    <td>${std[i].gender}</td>
    <td>${std[i].phoneNumber}</td>
    <td>${std[i].email}</td>
    <td><button onclick="edit1()">${std[i].action}</button></td>
    </tr>
    `
    // show.appendChild(row);

}



//  edit function to handle the new form
// let newForm = document.getElementById("newForm");
function edit1() {
    // console.log("abc");

    let form =  document.createElement('form');
    form.innerHTML = `
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" class="form-control" id="age" required>
        </div>
        <div class="form-group"></div>
            <label for="class">Class:</label>
            <input type="text" class="form-control" id="class" required>
        </div>
        <div class="form-group">
            <label for="gender">Gender: </label>
            <select class="form-control">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>

        </div>
        <div class="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input type="text" class="form-control" id="phoneNumber" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        `
        newForm.appendChild(form); 
    
}


// function modelOpen(){
//     document.getElementById('studentModel').style.display = "block";
// }

// function closeModel(){
//     document.getElementById('studentModel').style.display = "none";
// }

// window.onclick = function (event) {
//     const modal = document.getElementById('studentModel');
//     if(event.target == modal){
//         modal.style.display = "none";
//     }
// }









