function displayType(pet) {
    var petType = pet.getAttribute("data-pet-type");
    alert(petType + " is the name of the pet of the " + pet.innerHTML + " species!");
}