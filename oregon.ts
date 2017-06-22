(function(){

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;
        

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;
    
    }

    //interface describing what the passenger array should look like
    interface IPassengerArray {
        [index:number]:Traveler
    }

    // food(wagon)
    // Return the total amount of food among all occupants of the wagon.

    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: IPassengerArray;

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    function getRandomIntInclusive(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   };

   


    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food;  //interface is the contract and class will honor it. no need to put definition there but can to be explicit
        name;
        isHealthy = true; //setting as true to begin with

        //CB Notes: do not return something in a constructor
       constructor(food: number, name: string, isHealthy: boolean) {
           this.food = food // CB Note: can put this getRandomIntInclusive(1,0); --not best solution
           this.name = name
           this.isHealthy = isHealthy

       }
       hunt(){
         let success =  ((getRandomIntInclusive(0, 1)) * 100);  //is this ok since i have the function above globally?
         this.food = success + this.food;
         return this.food + success;  
       };

       // ----NOTES for Cory -----//
       //if they hunted and the food is greater than 20
       //lets make sure they are healthy
       // if this.food > 20
        //this healthy true

       // let randomNumber = get RandomIntInclusive (0,1)
     //  if(randommNumber % 2 ++ )){
       //    this.food =+ 100;

       


       eat(){
        if (this.food >=20){
            this.food = this.food -20;
        }
        else {
        this.isHealthy = false;
    }
    return this.isHealthy;
       };
    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
       capacity;
       passengerArray: Traveler []; //CB Notes -- specify that you want the array to have travelers in it

       
    //CB Notes -- if you are going to create one of these this is what you need
    constructor(capacity: number, passengerArray = []) {
        this.capacity = capacity;
        this.passengerArray = [];
    }

    addPassenger(traveler){
        if (this.passengerArray.length < this.capacity) {
           this.passengerArray.push(traveler)
            return "added"
        }
        else {
            return "sorry"
        }

    };



    isQuarantined(){
        for (var i = 0; i < this.passengerArray.length; i++) {
        if (this.passengerArray [i].isHealthy) {
          return true;
        }
      }
      return false;
        };
    
        
    getFood(){
         let total = 0;
         for (var i = 0; i < this.passengerArray.length; i++) {
       total += this.passengerArray[i].food
      }
      return total;
    }
    
    }

// Play the game
// Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    // CB Question: Can I use get random in incl here for food?
   let traveler1 = new Traveler(getRandomIntInclusive(1,100),"peter", true);  
   let traveler2 = new Traveler(getRandomIntInclusive(1,100),"sally", true);
    let traveler3 = new Traveler(getRandomIntInclusive(1,100),"enrique", true);
    let traveler4 = new Traveler(getRandomIntInclusive(1,100),"billybob", true);
    let traveler5 = new Traveler(getRandomIntInclusive(1,100),"yoda", true);

// Create wagon with an empty passenger list and a capacity of 4.
    let newwagon = new Wagon(4,[]);
    // console.log(wagon);
    // console.log(wagon.addPassenger(traveler1));
    // console.log(wagon.addPassenger(traveler2));
    // console.log(wagon.addPassenger(traveler3));
    // console.log(wagon.addPassenger(traveler4));
    // console.log(wagon.addPassenger(traveler5));


    //Make 3 of 5 the travelers eat by calling their eat methods
    // console.log(traveler1.eat());
    // console.log(traveler1.food);
    console.log(traveler1.eat());
   console.log(traveler2.eat());
  console.log(traveler3.eat());

    //Make the remaining 2 travelers hunt
  console.log(traveler4.hunt());
  console.log(traveler5.hunt());
    
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method.
    let newtravelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
  // console.log(travelerArray);
   // console.log(newwagon.addPassenger(newtravelerArray));
    
   //newwagon.addPassenger(traveler1);
   // newwagon.addPassenger(traveler2);
    // newwagon.addPassenger(traveler3);
    // console.log(newwagon.addPassenger(traveler4));
    //   console.log(newwagon.addPassenger(traveler5));
     
        for (var i = 0; i < newtravelerArray.length; i++) {
         let okBoard = ((getRandomIntInclusive(0, 1)) * 100);
        if (okBoard != 0 ) {
            newwagon.addPassenger(Traveler); //CB Note: is this correct? why is it not turning yellow?
            console.log("you are in");
        }
        else{
            console.log("no wagon for you!");
        }
        
    }
    

    //Run the isQuarantined method for the wagon
    console.log(newwagon.isQuarantined());



    //Run the getFood method for the wagon
    console.log(newwagon.getFood());


    //the return values of all the methods should be displayed in the console using console.log()
    //the console.log statements should not live inside any methods on the objects 
    

})();

