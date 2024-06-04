
//Zadaca 10. I nacin

//Zosto koga varijablata var index = 0 koga e definirana nadvor od funkcijata gi dava denovite kako sto treba po red Pon,Vtornik...
//No koga e vo funkcijata samo Pon go dava. Treba isto od 0 pozicija da trgne i da gi vrti site?

/*
var myelement = document.getElementById("one")
var index = 0
myelement.onclick = function () {


  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  document.getElementById("one").innerHTML = days[index++ % days.length]




}
*/



//Zadaca 10. II nacin

//Vo vtoriov slucaj ako var index e definiran nadvor od funkcijata gi dava denovite isto kako sto treba
//No ako go stavam var index vnatre vo funkcijata dava ispomesano zosto?

/*


var index = Math.floor(Math.random()*7) 
var myelement =document.getElementById("one")

myelement.onclick = function(){
  
    var days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
      
    document.getElementById("one").innerHTML = days[index++ % days.length] 
}



*/

//Napravi koga ke se loadira stranata na pocetokot//uspesno raboti vaka resenieto
//Uspesno napraveno i plus so interval

function activate (){


var myelement = document.getElementById("one")
var index = 0
myelement.onclick = function () {


  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  
  setInterval(function(){myelement.innerHTML = days[index++ % days.length]},5000)

}

}

window.onload = function (){

  activate()
}







