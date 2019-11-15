function average(arr){
    var a = 0;
    var l = arr.length;
for(var i =0;i<l;i++){
    a = a + arr[i];
}
var avg = a/l;
return Math.round(avg)

}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));