// let sum = 0
// let n = prompt("enter value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//     // console.log(i)
//     sum += (i+1)
    
// }
// console.log("sum of first " + n + " natural number is " + sum)

let obj = {
    vivek: 90,
    harry: 45,
    rohan: 78,
    anushka: 80
}

for(let a in obj){
    console.log("marks of " + a +" are " + obj[a])
}