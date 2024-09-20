let a = null;
let b = 5;
let c = true;
let d = BigInt("567")
let e = "vivek"
// let f = symbol("i am a nice symbole")
let g = undefined

console.log(a,b,c,d,e,g)

console.log(typeof d)
// typeof will use to know about type of a variable

//objects in js is non premitive data typea

const items = {
    "vivek":true,
    "jack":false,
    "ram":55,
    "rohan":undefined
}

console.log(items["vivek"]) // here in this it will take items objects key = vivek and return what is in that

console.log(items)  // it will return all object

const a1 = {
    name:"vivek",
    section:1,
    principale: false
}
 
a1['name'] = "vicky"// you can change value of key but not the object

const dic = {
    start:"start",
    end:"end",
    bt:"bt"
}

// you can access items by two whay

const way1 = dic['start']
const way2 = dic.start

console.log(way1, way2)