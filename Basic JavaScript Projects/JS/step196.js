let pet = {
    species: "Equine ",
    breed: "Halflinger ",
    age: "10 ",
    color: "chesnut ",
    sex: "gelding ",
    description: function() {
        return "For my next pet, it is reasonable to consider the " + this.species + this.breed + this.sex + " which would likely be " + this.color + "-colored.";
    }
};
document.getElementById("next_pet_object").innerHTML = pet.description();