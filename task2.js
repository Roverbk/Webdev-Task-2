 const API_KEY = 'api_key=d8f0b6c00f7c1cf36af565272c76b3c7';
 const BASE_URL ='https://api.themoviedb.org/3/';
 const API_URL = BASE_URL+'discover/movie?sort_by=popularity.desc&'+API_KEY;
 const IMG_URL='https://image.tmdb.org/t/p/w500';
 const searchURL= BASE_URL +'search/movie?'+API_KEY;
// const searchInput=document.querySelector("[data-search]")

//  searchInput.addEventListener("input", (e) =>{
//     const value =e.target.value
//     con
//  })

const main=document.getElementById('main');
 const form=document.getElementById('form');
 const search=document.getElementById('search');

getMovies(API_URL);
  
 function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
         showMovies(data.results);
    })
 }



function showMovies(data){
     main.innerHTML ='';

     data.forEach(movie => {
        const { poster_path}= movie ;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
           <img class="object-fill p-[8px] w-[300px] h-[300px]" src="${IMG_URL+poster_path}" ">                       
         
            `
            
        main.appendChild(movieEl);
        
     })
    }

     form.addEventListener('submit', (e) => {
       e.preventDefault();
       const searchTerm =search.value;

    if(searchTerm){
     getMovies(searchURL+'&query=' + searchTerm)}
       else{
          getMovies(API_URL);
       }
     
     })