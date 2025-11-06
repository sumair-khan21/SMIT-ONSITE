// https://console.cloud.google.com/
// api and services
// credentials
// create project
// project name
// congigure 
// app info
// email , extranl , email dono mai same email dalegi
// create Oth client
// web app , app name
// client id or scert milega supabase mai paste krna
// callback url dena hy supabase se or authrize user mai paste krna hoga google console mai



document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let age = document.getElementById('age').value;
    console.log(fullname, email, password, age);
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('age').value = '';
})