function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}
function pvmFin(vuosi, kk, pv){
if (kk==03 || kk==04|| kk==05){
return "kevät: "+pv+"."+kk+"."+vuosi;
}
else if(kk==06|| kk==07|| kk==08){
return "kesä: "+pv+"."+kk+"."+vuosi;
}
else if(kk==09|| kk==10|| kk==11){
return "syksy: "+pv+"."+kk+"."+vuosi;
}
else{
return "talvi: "+pv+"."+kk+"."+vuosi;
}
}

console.log("Täällä ollaan!");

let ika = 26; // numerot kirjoitetaan ilman lainausmerkkejä
ika = ika + 1;//integer (int)

let ikakirjaimina = "26";//string (str)
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log("Sinun ikäsi on: " + ika);

let juuvaiei = true; //boolean

console.log("boolean: " + juuvaiei);

let nimi = "Jenni Hietanen";

console.log("Kirjoita isolla: " + nimi.toUpperCase());

console.log("Splittausharjoitus: " + nimi.split(" ")[0]);

// While ja for loop:

for(let i=0; i<=10; i++){
  console.log("Loopin iteraatioluku on: " + i);
}

if(ika > 18 || nimi === "Jenni Hietanen"){
  console.log("Onnea, olet täysi-ikäinen ja/tai olet Jenni!");
}
else if (ika === 18 && nimi == "Keijo"){
  console.log("Onnea Keijo, olet juuri ja juuri täysi-ikäinen!");
}
else{
  console.error("Kasva vielä vähän...");
}

console.log(laskutehtava(111111, 111111));

let pvm="2021/08/18";

for(let i=1; i<=15; i++){
console.log(i+ " " +pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));
}


/*
Monen
rivin
kommentti
*/


//console.log(document.querySelector('#Kentta').type);
//console.log(document.querySelector('.lisaaNappi').value);
document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
//  console.log(document.querySelector('#Kentta').value);
document.querySelector('.ilmoitus').innerHTML = "<b>MiuMauMou:</b>"+ document.querySelector('#Kentta').value;

setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
});

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii!");

  if(document.querySelector('#teht_a').checked){document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>Tehtävä A on tehty!</li>';
  }
  else{
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" >Tehtävä A</li>';
  }

  if(document.querySelector('#teht_b').checked){document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>Tehtävä B on tehty!</li>';
 ;
  }
  else{
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" >Tehtävä B</li>';
  }
});