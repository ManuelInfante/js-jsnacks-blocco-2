var number = parseInt(prompt("Scrivi un numero, se è dispari ti apparirà il successivo pari"));

if ((number % 2) == 0) {
    document.writeln(number);
} else {
    document.writeln(number + 1);
}