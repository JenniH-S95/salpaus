document.querySelector('#nappula2').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii!");

  if(document.querySelector('#HTML').checked){document.querySelector('.lootat').children    [0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="HTML" checked>HTML kurssi suoritettu</li>';
  }
  else{
    document.querySelector('.lootat').children[0].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="#HTML" >HTML</li>';
  }
  if(document.querySelector('#CSS').checked){document.querySelector('.lootat').children[1].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CSS" checked>CSS kurssi suoritettu</li>';
  }
  else{
    document.querySelector('.lootat').children[1].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CSS" >CSS</li>';
  }
  if(document.querySelector('#JavaScript').checked){document.querySelector('.lootat').children[2].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="JavaScript" checked>JavaScript kurssi suoritettu</li>';
  }
  else{
    document.querySelector('.lootat').children[2].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="#JavaScript" >JavaScript</li>';
  }
  if(document.querySelector('#CICD').checked){document.querySelector('.lootat').children[3].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CICD" checked>CI/CD kurssi suoritettu</li>';
  }
  else{
    document.querySelector('.lootat').children[3].innerHTML = '<li class="ohjelmat"><input type="checkbox" id="CICD" >CI/CD</li>';
  }

});