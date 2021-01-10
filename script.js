$(document).ready(function () {

  let BreakfastSearch = document.querySelector("#v-pills-breakfast-tab")
  let BreakfastSearch2 = document.querySelector("#otherBreakfast")
  let LunchSearch = document.querySelector("#v-pills-lunch-tab")
  let DinnerSearch = document.querySelector("#v-pills-dinner-tab")
  let DessertsSearch = document.querySelector("#v-pills-desserts-tab")
  let OthersSearch = document.querySelector("#search")

  //Add jquery click that runs the function sendApiRequest when clicked.

  $(BreakfastSearch).click(function () {
    sendApiRequestBreakfast()
  });

  $(BreakfastSearch2).click(function () {
    sendApiRequestBreakfast()
  });

  $(LunchSearch).click(function () {
    sendApiRequestLunch()
  });

  $(DinnerSearch).click(function () {
    sendApiRequestDinner()
  });

  $(DessertsSearch).click(function () {
    sendApiRequestDesserts()
  });

  $(OthersSearch).click(function () {
    sendApiRequestOthers()
  });


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
    $("#instruction").css('display', 'none');

    let cards = "";

    for (var i = 0; i < data.hits.length; i++) {

      document.querySelector("#v-pills-breakfast").innerHTML += `
    <div class="column"> 
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top inverted" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li id= "ingredients">Ingredients needed:${data.hits[i].recipe.ingredientLines}</li>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
          </div>

          </div>
      </div>

    </div>
  </div>
  </div>
  `

    }

  }

  function userAPIDataLunch(data) {

    let cards = "";

    for (var i = 0; i < data.hits.length; i++) {
      document.querySelector("#v-pills-lunch").innerHTML += ` 
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top inverted" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li id= "ingredients">Ingredients needed:${data.hits[i].recipe.ingredientLines}</li>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
    </div>
    </div>

    </div>
    
        `
    }

  }

  function userAPIDataDinner(data) {

    let cards = "";

    for (var i = 0; i < data.hits.length; i++) {
      document.querySelector("#v-pills-dinner").innerHTML += ` 
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top inverted" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li id= "ingredients" >Ingredients needed:${data.hits[i].recipe.ingredientLines}</li>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
    </div>
    </div>

    </div>
    
        `
    }

  }

  function userAPIDataDesserts(data) {

    let cards = "";

    for (var i = 0; i < data.hits.length; i++) {
      document.querySelector("#v-pills-desserts").innerHTML += ` 
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top inverted" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li id= "ingredients">Ingredients needed:${data.hits[i].recipe.ingredientLines}</li>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
    </div>
    </div>

    </div>
    
        `
    }

  }

  function userAPIDataOthers(data) {

    let cards = "";

    for (var i = 0; i < data.hits.length; i++) {
      document.querySelector("#v-pills-others").innerHTML += ` 
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.hits[i].recipe.image}" class="card-img-top inverted" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5> 
          <p class="card-text">
          <li>Diet-type:${data.hits[i].recipe.dietLabels}</li>
          <li>Calories: ${data.hits[i].recipe.calories}</li>
          <li>Health Labels: ${data.hits[i].recipe.healthLabels}</li>
          <li id= "ingredients">Ingredients needed:${data.hits[i].recipe.ingredientLines}</li>
          <p class="card-text">Sourced from: ${data.hits[i].recipe.source}</small></p>
          <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Go to source</a>
          </div>
      </div>
    </div>
    </div>
    
    </div>
    
        `
    }

  }

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

  function init2() {
    if (localStorage.Firstname) {
      document.getElementById("firstNameP").value = localStorage.FirstName;
    }
    if (localStorage.LastName) {
      document.getElementById("lastNameP").value = localStorage.LastName;
    }
    if (localStorage.Username) {
      document.getElementById("usernameP").value = localStorage.Username;
    }
    if (localStorage.Bio) {
      document.getElementById("bioP").value = localStorage.Bio;
    }
    if (localStorage.Email) {
      document.getElementById("emailP").value = localStorage.Email;
    }
    if (localStorage.Gender) {
      document.getElementById("genderP").value = localStorage.Gender;
    }
    if (localStorage.Password) {
      document.getElementById("passwordP").value = localStorage.Password;
    }
    if (localStorage.TermsCheck) {
      document.getElementById("termsCheckP").value = localStorage.TermsCheck;
    }

  }

  function logIn() {
    if (document.getElementById("LogInEmail").value == localStorage.Email && document.getElementById("logInPassword").value == localStorage.Password) {
      document.querySelector("logIn").innerHTML = ` <a href= "MyProfile.html" class="btn btn-primary">Sign in</a> `
    } else {
      alert("Please enter a valid email or password")
    }

  }

  function onSavePressed() {
    alert("You have signed up successfully.");
    localStorage.FirstName = document.getElementById("firstName").value;
    localStorage.LastName = document.getElementById("lastName").value;
    localStorage.Username = document.getElementById("username").value;

    localStorage.Email = document.getElementById("email").value;
    localStorage.Gender = document.getElementById("gender").value;
    localStorage.Password = document.getElementById("password").value;
    localStorage.TermsCheck = document.getElementById("termsCheck").value;
    localStorage.Bio = document.getElementById("bio").value

  }

  function onSavePressed2() {
    alert("Your settings are saved.");
    localStorage.FirstName = document.getElementById("firstNameP").value;
    localStorage.LastName = document.getElementById("lastNameP").value;
    localStorage.Username = document.getElementById("usernameP").value;
    localStorage.Email = document.getElementById("emailP").value;
    localStorage.Gender = document.getElementById("genderP").value;
    localStorage.Password = document.getElementById("passwordP").value;
    localStorage.TermsCheck = document.getElementById("termsCheckP").value;
    localStorage.Bio = document.getElementById("bioP").value

  }

  //Add the username and profile page verification eg if the username match the local storage then you will have access to the My profile page, if not the thing will bw disabble(like add the html tage disabled inside.)

  //Display the username enters in sign up in the profile page

  function displayProfile() {
    var UsernameP = localStorage.getItem("Username")
    var FirstnameP = localStorage.getItem("FirstName")
    var BioP = localStorage.getItem("Bio")

    document.querySelector("#pUsername").innerHTML = `@${UsernameP} `
    document.querySelector("#firstName").innerHTML = `@${FirstnameP} `
    document.querySelector("#bio").innerHTML = `P.s: <br> ${BioP} `

  }

  function saveRecipes() {
    localStorage.MyRecipes = document.getElementById("MyRecipes").value;
  }

  function savedRecipes() {
    if (localStorage.MyRecipes) {
      document.getElementById("MyRecipes").value = localStorage.MyRecipes;
    }

  }

  function darkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach((result) => {
      result.classList.toggle("invert")
    })
  }


})