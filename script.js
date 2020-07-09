// const title = document.querySelector('.title');
const field = document.querySelector('.field');
// const rating = document.querySelector('.rating');
// const poster = document.querySelector('.poster');
let submit = document.querySelector('.enter');
let movie =document.querySelector('.search');
let output = document.querySelector('.output');

submit.addEventListener('click',function(e){
    e.preventDefault();
    console.log(movie.value);
    output.innerHTML = movie.value;
    getData(e);
});

let getData = () =>{
    let info = movie.value;
    fetch(`http://www.omdbapi.com/?s=${info}&apikey=834c23fb`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response.Search);
        let movieArr = response.Search;
        for(let i = 0; i < movieArr.length; i++){
            const title = document.createElement('h1');
            title.classList.add('title');
            field.appendChild(title);
            const poster = document.createElement('img');
            poster.classList.add('poster');
            field.appendChild(poster);
            const id = document.createElement('p');
            id.classList.add('imdbID');
            field.appendChild(id);
            title.innerHTML = movieArr[i].Title;
            poster.setAttribute('src',movieArr[i].Poster);
            id.innerHTML =movieArr[i].id;
        }
        // console.log(response.Title);
        // console.log(response.Writer);
        // title.innerHTML = response.Title;
        // poster.setAttribute('src',response.Poster)
        // rating.innerHTML = response.Rated;

    })
    .catch(error => {
        // console.log(err.Error);
        // error.innerHTML = err.Error;
    })
}
getData();
