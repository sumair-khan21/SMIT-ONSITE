import { client } from "./confg.js";
// console.log(client);


// add token to localstorage
let email = document.getElementById("email");
let password = document.getElementById("password");

let signUp = document.getElementById("signup")
if(signUp){

 signUp.addEventListener("click", async () => {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  try {
    console.log(data);
  } catch {
    console.log(error.message);
  }
});
}



// login to save token in localstorage
let login = document.getElementById("login")
if(login){
    
 login.addEventListener("click", async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  try {
    console.log("data", data);
    console.log(email.value, password.value);
    window.location.href = 'dashboard.html'; 
  } catch {
    console.log("error", error.message);
  }
});
}



// remove token from localstorage
let logout = document.getElementById('logout')
if(logout){
    logout.addEventListener('click', async ()=>{
const { error } = await client.auth.signOut()
try {

    alert('user logout')
    window.location.href = `index.html`;

} catch  {
        console.log("error", error.message);
}
console.log("clcik");

})
}



// authentication check
async function checkAuth() {
  const { data: { session } } = await client.auth.getSession();
  const currentPage = window.location.pathname;

  if (session && currentPage === "/index.html") {
    window.location.href = "/dashboard.html"; 
  } else if (!session && currentPage === "/dashboard.html") {
    window.location.href = "/index.html";
  }
}
if (window.location.pathname === "/dashboard.html" || window.location.pathname === "/index.html") {
  checkAuth();
}
