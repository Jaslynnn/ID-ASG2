let BreakfastSearch = document.querySelector("#v-pills-breakfast-tab")
let LunchSearch = document.querySelector("#v-pills-lunch-tab")
let DinnerSearch = document.querySelector("#v-pills-dinner-tab")
let DessertsSearch = document.querySelector("#v-pills-desserts-tab")
let OthersSearch = document.querySelector("#search")

//Add an event listener that runs the function sendApiRequest when clicked.

BreakfastSearch.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequestBreakfast()
})

LunchSearch.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequestLunch()
})

DinnerSearch.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequestDinner()
})

DessertsSearch.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequestDesserts()
})

OthersSearch.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequestOthers()
})

//An asynchronous function to fetch data from api.
async function sendApiRequestBreakfast() {
  let APP_ID = "405a394c"
  let API_KEY = "3104f9ddfb4ee96509c47474e498a8e7"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=breakfast`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataBreakfast(data)
}

async function sendApiRequestLunch() {
  let APP_ID = "405a394c"
  let API_KEY = "3104f9ddfb4ee96509c47474e498a8e7"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=luncheon`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataLunch(data)
}

async function sendApiRequestDinner() {
  let APP_ID = "405a394c"
  let API_KEY = "3104f9ddfb4ee96509c47474e498a8e7"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=savoury`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataDinner(data)
}

async function sendApiRequestDesserts() {
  let APP_ID = "405a394c"
  let API_KEY = "3104f9ddfb4ee96509c47474e498a8e7"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=dessert`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataDesserts(data)
}

async function sendApiRequestOthers() {
  let APP_ID = "405a394c"
  let API_KEY = "3104f9ddfb4ee96509c47474e498a8e7"
  let food = document.getElementById("foodsearch").value
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${food}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  userAPIDataOthers(data)
}


//function that does something with the data received from the API. Name customised to whatever you are doing with it
function userAPIDataBreakfast(data) {
  let cards= "";
  for (var i = 0; i < data.hits.length; i++){
    cards += <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li>Ingredients needed: ${data.hits[i].recipe.ingredientLines[i]}</p>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
      
    </div>
  </div>
    
  }
  for (var i = 0; i < data.hits.length; i++) {
    document.querySelector("#v-pills-breakfast").innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li>Ingredients needed: ${data.hits[i].recipe.ingredientLines[i]}</p>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
      
    </div>
  </div>
`
  }
  
  /*for (var i = 0; i < data.hits[0].recipe.ingredientLines.length; i++) {
    document.querySelector("#v-pills-breakfast").innerHTML = `
    <div class="row">
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5> 
        <p class="card-text">
        <li>Diet-type:${data.hits[0].recipe.dietLabels}</li>
        <li>Calories: ${data.hits[0].recipe.calories}</li>
        <li>Health Labels: ${data.hits[0].recipe.healthLabels}</li>
        <li>Ingredients needed: ${data.hits[0].recipe.ingredientLines[i]}</p>
        <p class="card-text">Sourced from: ${data.hits[0].recipe.source}</small></p>
        <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
        </div>
    </div>
    
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[1].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[1].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[1].recipe.calories}</li>
      <li>Health Labels: ${data.hits[1].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[1].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[1].recipe.source}</small></p>
      <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[2].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[2].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[2].recipe.calories}</li>
      <li>Health Labels: ${data.hits[2].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[2].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[2].recipe.source}</small></p>
      <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[3].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[3].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[3].recipe.calories}</li>
      <li>Health Labels: ${data.hits[3].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[3].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[3].recipe.source}</small></p>
      <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[4].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[4].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[4].recipe.calories}</li>
      <li>Health Labels: ${data.hits[4].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[4].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[4].recipe.source}</small></p>
      <a href="${data.hits[4].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[5].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[5].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[5].recipe.calories}</li>
      <li>Health Labels: ${data.hits[5].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[5].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[5].recipe.source}</small></p>
      <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[6].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[6].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[6].recipe.calories}</li>
      <li>Health Labels: ${data.hits[6].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[6].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[6].recipe.source}</small></p>
      <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[7].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[7].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[7].recipe.calories}</li>
      <li>Health Labels: ${data.hits[7].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[7].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[7].recipe.source}</small></p>
      <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[8].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[8].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[8].recipe.calories}</li>
      <li>Health Labels: ${data.hits[8].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[8].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[8].recipe.source}</small></p>
      <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[9].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[9].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[9].recipe.calories}</li>
      <li>Health Labels: ${data.hits[9].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[9].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[9].recipe.source}</small></p>
      <a href="${data.hits[9].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>




