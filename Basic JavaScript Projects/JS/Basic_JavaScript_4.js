function my_Dictionary() {
    var Animal = {
        Name:"Lionel",
        Species:"Dog",
        Color:"Brown",
        Breed:"Pekingese X",
        Age: 4,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

my_Dictionary();