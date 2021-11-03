const args = process.argv.slice(2);

var DiceAmount = args[0];
var DiceThrows = args[1];
var DiceSides = args[2];
var CountingArr = [];

for(var o = 0; o < DiceSides; o++) {
    CountingArr.push(0);
}
for(var i = 0; i < DiceThrows; i++) {
    for(var l = 0; l < DiceAmount; l++) {
        var rolled = Math.floor(Math.random() * DiceSides);
        for(var p = 0; p < DiceSides; p++) {
            rolled == p ? CountingArr[rolled] += 1 : 0;
        }
    }
}

console.log("You have hit the following numbers these amount of times:")
for(var k in CountingArr) {
    var number = parseInt(k);
    console.log(`${number+1}: ${CountingArr[k]}`);
}