</div>

    `
  }*/


}

function userAPIDataLunch(data) {
  document.querySelector("#v-pills-lunch").innerHTML = `
  <div class="row">
  <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[0].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[0].recipe.calories}</li>
      <li>Health Labels: ${data.hits[0].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[0].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[0].recipe.source}</small></p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[1].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[1].recipe.calories}</li>
    <li>Health Labels: ${data.hits[1].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[1].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[1].recipe.source}</small></p>
    <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[2].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[2].recipe.calories}</li>
    <li>Health Labels: ${data.hits[2].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[2].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[2].recipe.source}</small></p>
    <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[3].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[3].recipe.calories}</li>
    <li>Health Labels: ${data.hits[3].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[3].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[3].recipe.source}</small></p>
    <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[4].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[4].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[4].recipe.calories}</li>
    <li>Health Labels: ${data.hits[4].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[4].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[4].recipe.source}</small></p>
    <a href="${data.hits[4].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[5].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[5].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[5].recipe.calories}</li>
    <li>Health Labels: ${data.hits[5].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[5].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[5].recipe.source}</small></p>
    <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[6].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[6].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[6].recipe.calories}</li>
    <li>Health Labels: ${data.hits[6].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[6].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[6].recipe.source}</small></p>
    <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[7].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[7].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[7].recipe.calories}</li>
    <li>Health Labels: ${data.hits[7].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[7].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[7].recipe.source}</small></p>
    <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[8].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[8].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[8].recipe.calories}</li>
    <li>Health Labels: ${data.hits[8].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[8].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[8].recipe.source}</small></p>
    <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[9].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[9].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[9].recipe.calories}</li>
    <li>Health Labels: ${data.hits[9].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[9].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[9].recipe.source}</small></p>
    <a href="${data.hits[9].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>




</div>
  `
}

function userAPIDataDinner(data) {
  document.querySelector("#v-pills-dinner").innerHTML = `
    <div class="row">
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">
        <li>Diet-type:${data.hits[0].recipe.dietLabels}</li>
        <li>Calories: ${data.hits[0].recipe.calories}</li>
        <li>Health Labels: ${data.hits[0].recipe.healthLabels}</li>
        <li>Ingredients needed: ${data.hits[0].recipe.ingredientLines}</p>
        <p class="card-text">Sourced from: ${data.hits[0].recipe.source}</small></p>
        <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
        </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[1].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[1].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[1].recipe.calories}</li>
      <li>Health Labels: ${data.hits[1].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[1].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[1].recipe.source}</small></p>
      <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[2].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[2].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[2].recipe.calories}</li>
      <li>Health Labels: ${data.hits[2].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[2].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[2].recipe.source}</small></p>
      <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[3].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[3].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[3].recipe.calories}</li>
      <li>Health Labels: ${data.hits[3].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[3].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[3].recipe.source}</small></p>
      <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[4].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[4].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[4].recipe.calories}</li>
      <li>Health Labels: ${data.hits[4].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[4].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[4].recipe.source}</small></p>
      <a href="${data.hits[4].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[5].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[5].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[5].recipe.calories}</li>
      <li>Health Labels: ${data.hits[5].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[5].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[5].recipe.source}</small></p>
      <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[6].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[6].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[6].recipe.calories}</li>
      <li>Health Labels: ${data.hits[6].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[6].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[6].recipe.source}</small></p>
      <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[7].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[7].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[7].recipe.calories}</li>
      <li>Health Labels: ${data.hits[7].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[7].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[7].recipe.source}</small></p>
      <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[8].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[8].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[8].recipe.calories}</li>
      <li>Health Labels: ${data.hits[8].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[8].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[8].recipe.source}</small></p>
      <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[9].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[9].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[9].recipe.calories}</li>
      <li>Health Labels: ${data.hits[9].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[9].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[9].recipe.source}</small></p>
      <a href="${data.hits[9].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>




</div>


  
    `

}

function userAPIDataDesserts(data) {
  document.querySelector("#v-pills-desserts").innerHTML = `
  <div class="row">
  <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[0].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[0].recipe.calories}</li>
      <li>Health Labels: ${data.hits[0].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[0].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[0].recipe.source}</small></p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[1].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[1].recipe.calories}</li>
    <li>Health Labels: ${data.hits[1].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[1].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[1].recipe.source}</small></p>
    <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[2].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[2].recipe.calories}</li>
    <li>Health Labels: ${data.hits[2].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[2].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[2].recipe.source}</small></p>
    <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[3].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[3].recipe.calories}</li>
    <li>Health Labels: ${data.hits[3].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[3].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[3].recipe.source}</small></p>
    <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[4].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[4].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[4].recipe.calories}</li>
    <li>Health Labels: ${data.hits[4].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[4].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[4].recipe.source}</small></p>
    <a href="${data.hits[4].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[5].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[5].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[5].recipe.calories}</li>
    <li>Health Labels: ${data.hits[5].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[5].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[5].recipe.source}</small></p>
    <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[6].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[6].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[6].recipe.calories}</li>
    <li>Health Labels: ${data.hits[6].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[6].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[6].recipe.source}</small></p>
    <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[7].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[7].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[7].recipe.calories}</li>
    <li>Health Labels: ${data.hits[7].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[7].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[7].recipe.source}</small></p>
    <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[8].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[8].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[8].recipe.calories}</li>
    <li>Health Labels: ${data.hits[8].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[8].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[8].recipe.source}</small></p>
    <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[9].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[9].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[9].recipe.calories}</li>
    <li>Health Labels: ${data.hits[9].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[9].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[9].recipe.source}</small></p>
    <a href="${data.hits[9].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>




