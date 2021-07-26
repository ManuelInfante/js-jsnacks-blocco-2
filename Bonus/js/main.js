var list1 = ["22", "Ferrari", "59", "JS"];

var list2 = ["28", "488 Pista", "69", "PHP", "Java", "598", "Roger"];

var input;

for (i = 0; i < list2.length; i++) {
    if (list1.length < list2.length) {
        input = prompt("Inserisci un numero o una parola");
        list1.push(input);
    }
}

document.writeln(list1);

document.writeln(list2);

