

// Zadaca 6_1 Prv Nacin

/*
var i = 0
var zbir = 0
var array = [1,2,3,4,5,6]


for (i=0; i<array.length;i++){

    zbir = zbir + array[i]
    
}


alert("Sumata na prvite n prirodni broevi e " +zbir)
*/



//Zadaca 6_1  2 Nacin

var n = prompt("Vnesi nekoj pozitiven broj")
var i = 0
var zbir = 0


for (i=0;i<=n;i++){
    zbir = zbir + i
   
}
alert ("Sumata na prirodnite broevi e " +zbir)





// Zadaca 6_2 so for ciklus
/*
var zbir = 0
var i = 0
var array = [1,2,3,4,5]
var average = 0


for (i=0; i<array.length;i++){
    zbir = zbir + array[i]
    }
average = zbir /5

alert("Zbirot iznesuva " +zbir )

alert("Aritmetickata sredina " +average)
*/


// Zadaca 6_2 so while ciklus
/*
var zbir = 0
var i = 0
var array = [1, 2, 3, 4, 5]

while (i < array.length) {
    zbir = zbir + array[i]
    i++
}
average = zbir / 5

alert("Zbirot iznesuva " + zbir)

alert("Aritmetickata sredina " + average)
*/


//Zadaca 6_3 
/*
//Definiram varijabli koj sto ke ja cuvaat taa vrednost 
var x = prompt("Vnesete ja prvata vrednost")
var y = prompt("Vnesete ja vtorata vrednost")

//Kreiram funckija koja sto ke gi najde broevite pomegu
function getAllNumbersBetween(x, y) {
    
    //Kreiram varijabla kade sto ke se skladiraat broevite pomegu dvete vrednosti
    var numbers = [];
    
    //Pomosen indeks i koj go izednacuvam so x(prvata vrednost), da bide pomala od 2 vrednost, i zgolemuvam za 1 i se stavaat vo nizata
    for (i = x; i<y; i++) {
        numbers.push(i);
    }
    //Se zapisuva ovdeka rezultatot 
    return numbers;
}

//Ja povikuvame funkcijata i toj broj posle se zapisuva vo varijablata numbers i so alert se prikazuva
var numbers = getAllNumbersBetween(x, y)
alert("Nizata od broevi pomegu vnesenite vrednost se: " +numbers)

*/


