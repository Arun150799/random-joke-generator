const btnEl = document.getElementById('btn')
let show = document.querySelector('#showJoke');
const apiKey = "fzBak6RFLFRJ8TUSpvoafQ==25NxfzqFI72TEarX";

const option ={
    method:"GET",
    Headers:{
        "X-Api-Key":apiKey,
    },
};
const ApiUrl= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke(){
    const response =await fetch(ApiUrl, option)
    const data =  await response.json()
    // console.log(data);
    show.innerHTML =`${data.joke}😂😂😂...`     
}
btnEl.addEventListener('click',getJoke)
getJoke();
let closeBtn=document.querySelector('#closeBtn');
closeBtn.addEventListener("click",()=>{
    show.innerHTML= " 😌😌😌One More Joke.........";
})
// show.innerHTML =`${data.joke}`     