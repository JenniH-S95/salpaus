document.querySelector('.nappi2').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii!");

  if(document.querySelector("#HTML").checked){document.querySelector(".lootat").children[0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="HTML" checked>HTML kurssi suoritettu!</li>'}

  else{
    document.querySelector(".lootat").children[0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="HTML">HTML</li>'
  }
})