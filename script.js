const quote = document.querySelector(".quote");
const button = document.querySelector(".button");
// console.log(button);

// button.addEventListener("click", () => {

const getQuote = ()  =>{

fetch("http://api.kanye.rest")
.then((res) =>  { 
    return res.json() 
})
.then((data) => { 
   quote.innerHTML = data.quote;
})}
button.addEventListener("click",getQuote)