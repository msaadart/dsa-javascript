let slr = 80000;
let perc = 15;
let count = 0;
let outerIncrease = 0;

console.log("starting salary :", slr)
while (slr < 150000) {
    let increase = (slr * perc) / 100;
    slr = slr + increase;
    outerIncrease = increase;
    count++;

    console.log("increase :", Math.round(increase));
    console.log("after increased :", Math.round(slr));
}
console.log("how many times increased (15%) salary :", count);
console.log("total salary :", Math.round(slr * 12 * count), "in", count * 12, "months");
console.log("total increament :", Math.round(outerIncrease * 12 * count));