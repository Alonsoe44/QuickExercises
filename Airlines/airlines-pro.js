let flights = [
    { ID: 0, Departure: 'Bilbao', Destiny: 'Barcelona', Price: 1600, Scale: false },
    { ID: 1, Departure: 'New York', Destiny: 'Barcelona', Price: 700, Scale: false },
    { ID: 2, Departure: 'Los Angeles', Destiny: 'MadrID', Price: 1100, Scale: true },
    { ID: 3, Departure: 'Paris', Destiny: 'Barcelona', Price: 210, Scale: false },
    { ID: 4, Departure: 'Roma', Destiny: 'Barcelona', Price: 150, Scale: false },
    { ID: 5, Departure: 'London', Destiny: 'MadrID', Price: 200, Scale: false },
    { ID: 6, Departure: 'MadrID', Destiny: 'Barcelona', Price: 90, Scale: false },
    { ID: 7, Departure: 'Tokyo', Destiny: 'MadrID', Price: 1500, Scale: true },
    { ID: 8, Departure: 'Shangai', Destiny: 'Barcelona', Price: 800, Scale: true },
    { ID: 9, Departure: 'Sydney', Destiny: 'Barcelona', Price: 150, Scale: true },
    { ID: 10, Departure: 'Tel-Aviv', Destiny: 'MadrID', Price: 150, Scale: false } ];

//Variables

let media = 0;
let numberSca = 0;
let arrLastF = [];
//Variables for menu navigation
let userType = '';
let actionAdmin = '';
let actionUser = '';
let filterType = '';
//More variables
let newFlight = {};

//Functions that return key values to print

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
//More functions to the Airlines Pro
let addArrFlights = () =>{
    newFlight.ID = parseFloat(window.prompt('What\'s the ID?'));
    newFlight.Departure = window.prompt('What\'s the departure?');
    newFlight.Destiny = window.prompt('What\'s the destiny?');
    newFlight.Price = parseFloat(window.prompt('What\'s the Price?'));
    newFlight.Scale = window.prompt('Does this flight needs to scale?(Yes or no)') === 'yes'? true : false ;
    flights.push(newFlight);
}

//The greetings
let userName = window.prompt('Welcome to Isdi Airlines Pro \n Introduce your name to see the fligts');

console.log(`We are happy to see you agan mr: ${userName} \n Fligh Schedules`);
console.table(flights);
console.log(`This is the media cost of a flight ticket ${returnMedia()}`);
console.log(`This is the number of fligths with an Scale ${returnNumScale()}`);
console.log(`This are the destinies of the last 5 flights ${returnLastFlights()}.`);
console.log(`We hope you come back soon :) `);

//Airlines pro

userType = window.prompt(`Please type the number of your type of user and press enter \n 
                                    - Normal user\n 
                                    - Admin\n 
                                    - Exit`);

//Here we use the swicth to find the user type
switch (userType){
    //If it's an admin
    case 'admin':
        actionAdmin = window.prompt(`Now please type the action you are going to do:\n 
                                    - Add flights\n 
                                    - Delete flights\n 
                                    - Exit`);
        //Pick your action
        switch(actionAdmin){
            case 'Add flights':
                    addArrFlights();
                    console.table(flights);
                break;
            case 'Delete flights':
                break;
            case 'Exit':
                break;
            default:
                console.log(`Please introduce a valid action`);
        }
        break;
    //If it's a user
    case 'Normal user':
        actionUser = window.prompt(`Now please type the action you are going to do:\n 
                                    - Filter by price\n 
                                    - Exit`);
        //Pick your action
        switch (actionUser){
            case 'Filter by price':
                filterType = window.prompt(`Now please type the filter you want to apply:\n 
                                            - High to low
                                            - Low to high
                                            - Exit`);
                switch (filterType) {
                    case 'High to low':
                        break;
                    case 'Low to high':
                        break;
                    case 'Exit':
                        break;
                    default:
                        console.log('Please introduce a valid filter');
                }
                break;
            case 'Exit':
                break;
            default:
                console.log('Please introduce a valid action');
        }
        break;
    default:

}

//NOTES
//-find the 3 decimals round up

