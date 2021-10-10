//I start with the array of flights
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

//Variables
let media = 0;
let numberSca = 0;
let arrLastF = [];
//Functions
let returnMedia = () =>{
    for(let i = 0; i<flights.length;i++){
        media = media + flights[i].cost;
    }
    return media/flights.length;
    };
let returnNumScale = () =>{
    for(let i = 0; i<flights.length;i++){
        if(flights[i].scale){
            numberSca++; 
        };
    }
    return numberSca;
}    
let returnLastFlights = () =>{
    for(let i = 0; i<5; i++){
        arrLastF.push(flights[flights.length-i-1].to);
    };
    return arrLastF;
}
//The greetings
let userName = window.prompt('Welcome to Isdi Airlines \n Introduce your name to see the fligts');

console.log(`We are happy to see you agan mr: ${userName} \n Fligh Schedules`);

console.table(flights);
console.log(`This is the media cost of a flight ticket ${returnMedia()}`);
console.log(`This is the number of fligths with an scale ${returnNumScale()}`);
console.log(`This are the destinies of the last 5 flights ${returnLastFlights()}.`);
console.log(`\nWe hope you come back soon :) `);

