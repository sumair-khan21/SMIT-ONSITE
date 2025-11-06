const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";
const client = supabase.createClient(supabaseUrl, supabaseKey);



// let submitBtn = document.getElementById("submitBtn");

// if (submitBtn) {
//   submitBtn.addEventListener("click", async function () {
//     let userName = document.getElementById("userName").value;
//     let email = document.getElementById("email").value;
//     let userImage = document.getElementById("userImage").files[0];

//     if (!userName || !email || !userImage) {
//       alert("Please fill all fields and select an image");
//       return;
//     }

//     // 1️⃣ Save text data (not the file) to Supabase table
//     const { data, error } = await client
//       .from("admissionForm")
//       .insert({ 
//         userName: userName, 
//         userEmail: email, 
//         imageUrls: userImage.name // just file name in DB
//       })
//       .select();

//     if (error) {
//       console.error("Error inserting data:", error.message);
//       return;
//     }

//     console.log("Data inserted successfully", data);

//     // 2️⃣ Upload file to Supabase Storage
//     // const filePath = `public/${data[0].id}_${userImage.name}`;
//     if(userImage){
//         const { data: fileData, error: fileError } = await client
//       .storage
//       .from("studentimages")
//       .upload(`public/avatar1.png`, userImage);

//     }
//     if (fileError) {
//       console.error("Image upload error:", fileError.message);
//       return;
//     }

//     console.log("Image uploaded successfully", fileData);
//   });
// }



let submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", async function () {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let userImage = document.getElementById("userImage").files[0];

    if (!userName || !email || !userImage) {
      alert("Please fill all fields and select an image");
      return;
    }

    // 1️⃣ Save text data to Supabase table
    const { data, error } = await client
      .from("admissionForm")
      .insert({ 
        userName: userName, 
        userEmail: email, 
        imageUrls: userImage.name 
      })
      .select();

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    console.log("Data inserted successfully", data);

    // 2️⃣ Upload file to Supabase Storage
    const filePath = `public/${data[0].id}_${userImage.name}`;
    const { data: fileData, error: fileError } = await client
      .storage
      .from("studentimages")
      .upload(filePath, userImage);

    if (fileError) {
      console.error("Image upload error:", fileError.message);
      return;
    }

    console.log("Image uploaded successfully", fileData);
  });
}
