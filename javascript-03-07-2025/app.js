let text = document.getElementById("todotext");
let btnAdd = document.getElementById("btn");
let ul = document.getElementById("show");
let data = ['a', 'b', 'c', 'd'];

render()
function render() {
  ul.innerHTML = ``;
  for (var i = 0; i < data.length; i++) {
    ul.innerHTML += `<li> ${data[i]}<button class="edit" data='${i}'>Edit</button> <button class="del">Del</button></li>
`;
  }
  let edit = document.querySelectorAll(".edit");

for (var i = 0; i < edit.length; i++) {
  edit[i].addEventListener("click", function () {
    // console.log(event.target);
    let index = this.getAttribute("data");
    let updateValue = prompt(`enter update value, ${data[i]} `);
    data.splice(index, 1, updateValue);
    // console.log(index);
    console.log(data);

    ul.innerHTML = ``;
    render();
  });
}
}

btnAdd.addEventListener("click", function () {
  data.push(text.value);
 
  text.value = "";
  ul.innerHTML = ``;
  render();

  // console.log(edit);
  console.log(data);
});

// window.location.pathname = "https://www.google.com";
