var numeri = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var SommaNumeriDispari= 0;

for (i = 1; i < numeri.length; i+=2) {
    SommaNumeriDispari += numeri[i];
}

console.log(SommaNumeriDispari);
document.getElementById("list").innerHTML = SommaNumeriDispari;