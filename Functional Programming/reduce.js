const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

console.log("----- using for loop -----");
var totalAmount1 = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount1 += orders[i].amount;
}
console.log("Final total:" + totalAmount1);

console.log("----- using reduce and callback function -----");
const totalAmount2 = orders.reduce((sum, order) => {
    console.log("total", sum, order);
    return sum + order.amount
}, 0);
console.log("Final total:" + totalAmount2);

console.log("----- using reduce and callback function is separated into variable isTotalAmount -----");
const isTotalAmount = (sum, order) => {
    console.log("total", sum, order);
    return sum + order.amount
};
const totalAmount3 = orders.reduce(isTotalAmount, 0);
console.log("Final total:" + totalAmount3);