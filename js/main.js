var first_name = "Alfonso";
var last_name = "Wilches";
var name = String();
var full_name = first_name + " " + last_name;

//console.log(full_name);

name = name.concat(first_name);

//console.log(name);

name = name.concat(" ", last_name);

//console.log(name);

var comilla = "\'";
//console.log(comilla);
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//console.log(lorem.length);

//console.log(lorem);

lorem = lorem.replace("e", "a").replace("i", "a").replace("o", "a").replace("u", "a");

//console.log(lorem);

//console.log(lorem);

String.jiberish = function (str){
  if(!str){
    str = this;
  }
  var i = 0;
  for (i = 0; i < str.length; i++) {
    if(str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      str = str.replace(str[i], "a");
    }
  }
  return str;
};

String.prototype.jiberish = String.jiberish;

var amiguita = String.jiberish("Tengo una amiguita que me hace muchas cosquillitas");
console.log(amiguita);
cucaracha = "La cucaracha la cucaracha ya no puede caminar".jiberish();
console.log(cucaracha);

var ar1 = [1,2,3,4,5,6];
var ar2 = [7,8,9];

var ar3 = ar1.concat(ar2);
console.log(ar3);

ar3.forEach(function(element, index, array){
  console.log("index " + index + " element " + element);
});
