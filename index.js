//added event listeners
const close=document.querySelector(".close"); 
const open=document.querySelector(".ham"); 
const menu=document.querySelector(".menu");

close.addEventListener("click",()=>{
    menu.style.visibility="hidden";
})

open.addEventListener("click",()=>{
    menu.style.visibility="visible";
}) 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '808339c8a2mshb4c5c628794c95dp1aebc8jsnadfa4bf4a9bf',
		'X-RapidAPI-Host': 'google-books.p.rapidapi.com'
	}
};

fetch('https://google-books.p.rapidapi.com/volumes?key=undefined', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));