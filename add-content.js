//document.write("Welcome to MEAN Boot camp")
var name ="blaise mcfarland";
$("#header").prepend(name);

var test = "not blaise";
var newTest = test.replace("blaise","cole");

console.log(newTest);
$('.header').append(newTest);