</div>
  `
}

function userAPIDataOthers(data) {
  document.querySelector(".others").innerHTML = `
  <div class="row">
  <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text">
      <li>Diet-type:${data.hits[0].recipe.dietLabels}</li>
      <li>Calories: ${data.hits[0].recipe.calories}</li>
      <li>Health Labels: ${data.hits[0].recipe.healthLabels}</li>
      <li>Ingredients needed: ${data.hits[0].recipe.ingredientLines}</p>
      <p class="card-text">Sourced from: ${data.hits[0].recipe.source}</small></p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to source</a>
      </div>
  </div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[1].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[1].recipe.calories}</li>
    <li>Health Labels: ${data.hits[1].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[1].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[1].recipe.source}</small></p>
    <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[2].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[2].recipe.calories}</li>
    <li>Health Labels: ${data.hits[2].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[2].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[2].recipe.source}</small></p>
    <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[3].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[3].recipe.calories}</li>
    <li>Health Labels: ${data.hits[3].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[3].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[3].recipe.source}</small></p>
    <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[4].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[4].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[4].recipe.calories}</li>
    <li>Health Labels: ${data.hits[4].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[4].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[4].recipe.source}</small></p>
    <a href="${data.hits[4].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[5].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[5].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[5].recipe.calories}</li>
    <li>Health Labels: ${data.hits[5].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[5].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[5].recipe.source}</small></p>
    <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[6].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[6].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[6].recipe.calories}</li>
    <li>Health Labels: ${data.hits[6].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[6].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[6].recipe.source}</small></p>
    <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[7].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[7].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[7].recipe.calories}</li>
    <li>Health Labels: ${data.hits[7].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[7].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[7].recipe.source}</small></p>
    <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[8].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[8].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[8].recipe.calories}</li>
    <li>Health Labels: ${data.hits[8].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[8].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[8].recipe.source}</small></p>
    <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>

<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${data.hits[9].recipe.label}</h5>
    <p class="card-text">
    <li>Diet-type:${data.hits[9].recipe.dietLabels}</li>
    <li>Calories: ${data.hits[9].recipe.calories}</li>
    <li>Health Labels: ${data.hits[9].recipe.healthLabels}</li>
    <li>Ingredients needed: ${data.hits[9].recipe.ingredientLines}</p>
    <p class="card-text">Sourced from: ${data.hits[9].recipe.source}</small></p>
    <a href="${data.hits[9].recipe.url}" class="btn btn-primary">Go to source</a>
    </div>
</div>
</div>
</div>




</div>

  `
}

//Add in the calories, source credit, create filters,

//localStorage Create button that allows users to save recipes to local storage and display information on a saved area
//2 event listeners(one to save info to local storage)(one to retrieve data from local storage in form of html)
//bookmarkIcon add event listener, when clicked fills up to white.

//session storage for Sign up
//local storage for user actions after sign in
function init() {
  if (localStorage.FirstName) {
    document.getElementById("firstName").value = localStorage.FirstName;
  }
  if (localStorage.LastName) {
    document.getElementById("lastName").value = localStorage.LastName;
  }
  if (localStorage.Username) {
    document.getElementById("username").value = localStorage.Username;
  }
  if (localStorage.Bio) {
    document.getElementById("bio").value = localStorage.Bio;
  }
  if (localStorage.Email) {
    document.getElementById("email").value = localStorage.Email;
  }
  if (localStorage.Gender) {
    document.getElementById("gender").value = localStorage.Gender;
  }
  if (localStorage.Password) {
    document.getElementById("password").value = localStorage.Password;
  }
  if (localStorage.TermsCheck) {
    document.getElementById("termsCheck").value = localStorage.TermsCheck;
  }

}



function onSavePressed() {
  localStorage.FirstName = document.getElementById("firstName").value;
  alert("You have signed up successfully.");
  localStorage.LastName = document.getElementById("lastName").value;
  localStorage.Username = document.getElementById("username").value;
  localStorage.Email = document.getElementById("email").value;
  localStorage.Gender = document.getElementById("gender").value;
  localStorage.Password = document.getElementById("password").value;
  localStorage.TermsCheck = document.getElementById("termsCheck").value;
  localStorage.Bio = document.getElementById("bio").value
}


//Add the username and profile page verification eg if the username match the local storage then you will have access to the My profile page, if not the thing will bw disabble(like add the html tage disabled inside.)

//Display the username enters in sign up in the profile page



function displayProfile() {
  var UsernameP = localStorage.getItem("Username")
  var FirstnameP = localStorage.getItem("FirstName")
  var BioP = localStorage.getItem("bio")
  document.querySelector("#pUsername").innerHTML = `@${UsernameP} `
  document.querySelector("#firstName").innerHTML = `@${FirstnameP} `
  document.querySelector("#bio").innerHTML = `${BioP} `

}

function saveRecipe() {
  localStorage.Recipe = document.getElementById("").value;
}