let searchButton = document.querySelector("#search")

//Add an event listener that runs the function sendApiRequest when clicked.

searchButton.addEventListener("click", () =>{
    console.log("button pressed")
    sendApiRequest()
})

//An asynchronous function to fetch data from api.
async function sendApiRequest(){
    let APP_ID ="405a394c"
    let API_KEY ="3104f9ddfb4ee96509c47474e498a8e7"
    let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    userAPIData(data)
}

//function that does something with the data received from the API. Name customised to whatever you are doing with it
function userAPIData(data){
    document.querySelector("#content").innerHTML = `
    <div class="card col-3" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `


}
//Add in the calories, source credit, create filters,