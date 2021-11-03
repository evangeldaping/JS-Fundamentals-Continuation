const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' },
]

console.log("----- using for loop -----");
const names1 = [];
for (var i = 0; i < animals.length; i++) {
    names1.push(animals[i].name);
}
console.log(names1);

console.log("----- using map -----");
const names2 = animals.map(function(animal) {
    return animal.name;
})
console.log(names2);

console.log("----- using map and arrow function -----");
const names3 = animals.map((animal) => animal.name)
console.log(names3);

console.log("----- using map and arrow function is separated into variable -----");
const isName = (animal) => animal.name;
const names4 = animals.map(isName)
console.log(names4);