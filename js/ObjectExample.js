const movie={
    actor:'Kavin',
    music:'ARR',
    director:'Lokesh',
    producer:'Anbu'
};

console.log(Object.keys(movie));
console.log(Object.values(movie));

movie.actress='abc';

//delete the property in movie object
delete movie.producer;

//checking a property in the object
console.log(movie.hasOwnProperty("producer")); // it return true or false

//for in loop
for(let job in movie){
    console.log(`${job}, it's ${movie[job]}`);
}

//destructuring the objects

//method 1
const {music:myFavMusicDirector,director:myFavD}=movie;
console.log(myFavMusicDirector,myFavD);

//method 2
const {actor,music,director,producer,actress}=movie;
console.log(music);

//destructuring music property
function sings({music}){
    return music;
}
console.log(sings(movie));

