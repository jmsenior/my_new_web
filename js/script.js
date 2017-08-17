function inicio(){


  document.querySelector('#block-menu').innerHTML = "<div id='home'>\
    <ul class='menu-list'>\
      <li><a class='menu-links' href='#'>Home</a></li>\
      <li><a onclick='portfolio()' class='menu-links' href='#'>Portfolio</a></li>\
      <li><a class='menu-links' href='#'>Playground</a></li>\
      <li><a class='menu-links' href='#'>Bio</a></li>\
      <li><a class='menu-links' href='#'>Contact</a></li>\
    </ul>\
  </div>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name_home'>Welcome</h1>";

};
inicio();


function portfolio(){

    document.querySelector('#block-menu').innerHTML = "<div id='portfolio'>\
    <ul class='menu-list'>\
    <li><a class='menu-links' href='#'  onclick='productos()'>Productos</a></li>\
    <li><a class='menu-links' href='#'>Logotipos</a></li>\
    <li><a class='menu-links' href='#'>Webs</a></li>\
    <li><a class='menu-links' href='#'>Colaboraciones</a></li>\
    <li><a class='menu-links' href='#'>Carteles</a></li>\
    <li><a class='menu-links' href='#'>Videos</a></li>\
    <li><a class='menu-links' href='#'>Realidad Virtual</a></li>\
    <li><a class='volver' href='#' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a></li>\
    </div>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Portfolio</h1>";
  };


// popup

function productos(){

  var imagenes = [1,2,3,4,5,6,7,8,9];
  var descripciones = ["descripcion1","descripcion2","descripcion3","descripcion4","descripcion5","descripcion6","descripcion7","descripcion8","descripcion9",]

  document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Productos</h1>";

  document.querySelector('.content-block').innerHTML = "<div id='productos'>";
  for(var i = 0; i <= 8; i++){
    document.querySelector('#productos').innerHTML += "<div class='item'>\
  <img onclick='ampliarProductos()' src='img/productos/" + imagenes[i] + "min.png'/>\
  <div id='back-img' class='hide'>\
  <p id='texto'> <a class='cerrar btn' onclick='cerrar()'>Cerrar</a></p>\
  <img id='img-grande' src='img/productos/" + imagenes[i] + ".png' />\
  </div>\
  </div>";
  }

  //document.querySelector('#productos').innerHTML += "<a href='#' class='' onclick='portfolio()'>  Volver</a>";
  document.querySelector('.content-block').innerHTML += "</div>";



}

function ampliarProductos(){
 document.querySelector('#back-img').classList.remove('hide');
 document.querySelector('#back-img').classList.add('ampliar-foto');
  document.querySelector('#texto').classList.add('pop-text');
  document.querySelector('#img-grande').classList.add('pop-image');
}



function cerrar(){
  var objetoCerrar = document.querySelector('#back-img');

if ( objetoCerrar.classList.contains('hide')){
  objetoCerrar.classList.remove('hide');
  objetoCerrar.classList.add('ampliar-foto');
}else if ( objetoCerrar.classList.contains('ampliar-foto')){

  objetoCerrar.classList.remove('ampliar-foto');
  objetoCerrar.classList.add('hide');
}


  //document.querySelector("#back-img").remove();
//  document.querySelector("#back-img").style.display = 'none';
}
