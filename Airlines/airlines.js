//I start with the array of flights
let flights = [
    { ID: 00, Departure: 'Bilbao', Destiny: 'Barcelona', Price: 1600, Scale: 'yes' },
    { ID: 01, Departure: 'New York', Destiny: 'Barcelona', Price: 700, Scale: 'no' },
    { ID: 02, Departure: 'Los Angeles', Destiny: 'Madrid', Price: 1100, Scale: 'yes' },
    { ID: 03, Departure: 'Paris', Destiny: 'Barcelona', Price: 210, Scale: 'no' },
    { ID: 04, Departure: 'Roma', Destiny: 'Barcelona', Price: 150, Scale: 'no' },
    { ID: 05, Departure: 'London', Destiny: 'Madrid', Price: 200, Scale: 'no' },
    { ID: 06, Departure: 'Madrid', Destiny: 'Barcelona', Price: 90, Scale: 'no' },
    { ID: 07, Departure: 'Tokyo', Destiny: 'Madrid', Price: 1500, Scale: 'yes' },
    { ID: 08, Departure: 'Shangai', Destiny: 'Barcelona', Price: 800, Scale: 'yes' },
    { ID: 09, Departure: 'Sydney', Destiny: 'Barcelona', Price: 150, Scale: 'yes' },
    { ID: 10, Departure: 'Tel-Aviv', Destiny: 'Madrid', Price: 150, Scale: 'no' } ];
//Variables
let media = 0;
let numberSca = 0;
let arrLastF = [];
//Functions
let returnMedia = () =>{
    for(let i = 0; i<flights.length;i++){
        media = media + flights[i].Price;
    }
    return media/flights.length;
    };
let returnNumScale = () =>{
    for(let i = 0; i<flights.length;i++){
        if(flights[i].Scale){
            numberSca++; 
        }
    }
    return numberSca;
}    
let returnLastFlights = () =>{
    for(let i = 0; i<5; i++){
        arrLastF.push(flights[flights.length-i-1].Departure);
    }
    return arrLastF;
}
//The greetings
let userName = window.prompt('Welcome to Isdi Airlines \n Introduce your name to see the fligts');

console.log(`We are happy to see you agan mr: ${userName} \n Fligh Schedules`);

console.table(flights);
console.log(`This is the media cost of a flight ticket ${returnMedia()}`);
console.log(`This is the number of fligths with an Scale ${returnNumScale()}`);
console.log(`This are the destinies of the last 5 flights ${returnLastFlights()}.`);
console.log(`\nWe hope you come back soon :) `);

