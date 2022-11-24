
function compare(a, b) {
    if(a==b) {
        console.log(true)
    }
    if(a!=b) {
        console.log(false) 
    }
}
compare(5,5)



const celsius=function (farenheit) {
    if(typeof farenheit=="number") {
      const celsius=(5/9)*(farenheit-32)         
        console.log(celsius)
    }
    else {
        console.log(false)
}
    }

celsius(41)

function calculate(a, b, operation){
    if (typeof a != "number" && typeof b != "number" &&
    typeof operation != "+" && typeof operation !="-" && typeof
   operation !="/" && typeof operation !="*" ){
    return false
}
  else if (operation == "+")
  return a+b
  else if (operation =="-")
  return a-b
  else if (operation =="/")
  return a/b
  else if (operation =="*")
  return a*b

}
 console.log(calculate(5, 6, "*")) 



