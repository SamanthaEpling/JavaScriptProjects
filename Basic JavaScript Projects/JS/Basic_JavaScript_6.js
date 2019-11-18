function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18 ) ? "Try again when you're older!":"Congrats, now do your bit and vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Species, Breed, Sex, Age) {
    this.Pet_Species = Species;
    this.Pet_Breed = Breed;
    this.Pet_Sex = Sex;
    this.Pet_Age = Age;
}

var Lionel = new Pet("Canine", "Pekingese X", "Neutered Male", 4);
var Romani = new Pet("Equine", "Arabian", "Gelding", 21);
var Mister = new Pet("Feline", "Domestic Longhair", "Neutered Male", 14);

function my_pet_function() {
    document.getElementById("New_and_This").innerHTML = "Romani is a grey colored " + Romani.Pet_Breed +" " + Romani.Pet_Sex + " that is about " + Romani.Pet_Age + " years of age.";
}

function Void_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18 ) ? "Try again when you're older!":"Congrats, now do your bit and vote!"; //It must just choose the last option listed
    document.getElementById("Void").innerHTML = Can_vote;
}

function nested_horsepairs_Function() {
    document.getElementById("Nested_Function").innerHTML = More_Horses();
        function More_Horses() {
            var Beginning_point= 1;
            function Plus_pair() {Beginning_point += 2;}
            Plus_pair();
            return Beginning_point;
            }
        
}