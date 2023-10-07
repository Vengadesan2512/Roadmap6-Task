const log=(param)=>console.log(param);
log("working")
////////////////////class movies
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
      this.studio = studio;
        this.rating = rating;
    }
    
    static getPG(movies) {return movies.filter(movie => movie.rating === "PG");}}
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  const moviesArray = [
    new Movie("Leo", "Studio1", "PG"),
    new Movie("sarkar", "Studio2", "PG-13"),
    new Movie("Beast", "Studio3", "R"),
    new Movie("Kathi", "Studio4", "PG"),
  ];
  const pgMovies = Movie.getPG(moviesArray);
  console.log(pgMovies);
//////-----------------------------------------------------------------------------------------------------------////////
class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
    }
  }
  
////--------------------///-------------------------////-----------------------------------////--------------////  

/////class for uber////
class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }}
    //////////////////////////////////////////------//////////////////////------///////////////////////////----//////

class circle{
    constructor(radius){
this.radius=radius;
this.colour=this.colour;
    }
    double(){
        this._radius*2
    }
    get radius(){
        return this._radius;
    }
    getArea(){

    }
}


  