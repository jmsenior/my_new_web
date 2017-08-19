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
    <li><a class='menu-links' href='#' onclick='logotipos()'>Logotipos</a></li>\
    <li><a class='menu-links' href='#' onclick='webs()'>Webs</a></li>\
    <li><a class='menu-links' href='#'>Colaboraciones</a></li>\
    <li><a class='menu-links' href='#'>Carteles</a></li>\
    <li><a class='menu-links' href='#'>Videos</a></li>\
    <li><a class='menu-links' href='#'>Realidad Virtual</a></li>\
    <li><a class='volver' href='#' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a></li>\
    </div>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Portfolio</h1>";
  };


  // productos

  function productos(){

    var imagenes = [1,2,3,4,5,6,7,8,9];
    var descripciones = ["descripcion1","descripcion2","descripcion3","descripcion4","descripcion5","descripcion6","descripcion7","descripcion8","descripcion9"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Productos</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='productos'>";
    for(var i = 0; i <= 8; i++){
      document.querySelector('#productos').innerHTML += "<div class='item'>\
    <img onclick='ampliarProductos("+ imagenes[i] +")' src='img/productos/" + imagenes[i] + "_min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'>Cerrar</a></p>\
    <img id='img-grande" + imagenes[i] + "' src='img/productos/" + imagenes[i] + ".png' />\
    </div>\
    </div>";
    }

  //  document.querySelector('.content-block').innerHTML += "<a href='#' class='' onclick='portfolio()'>  Volver</a>";
    document.querySelector('.content-block').innerHTML += "</div>";
  }
  // logotipos

  function logotipos(){

    var imagenes = [1,2,3,4,5,6,7,8,9];
    var descripciones = ["descripcion1","descripcion2","descripcion3","descripcion4","descripcion5","descripcion6","descripcion7","descripcion8","descripcion9"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Logotipos</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='logotipos'>";
    for(var i = 0; i <= 8; i++){
      document.querySelector('#logotipos').innerHTML += "<div class='item'>\
    <img onclick='ampliarProductos("+ imagenes[i] +")' src='img/logotipos/" + imagenes[i] + "_min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'>Cerrar</a></p>\
    <img id='img-grande" + imagenes[i] + "' src='img/logotipos/" + imagenes[i] + ".png' />\
    </div>\
    </div>";
    }

  //  document.querySelector('.content-block').innerHTML += "<a href='#' class='' onclick='portfolio()'>  Volver</a>";
    document.querySelector('.content-block').innerHTML += "</div>";
  }
  // webs

  function webs(){

    var imagenes = [1,2,3,4,5,6,7,8,9];
    var descripciones = ["descripcion1","descripcion2","descripcion3","descripcion4","descripcion5","descripcion6","descripcion7","descripcion8","descripcion9"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Webs</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='webs'>";
    for(var i = 0; i <= 8; i++){
      document.querySelector('#webs').innerHTML += "<div class='item'>\
    <img onclick='ampliarProductos("+ imagenes[i] +")' src='img/webs/" + imagenes[i] + "_min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'>Cerrar</a></p>\
    <img id='img-grande" + imagenes[i] + "' src='img/webs/" + imagenes[i] + ".png' />\
    </div>\
    </div>";
    }

  //  document.querySelector('.content-block').innerHTML += "<a href='#' class='' onclick='portfolio()'>  Volver</a>";
    document.querySelector('.content-block').innerHTML += "</div>";
  }

//ampliar foto

function ampliarProductos(index){
	//console.log(index);
 document.querySelector('#back-img' + index).classList.remove('hide');
 document.querySelector('#back-img' + index).classList.add('ampliar-foto');
  document.querySelector('#texto' + index).classList.add('pop-text');
  document.querySelector('#img-grande' + index).classList.add('pop-image');
}

// cerrar foto

function cerrar(index){
  var objetoCerrar = document.querySelector('#back-img' + index);

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
