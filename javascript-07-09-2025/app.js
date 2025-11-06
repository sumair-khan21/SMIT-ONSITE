// async

// function map(){

// // navigator.geolocation.getCurrentPosition((position) => {
// // //    console.log(position);
// //    console.log(position.coords.latitude);
// //     console.log(position.coords.longitude);


// //     });
// // }


// check internet connection

// function checkConnection(){
//     if(navigator.onLine){
//         alert("You are online");
//         // console.log("You are online");
//     } else {
//         alert("You are offline");
//         // console.log("You are offline");
//     }
// }





// function getLocation() {
//     navigator.geolocation.getCurrentPosition((e) => {

//         let show = document.getElementById("show");
//         let latitude = e.coords.latitude
//         let longitude = e.coords.longitude
//         show.innerHTML = `<iframe src = "https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed"></iframe>
// `
//     })

// }



// console.log(navigator.mediaDevices.getUserMedia()
// );

// console.log(
// navigator.mediaDevices.getUserMedia({video: true, audio: true}));


// function getCamera(){
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//         .then((stream) => {
//             const video = document.querySelector('video');
//             video.srcObject = stream;
//             video.play();
//         })
//         .catch((error) => {
//             console.error('Error accessing media devices.', error);
//         });
//         // navigator.mediaDevices.getUserMedia({video: true, audio: true})
// }

// getCamera()






