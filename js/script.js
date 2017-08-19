function inicio(){


  document.querySelector('.content-block').innerHTML = "<div id='home'>\
    <ul class='menu-list'>\
      <li><a class='menu-links' href='#'>Home</a></li>\
      <li><a onclick='portfolio()' class='menu-links' href='#'>Portfolio</a></li>\
      <li><a class='menu-links' href='#'>Playground</a></li>\
      <li><a class='menu-links' href='#'>Bio</a></li>\
      <li><a class='menu-links' href='#'>Contact</a></li>\
    </ul>\
  </div>\
  <div class='symbols'>\
  <div class='servicios'><span>Diseño gráfico</span><i class='fa fa-pencil'></i></div>\
  <div class='servicios'><span>Diseño web</span><i class='fa fa-desktop'></i></div>\
  <div class='servicios'><span>Motion graphics</span><i class='fa fa-film'></i></div>\
  <div class='servicios'><span>Diseño 3D</span><i class='fa fa-cube'></i></div>\
  <div class='servicios'><span>Desarrollo Front-End</span><i class='fa fa-code'></i></div>\
  <div class='servicios'><span>Web VR</span><i class='fa fa-eye'></i></div>\
  <div>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name_home'>Welcome</h1>";

};
inicio();


function portfolio(){

    document.querySelector('.content-block').innerHTML = "<div id='portfolio'>\
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
    var descripciones = ["Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Diseño de Vinilo para Trabet Records"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name_portfolio'>Productos</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='productos'>";
    for(var i = 0; i <= 8; i++){
      document.querySelector('#productos').innerHTML += "<div class='item'>\
    <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/productos/" + imagenes[i] + "_min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <div class='content'>\
    <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
    <img id='img-grande" + imagenes[i] + "' src='img/productos/" + imagenes[i] + ".png' />\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
    </div>\
    </div>\
    </div>";
    }

    document.querySelector('#productos').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
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
