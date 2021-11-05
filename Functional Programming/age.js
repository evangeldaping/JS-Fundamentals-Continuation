const obj = [
    {
        name: "aji",
        age: '22'
    },
    {
        name: "joshua",
        age: '21'
    },
    {
        name: "evangel",
        age: '20'
    },
]

const reducerFun = (obj) => {
    // Using reduce
    return obj.reduce((acc, curr, i) => {
        // Using if
        // if(curr.age < 22) {
        //     // acc.push(curr)
        //     return [...acc, curr]
        // }
        // return acc;

        // Using ternary
        return curr.age < 22 ? [...acc, curr] : acc;
        // return [...acc, curr]
    }, [])

    // Using filter
    // return obj.filter((el) => el.age < 22);
}

console.log(reducerFun(obj));

// map - for data transformation
// filter - filtering of data 
// reduce - 