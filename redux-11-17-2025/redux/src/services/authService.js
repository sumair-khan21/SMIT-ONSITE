export async function loginAPI(credentials) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(credentials.email === "sums@gmail.com" && credentials.password == "1234"){
                resolve({
                    user: {id: 1, user: "Sumair", email: "sums@gmail.com"},
                    token: "fake-token-123"
                })
            }else{
                reject("Invalid Credentials")
            }
        }, 3000)

    })
}