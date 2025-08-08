const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";
const client = supabase.createClient(supabaseUrl, supabaseKey);

let signup = document.getElementById("signup");
if (signup) {
  signup.addEventListener("click", async (e) => {
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let username = document.getElementById("signup-username").value;
    let image = document.getElementById("signup-image").files[0];
    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Error signing up:", error.message);
    } else {
    //   console.log("User signed up successfully", data);
    //   window.location.href = "dashboard.html";
    }

    const { data: imageDta, error: imageError } = await client.storage
      .from("postapp")
      .upload(`public/${data.user.id}`, image, {
        cacheControl: "3600",
        upsert: true,
      });

    if (imageError) {
      console.log("Error uploading image:", imageError.message);
    }
    console.log("Image uploaded successfully", imageDta);

    const { data: imageUrl } = client.storage
      .from("postapp")
      .getPublicUrl(`public/${data.user.id}`);

    let userUrl = imageUrl.publicUrl;

    const { error: fileError, data: fileData } = await client
      .from("postApp")
      .insert({
        id: data.user.id,
        email: email,
        username: username,
        imageUrl: userUrl,
      });
    if (fileError) {
      console.log("Error signing up:", fileError.message);
    } else {
        // console.log("User signed up successfully", fileData);
      //   window.location.href = "login.html";
    }

    // console.log("Email:", email);
    // console.log("username:", username);
    // console.log("Image:", image);
  });
}

let showData = document.getElementById("showData");

async function displayData() {
  const { data, error } = await client.from("postApp").select("*");
  if (error) {
    console.log("error" + error);
  }
  console.log("data", data);

  data.forEach((element) => {
    showData.innerHTML += `
    <tr>
                        <td>${element.username}</td>
                        <td>${element.email}</td>
                        <td><img src="${element.imageUrl}" alt="abc" height="50px" width="50px"></td>
                    </tr>
    `;
  });
}

displayData();
