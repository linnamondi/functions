function stringLengths(string){
    return string.map(element => element.length)

}
   
let string=["mango","orange"]
console.log(stringLengths(string))


function filter(even){
    even=even.filter(num=> num%2==0)
    return even
}
let even=[2,4,5,7,9]
console.log(filter(even));

function scoreProperties(studentnames){
    studentnames=studentnames.filter(studentnames=> studentnames.score>75)
    studentnames=studentnames.map(studentnames=>studentnames)
    
    return studentnames

}
let studentnames=[{ studentnames:"catherine", score:67} ,{studentnames:"peter",score:80} , {studentnames:"molly",score :98} ,{studentnames:"linn",score :75}]
console.log(scoreProperties(studentnames));


function square(y){
    y=y.map(y=> y*y)
    return y

}
let y =[4,8,9,7]
console.log(square(y));


function getStrings(books){
    books=books.filter(books=> typeof books ==('string'))
    books=books.map(books=>books)


    return books
}
let books=["irine","cousin",5,7,9]
console.log(getStrings(books));


