// supabase


// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://hvqsvgxnazenefrtdlhp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXN2Z3huYXplbmVmcnRkbGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTczMTAsImV4cCI6MjA2ODM5MzMxMH0.5Y1vFQqG1hKefp8jvrJr95vEXNLvZhqz5xZfYhbszBU'
const client = supabase.createClient(supabaseUrl, supabaseKey)
// const supabase = createClient(supabaseUrl, supabaseKey)
// console.log(supabase);



// let firstName = document.getElementById('first-name');
// let lastName = document.getElementById('last-name');
// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let submit = document.getElementById('submit');


// // insert data
// submit.addEventListener('submit', async (e) =>  {
//     e.preventDefault();
//     // console.log(firstName, lastName, username, email, password);
    
//     let firstName1 = firstName.value;
//     let email1 = email.value;
// let lastName1 = lastName.value;
// let username1 = username.value;
// let password1 = password.value;

// console.log(firstName1,lastName1,username1,email1,password1 );

// const {  error } = await client
//   .from('user_details')
//   .insert({ email1,lastName1,firstName1,username1,password1 })
// // if(error){
// //     console.log(error);
// // }
// // if(data){
// //     console.log(data);
// // }
// })



// // delete data
// // document.getElementById("delete").addEventListener('click', async ()=>{
// //     let userEmail = document.getElementById('userEmail').value;
// //     console.log(userEmail);
// // const response = await client
// //   .from('user_details')
// //   .delete()
// //   .eq('email1', userEmail)
// //   alert("Deleted")
// // })


// fetch data is mai type module zarori hay
// const { data, error } = await client
//   .from('user_details')
//   .select()
//   console.log(data)



// updated data

// const { error } = await client
//   .from('user_details')
//   .update({ firstName1: 'piano' })
//   .eq('id', 6)
//   console.log(error)



document.getElementById('click').addEventListener('click',async ()=>{
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log(email, password);
  const { data, error } = await client.auth.signUp({
    email: email,
    password: password,
  })
  console.log(data, error)
  alert('successfully registered')  
})





