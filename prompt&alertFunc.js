let a = prompt("hey what is your age?")
console.log(typeof a)

a = Number.parseInt(a) // converting a string to a number
console.log(typeof a)
if(a>0){
    alert("this is valid age")
}
else if(a<9){
    alert("you are a kid")

}
else{
    alert("invalid ")
}