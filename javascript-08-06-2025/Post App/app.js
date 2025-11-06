const supabaseUrl = "https://dwyuevxhkggpbmsveaxo.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eXVldnhoa2dncGJtc3ZlYXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNDk5MDEsImV4cCI6MjA2ODgyNTkwMX0.rly4ZRgwox-LZgIGA0k8T9Y7nYJUf5mgPL-9GB8b0kU`;
const client = supabase.createClient(supabaseUrl, supabaseKey);

document
  .getElementById("signUpForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form values
    // const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    // const age = document.getElementById("age").value;
    const profilePicture = document.getElementById("profilePicture").files[0];

    try {
      const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "http://127.0.0.1:5501/login.html",
          data: {
            // first_name: name,
          },
        },
      });
      if (error) {
        console.error("error", error.message);
        return;
      }

      console.log("account is create");

      if (profilePicture) {
        console.log(data);
        console.log(profilePicture);
        const { data: fileData, error: fileError } = await client.storage
          .from("postapp")
          .upload(`userImage/${data.user.id}`, profilePicture);
      }

      console.log(data);
      if (fileError) {
        console.error("img issue", error.message);
        console.error(fileData);

        return;
      }
      console.log(fileData);

      console.log("img upload");
    } catch {}
  });
