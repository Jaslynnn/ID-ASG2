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
    let response = await fetch (``);
    console.log(response)
}

//function that does something with the data received from the API. Name customised to whatever you are doing with it
function userAPIData(data){

}