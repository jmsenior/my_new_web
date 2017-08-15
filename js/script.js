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

  document.querySelector('.content-block').innerHTML = "<div id='productos'>";
  for(var i = 0; i <= 8; i++){
  document.querySelector('.content-block').innerHTML += "<img onclick='ampliarProductos()' src='img/productos/"+ imagenes[i] +"_min.png'/>";
  }
  document.querySelector('.content-block').innerHTML += "</div>";

}


function ampliarProductos(){

  var descripciones = ["descripcion 1","descripcion 2","descripcion 3","descripcion 4","descripcion 5","descripcion 6","descripcion 7","descripcion 8","descripcion 9"]
  var imgProductos = [1,2,3,4,5,6,7,8,9]


  document.querySelector('.content-block').innerHTML += "<div id='ampliar-foto'>";
  for(var i = 0; i <= 8; i++){
  document.querySelector('.content-block').innerHTML += "<p id='texto' class='pop-text'>"+ descripciones[i] +" <a class='cerrar btn' onclick='cerrar()'>Cerrar</a></p>"
}
  for(var j = 0; j <= 8; j++){
  document.querySelector('.content-block').innerHTML += "<img class='pop-image' src='img/productos/"+ imgProductos[j] +".png' />";
  
  }

  document.querySelector('.content-block').innerHTML += "</div>";



}

function cerrar(){
  //document.querySelector("#ampliar-foto").classList.add('quit');
  //setTimeout(function(){
  //  document.querySelector("#ampliar-foto").remove();
  //},500);
  document.querySelector("#ampliar-foto").remove();

}
