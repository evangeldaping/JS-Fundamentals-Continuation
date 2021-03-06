const fs = require('fs');
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.replace("\r", "").split("  "))
.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    })
    return customers
}, {})
console.log('output', JSON.stringify(output, null, 2));