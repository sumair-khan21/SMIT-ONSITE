import { client } from './confg.js'

const email = document.getElementById('email')
const password = document.getElementById('password')
let submit = document.getElementById('submit')
let login = document.getElementById('login')
const name = document.getElementById('name')
const mobile = document.getElementById('mobile')
let reset = document.getElementById('reset')
let resetPassword = document.getElementById('resetPassword')
let newPassword = document.getElementById('newPassword')
let confirmPassword = document.getElementById('confirmPassword')
let whatsappPhoneNumber = document.getElementById('whatsappPhoneNumber')
let whatsappPassword = document.getElementById('whatsappPassword')
let whatsappBtn = document.getElementById('whatsappBtn')


if (submit) {
    submit.addEventListener('click', async (e) => {
        e.preventDefault()

        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    displayName: name.value,
                    // phone: mobile.value,
                }
            }
        })
        // console.log(mobile.value);

        if (error) {
            console.log("Sign up error:", error.message)
            alert("Error during sign up: " + error.message)
            return
        }

        console.log("Sign-up successful:", data)
    })
}

if (login) {
    login.addEventListener('click', async (e) => {
        e.preventDefault()

        if (!email.value || !password.value) {
            alert("Please fill in both email and password!")
            return
        }

        const { data, error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        if (error) {
            console.log("Login error:", error.message)
            alert("Login failed: " + error.message)
            return
        }

        console.log("Login successful:", data)
    })
}


if (reset) {
    reset.addEventListener('click', async (e) => {
        e.preventDefault()
        const { data, error } = await client.auth.resetPasswordForEmail(email.value, {
            redirectTo: 'http://127.0.0.1:5500/resetpassword.html',
        })

        if (error) {
            console.log(error);
        }

        console.log(data);
    })
}


if (resetPassword) {
    resetPassword.addEventListener('click', async (e) => {
        e.preventDefault()

        if (newPassword.value !== confirmPassword.value) {
            alert("Password does not match")
            return;
        }
        const { data, error } = await client.auth.updateUser({
            password: newPassword.value

        })
        // console.log(newPassword.value);
        if (error) {
            console.log(error);
        }
        console.log(data);
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
}





if(whatsappBtn){
    whatsappBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        const { data, error } = await client.auth.signUp({
            phone: whatsappPhoneNumber.value,
            password: whatsappPassword.value,
            options: {
              channel: 'whatsapp'
            }
          })
          if(error){
            console.log(error);
          }
          console.log(data);
    })
}

