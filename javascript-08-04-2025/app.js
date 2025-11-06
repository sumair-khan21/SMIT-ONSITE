const supabaseUrl = "https://vmcveofukestnfhmkbcr.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3Zlb2Z1a2VzdG5maG1rYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODgzNDMsImV4cCI6MjA2OTI2NDM0M30.MJ-cpe6IGG5wAG9lQleKb8jBKkB3CSNYp91L8B4NvfA";

const client = supabase.createClient(supabaseUrl, supabaseKey);







function abc() {
    toastr.options = {
      "closeButton": true,
      "debug": true,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
    toastr.success('Hello, world!', 'Success');
  }


// let imageUpload = document.getElementById('image')


// if(imageUpload){
//     imageUpload.addEventListener('click', async ()=>{
// const avatarFile = event.target.files[0]
// const { data, error } = await client
//   .storage
//   .from('postapp')
//   .upload('public/avatar1.png', avatarFile, {
//     cacheControl: '3600',
//     upsert: false
//   })
//   if(error){
//     console.log(error.message);
//   }else{
//     console.log(data);
    
//   }
  
//     })
// }

// let upload = document.getElementById('upload')


// if(upload){
//     upload.addEventListener('change', async ()=>{
//         let imageUpload = document.getElementById('image');
//     // let file = imageUpload.files[0];
//     // let fileName = imageUpload.files[0].name;
// console.log(file);
// console.log(fileName);
// console.log("abc");



// // const avatarFile = event.target.files[0]
// // const { data, error } = await client
// //   .storage
// //   .from('postapp')
// //   .upload('public/avatar1.png', avatarFile, {
// //     cacheControl: '3600',
// //     upsert: false
// //   })

//     })
// }





if(image){
    image.addEventListener('input', async ()=>{
        let image = document.getElementById('image')
        // console.log("abc");
        let file =  image.files[0];
        let fileName = image.files[0].name;

        // const avatarFile = event.target.files[0]
const { data, error } = await client
  .storage
  .from('postapp')
  .upload(`public/${fileName}`
  )
  if(error){
    alert(error.message)
  }else{
    alert('File uploaded successfully:', data)
  }
        
    })
}