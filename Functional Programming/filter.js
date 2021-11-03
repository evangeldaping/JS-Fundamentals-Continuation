const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' },
]

console.log("----- using for loop -----");
const dogs1 = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs1.push(animals[i]);
    }
}
console.log(dogs1);

console.log("----- using filter -----");
const dogs2 = animals.filter(function(animal) {
    return animal.species === 'dog';
})
console.log(dogs2);

console.log("----- using filter and callback function is separated into variable -----"); 
const isDog = function(animal) {
    return animal.species === 'dog';
}
const dogs3 = animals.filter(isDog);
console.log(dogs3);