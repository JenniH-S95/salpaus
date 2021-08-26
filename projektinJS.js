document.querySelector('.nappi2').addEventListener('click', e =>{
  e.preventDefault();
  /*console.log("nappi toimii!");*/

  if(document.querySelector("#HTML").checked){
    document.querySelector(".lootat").children[0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="HTML" checked>HTML kurssi suoritettu!</li>'}

  else{
    document.querySelector(".lootat").children[0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="HTML">HTML</li>'
  }

  if(document.querySelector("#CSS").checked){
    document.querySelector(".lootat").children[1].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CSS" checked>CSS kurssi suoritettu!</li>'}

  else{
    document.querySelector(".lootat").children[1].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CSS">CSS</li>'
  }
  if(document.querySelector("#JavaScript").checked){
    document.querySelector(".lootat").children[2].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="JavaScript" checked>JavaScript kurssi suoritettu!</li>'}

  else{
    document.querySelector(".lootat").children[2].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="JavaScript">JavaScript</li>'
  }

  if(document.querySelector("#CICD").checked){
    document.querySelector(".lootat").children[3].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CICD" checked>CI/CD kurssi suoritettu!</li>'}

  else{
    document.querySelector(".lootat").children[3].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CICD">CI/CD</li>'
  }
});

document.querySelector(".nappula1").addEventListener('click', e =>{
  e.preventDefault();

  /*document.querySelector('.tietolaatikko').innerHTML = document.querySelector('#nimi').value+": "+document.querySelector('#tieto').value;*/

  if(document.querySelector('#nimi').value =="" || document.querySelector('#tieto').value ==""){
    document.querySelector(".varoitus").innerHTML = "Täytä kaikki kentät!";
    setTimeout(() => document.querySelector('.varoitus').innerHTML='', 3000);
  }
  else(document.querySelector('.tietolaatikko').innerHTML = document.querySelector('#nimi').value+": "+document.querySelector('#tieto').value);
  setTimeout(() => document.querySelector('#Nimi').value='', 0);
  setTimeout(() => document.querySelector('#Tieto').value='', 0);
});