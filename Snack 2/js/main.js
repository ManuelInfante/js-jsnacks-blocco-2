var names = ["Patrizia ","Flavio ","Michele ","Gabriele ","Sonia "];

var surnames = ["Colombo","Corleone","Magno","De Sica","Bond"];

var listNames;
var listSurnames;

for (i = 0; i < 5; i++) {
    listNames = Math.floor(Math.random()* names.length);
    listSurnames = Math.floor(Math.random()* surnames.length);
    document.getElementById("list").innerHTML += "<li>" + names[listNames] + surnames[listSurnames] + "</li>";
}