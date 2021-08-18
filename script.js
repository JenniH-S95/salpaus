function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}
function pvmFin(vuosi, kk, pv){
  return pv+"."kk+"."vuosi;
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

let pvm = "2021/08/18";
console.log(pvm.split("/")[0]);
console.log(pvm.split("/")[1]);
console.log(pvm.split("/")[2]);

console.log(pvmFin);
/*
Monen
rivin
kommentti
*/