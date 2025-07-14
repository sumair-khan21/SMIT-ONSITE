let selectDifficulty = document.getElementById("difficulty");
let selectCuisine = document.getElementById("cuisine");
let url = `https://dummyjson.com/recipes`;
let show = document.getElementById("main");
let allData = [];
let difficulty = [];
let cuisine = [];
let inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btn");

async function api() {
  let data = await fetch(url);
  let raw = await data.json();
  // console.log(raw);

  allData = raw.recipes;
  // console.log(allData);

  // difficulty ko array mai push kr rahe
  allData.forEach((element) => {
    // console.log(element);
    if (!difficulty.includes(element.difficulty)) {
      // console.log(element.difficulty);

      difficulty.push(element.difficulty);
    }

    // cuisine ko array mai push kr rahe
    if (!cuisine.includes(element.cuisine)) {
      cuisine.push(element.cuisine);
    }

    render(element);
  });

  selectDifficulty.addEventListener("change", selectFilter);
  selectCuisine.addEventListener("change", selectFilter);

  difficulty.forEach((ele) => {
    selectDifficulty.innerHTML += `
            <option value="${ele}" >${ele}</option>
 `;
  });

  cuisine.forEach((ele) => {
    selectCuisine.innerHTML += `
            <option value="${ele}" >${ele}</option>
 `;
  });
  // console.log(difficulty);
  // console.log(cuisine);
}

function render(data) {
  show.innerHTML += `
    <div class="card">
        <img width="300px" src="${data.image}" alt="">
        <h1>${data.name}</h1>
        <p>difficulty: ${data.difficulty}</p>
        <p>cuisine: ${data.cuisine}</p>
    </div>
    </div>
    `;
}

function selectFilter() {
  let difficultyValue = selectDifficulty.value;
  let cuisineValue = selectCuisine.value;
  //   console.log(difficultyValue);

  let a = allData.filter((element) => {
    return (
      (difficultyValue == "" || element.difficulty == difficultyValue) &&
      (cuisineValue == "" || element.cuisine == cuisineValue)


    );
    // console.log(element);
  });

  show.innerHTML = "";
  a.forEach((element) => {
    render(element);
  });
}


inputValue.addEventListener('keyup', ()=>{
  let lowerCase1 = inputValue.value.toLowerCase();
  show.innerHTML = "";
  let match = false
  allData.forEach((element)=>{
    let lowerCase2 = element.name.toLowerCase();
    if(lowerCase2.includes(lowerCase1)){
        
        render(element)
        match = true
    }
  })

    if(!match){
      show.innerHTML = `<p>no recipes found</p>`
    }
})

selectDifficulty.value = ""
selectCuisine.value = ""

// function btnn() {
//   //   console.log("click me");
//   allData.forEach((element) => {
//     // console.log(element.name);
//     // console.log(inputValue.value.includes(element.name));
//     let lowerCase1 = inputValue.value.toLowerCase();
//     let lowerCase2 = element.name.toLowerCase();
    
//     if (lowerCase1.includes(lowerCase2)) {
//       // console.log(element.name);
//       show.innerHTML = "";
//       console.log(element);
//       render(element);
//     }
//   });

// // let fil =  allData.find((element) => {
// //     // console.log(element.name);
// //    return inputValue.value.toLowerCase()  === element.name.toLowerCase()
    
// // }

// // )
// // console.log(fil);


// //  let fil = allData.find((element) => {
// //     // console.log("element.name:", element.name);
// //     return inputValue.value.toLowerCase() === element.name?.toLowerCase();
// //   });

// //   console.log("fil:", fil);
// }




api();























// let selectDifficulty = document.getElementById("difficulty");
// let selectCuisine = document.getElementById("cuisine");
// let difficulty = [];
// let cuisine = [];
// let allData = [];
// let show = document.getElementById("main");
// let url = `https://dummyjson.com/recipes`;

// async function api() {
//   let raw = await fetch(url);
//   let data = await raw.json();
//   // console.log(data);
//   allData = data.recipes;

//   // console.log(allData);

//   allData.forEach((element) => {
//     if (!difficulty.includes(element.difficulty)) {
//       difficulty.push(element.difficulty);
//     }

//     if (!cuisine.includes(element.cuisine)) {
//       cuisine.push(element.cuisine);
//     }

// renderCard(element);
//   });

//   selectDifficulty.addEventListener("change", selectFilter);
//   selectCuisine.addEventListener("change", selectFilter);

//   difficulty.forEach((element) => {
//     selectDifficulty.innerHTML += ` <option value="${element}">${element}</option>`;
//   });
//   cuisine.forEach((element) => {
//     selectCuisine.innerHTML += ` <option value="${element}">${element}</option>`;
//   });
// }

// function renderCard(data) {
//   show.innerHTML += `<div class="card">
//       <img src="${data.image}" alt="">
//       <h1>${data.name}</h1>
//       <p>Difficulty: ${data.difficulty}</p>
//       <p>Cuisine: ${data.cuisine}</p>
//       </div>`;
// }

// function selectFilter() {
//   let difficultyValue = selectDifficulty.value;
//   let cuisineValue = selectCuisine.value;
//   let a = allData.filter((element) => {
//     if (element.difficulty == difficultyValue) {
//       return element;
//     }
//   });

// show.innerHTML=""
//  a.forEach((element) => {
//     renderCard(element);
//   });
// }

// api();
