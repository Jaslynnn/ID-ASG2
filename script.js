let BreakfastSearch = document.querySelector("#v-pills-breakfast-tab")
let LunchSearch = document.querySelector("#v-pills-lunch-tab")
let DinnerSearch = document.querySelector("#v-pills-dinner-tab")
let DessertsSearch = document.querySelector("#v-pills-desserts-tab")

//Add an event listener that runs the function sendApiRequest when clicked.

BreakfastSearch.addEventListener("click", () =>{
    console.log("button pressed")
    sendApiRequestBreakfast()
})

LunchSearch.addEventListener("click", () =>{
  console.log("button pressed")
  sendApiRequestLunch()
})

DinnerSearch.addEventListener("click", () =>{
  console.log("button pressed")
  sendApiRequestDinner()
})

DinnerSearch.addEventListener("click", () =>{
  console.log("button pressed")
  sendApiRequestDesserts()
})


//An asynchronous function to fetch data from api.
async function sendApiRequestBreakfast(){
    let APP_ID ="405a394c"
    let API_KEY ="3104f9ddfb4ee96509c47474e498a8e7"
    let food = document.getElementById("v-pills-breakfast-tab").value
    let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=breakfast`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    userAPIDataBreakfast(data)
}

async function sendApiRequestLunch(){
  let APP_ID ="405a394c"
  let API_KEY ="3104f9ddfb4ee96509c47474e498a8e7"
  let food = document.getElementById("v-pills-lunch-tab").value
  let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=yummy`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataLunch(data)
}

async function sendApiRequestDinner(){
  let APP_ID ="405a394c"
  let API_KEY ="3104f9ddfb4ee96509c47474e498a8e7"
  let food = document.getElementById("v-pills-dinner-tab").value
  let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=savoury`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataDinner(data)
}

async function sendApiRequestDesserts(){
  let APP_ID ="405a394c"
  let API_KEY ="3104f9ddfb4ee96509c47474e498a8e7"
  let food = document.getElementById("v-pills-desserts-tab").value
  let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=dessert`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataDesserts(data)
}




//function that does something with the data received from the API. Name customised to whatever you are doing with it
function userAPIDataBreakfast(data){
    document.querySelector("#v-pills-breakfast").innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text"> Calories: ${data.hits[0].recipe.calories}
        Health Labels: ${data.hits[0].recipe.healthLabels}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
        </div>
    </div>
  </div>
</div>


    <div class="card col-3" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text"> 
    Calories: ${data.hits[0].recipe.calories}
    Health Labels: ${data.hits[0].recipe.healthLabels} </p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


    `


}
//Add in the calories, source credit, create filters,

function userAPIDataLunch(data){
  document.querySelector("#v-pills-lunch").innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text"> Calories: ${data.hits[0].recipe.calories}
      Health Labels: ${data.hits[0].recipe.healthLabels}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>


  <div class="card col-3" style="width: 18rem;">
<img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[0].recipe.label}</h5>
  <p class="card-text"> 
  Calories: ${data.hits[0].recipe.calories}
  Health Labels: ${data.hits[0].recipe.healthLabels} </p>
  <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
</div>
</div>


  `
}
function userAPIDataDinner(data){
    document.querySelector("#v-pills-dinner").innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text"> Calories: ${data.hits[0].recipe.calories}
        Health Labels: ${data.hits[0].recipe.healthLabels}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
        </div>
    </div>
  </div>
  </div>
  
  
    <div class="card col-3" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text"> 
    Calories: ${data.hits[0].recipe.calories}
    Health Labels: ${data.hits[0].recipe.healthLabels} </p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  
  
    `

}

function userAPIDataDesserts(data){
  document.querySelector("#v-pills-desserts").innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text"> Calories: ${data.hits[0].recipe.calories}
      Health Labels: ${data.hits[0].recipe.healthLabels}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>


  <div class="card col-3" style="width: 18rem;">
<img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[0].recipe.label}</h5>
  <p class="card-text"> 
  Calories: ${data.hits[0].recipe.calories}
  Health Labels: ${data.hits[0].recipe.healthLabels} </p>
  <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
</div>
</div>


  `
}