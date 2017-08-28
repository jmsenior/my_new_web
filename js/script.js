function insertarCSS(){
if(window.innerWidth <= 660){
  document.querySelector('head').innerHTML = '<link href="css/mobile.css" rel="stylesheet" media="all"/>';

}else if(window.innerWidth >= 661 && window.innerWidth <= 1023){
  document.querySelector('head').innerHTML = '<link href="css/tablet.css" rel="stylesheet" media="all"/>';
}else{
document.querySelector('head').innerHTML = '<link href="css/desktop.css" rel="stylesheet" media="all"/>';
}

}
insertarCSS();
function inicio(){


  document.querySelector('.content-block').innerHTML = "<div id='home'>\
    <ul class='menu-list'>\
      <li><a onclick='portfolio()' class='menu-links' href='#'>Portfolio</a></li>\
      <li><a class='menu-links' href='#'>Playground</a></li>\
      <li><a onclick='biography()' class='menu-links' href='#'>Bio</a></li>\
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
    document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Welcome</h1>";

    if(window.innerWidth > 992){
      document.querySelector('#content-h1').innerHTML += "<p class='texto_bienve'>Bienvenido a mi nueva web, en la que podrás encontrar algunos ejemplos de mis trabajos en todos los ámbitos señalados, también puedes ver más trabajos y ejemplos en los enlaces externos";
    }
};
inicio();


function portfolio(){

    document.querySelector('.content-block').innerHTML = "<div id='portfolio'>\
    <ul class='menu-list'>\
    <li><a class='menu-links' href='#'  onclick='productos()'>Productos</a></li>\
    <li><a class='menu-links' href='#' onclick='logotipos()'>Logotipos</a></li>\
    <li><a class='menu-links' href='#' onclick='webs()'>Webs</a></li>\
    <li><a class='menu-links' href='#' onclick='colaboraciones()'>Colaboraciones</a></li>\
    <li><a class='menu-links' href='#' onclick='carteles()'>Carteles</a></li>\
    <li><a class='menu-links' href='#' onclick='videos()'>Videos</a></li>\
    <li><a class='menu-links' href='#' onclick='vr()'>Realidad Virtual</a></li>\
    <li><a class='volver' href='#' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a></li>\
    </ul>\
    </div>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Portfolio</h1>";
  };


    // productos

    function productos(){

      var imagenes = [1,2,3,4,5,6,7,8,9];
      var descripciones = ["Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Diseño de Vinilo para Trabet Records"]

      document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Productos</h1>";

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
    // logotipos

  function logotipos(){

    var imagenes = [1,2,3,4,5,6,7,8,9];
    var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Logotipos</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='logotipos'>";
    for(var i = 0; i <= 8; i++){
      document.querySelector('#logotipos').innerHTML += "<div class='item'>\
    <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/logotipos/" + imagenes[i] + "_min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <div class='content'>\
    <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
    <img id='img-grande" + imagenes[i] + "' src='img/logotipos/" + imagenes[i] + ".png' />\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
    </div>\
    </div>\
    </div>";
    }

    document.querySelector('#logotipos').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
    document.querySelector('.content-block').innerHTML += "</div>";
  }
   // webs

    function webs(){

      var imagenes = [1,2,3,4,5,6,7,8];
      var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

      document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Webs</h1>";

      document.querySelector('.content-block').innerHTML = "<div id='webs'>";
      for(var i = 0; i <= 7; i++){
        document.querySelector('#webs').innerHTML += "<div class='item'>\
      <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/webs/" + imagenes[i] + "_min.png'/>\
      <div id='back-img" + imagenes[i] + "' class='hide'>\
      <div class='content'>\
      <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
      <img id='img-grande" + imagenes[i] + "' src='img/webs/" + imagenes[i] + ".png' />\
      <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
      </div>\
      </div>\
      </div>";
      }

      document.querySelector('#webs').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
      document.querySelector('.content-block').innerHTML += "</div>";
    }

    // colaboraciones

     function colaboraciones(){

       var imagenes = [1,2,3,4,5,6,7,8];
       var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

       document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Colaboraciones</h1>";

       document.querySelector('.content-block').innerHTML = "<div id='colaboraciones'>";
       for(var i = 0; i <= 7; i++){
         document.querySelector('#colaboraciones').innerHTML += "<div class='item'>\
       <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/colaboraciones/" + imagenes[i] + "_min.png'/>\
       <div id='back-img" + imagenes[i] + "' class='hide'>\
       <div class='content'>\
       <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
       <img id='img-grande" + imagenes[i] + "' src='img/colaboraciones/" + imagenes[i] + ".png' />\
       <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
       </div>\
       </div>\
       </div>";
       }

       document.querySelector('#colaboraciones').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
       document.querySelector('.content-block').innerHTML += "</div>";
     }
     // carteles

      function carteles(){

        var imagenes = [1,2,3,4,5,6,7,8,9];
        var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

        document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Carteles</h1>";

        document.querySelector('.content-block').innerHTML = "<div id='carteles'>";
        for(var i = 0; i <= 8; i++){
          document.querySelector('#carteles').innerHTML += "<div class='item'>\
        <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/carteles/" + imagenes[i] + "_min.png'/>\
        <div id='back-img" + imagenes[i] + "' class='hide'>\
        <div class='content'>\
        <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
        <img id='img-grande" + imagenes[i] + "' src='img/carteles/" + imagenes[i] + ".png' />\
        <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
        </div>\
        </div>\
        </div>";
        }

        document.querySelector('#carteles').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
        document.querySelector('.content-block').innerHTML += "</div>";
      }
      // videos

       function videos(){

         var imagenes = [1,2,3,4,5,6,7,8];
         var descripciones = ["Video promocional de JM Visual Creativity","Video promocional de 301seotool","Video promocional de Dream Clubbers","Video promocional de DJ RuxKorp","Logotipo para sello discográfico","Tráiler del corto de animación 'Guilt'","Animación para exposición de Goya","Cabecera promocional de Festival de Desert Rock","Animación de cabecera"]
         var enlaces = [
'<iframe src="https://player.vimeo.com/video/165717480?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe width="100%" height="315" src="https://www.youtube.com/embed/BOZI-u3jrCM" frameborder="0" allowfullscreen></iframe>',
'<iframe width="100%" height="315" src="https://www.youtube.com/embed/QPMm2EDoE6w" frameborder="0" allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/34341284?color=ff9933&byline=0&portrait=0" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/71604699?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/141839498?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/32226385?color=ff9933&byline=0&portrait=0" width="100%" height="362" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/48952438?byline=0&portrait=0" width="640" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
         ]

         document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Videos</h1>";

         document.querySelector('.content-block').innerHTML = "<div id='videos'>";
         for(var i = 0; i <= 7; i++){
           document.querySelector('#videos').innerHTML += "<div class='item'>\
         <img class='min-img' onclick='ampliarProductos(" + imagenes[i] + ")' src='img/videos/" + imagenes[i] + "_min.png'/>\
         <div id='back-img" + imagenes[i] + "' class='hide'>\
         <div class='content'>\
         <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
         <div>" + enlaces[i] + "</div>\
         <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
         </div>\
         </div>\
         </div>";
         }

         document.querySelector('#videos').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
         document.querySelector('.content-block').innerHTML += "</div>";
       }
       // vr

        function vr(){

          var imagenes = [1,2,3,4,5,6,7,8];
          var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

          document.querySelector('#content-h1').innerHTML = "<h1 class='name'>VR</h1>";

          document.querySelector('.content-block').innerHTML = "<div id='realidad'>";
          for(var i = 0; i <= 7; i++){
            document.querySelector('#realidad').innerHTML += "<div class='item'>\
          <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/vr/" + imagenes[i] + "_min.png'/>\
          <div id='back-img" + imagenes[i] + "' class='hide'>\
          <div class='content'>\
          <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
          <img id='img-grande" + imagenes[i] + "' src='img/vr/" + imagenes[i] + ".png' />\
          <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
          </div>\
          </div>\
          </div>";
          }

          document.querySelector('#realidad').innerHTML += "<a href='#' class='volver_listado' onclick='portfolio()'><i class='fa fa-chevron-left'></i> Volver</a>";
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


//

function biography(){

var imagenesBio = ['html5','css3','javascript','jquery','jquery-mobile','bootstrap','as3','ai','fl','id','pr','ae','ps','dw','corel','fontlab','freehand','quark','twig']
var imagenesTitle = ['Html5','Css3','Javascript','jQuery','jQuery-Mobile y jQUery UI','Boostrap','Actionscript 3.0','Illustrator','Flash professional','inDesign','Premiere Pro','After Effects','Photoshop','Dreamweaver','Corel Draw','Font Lab Studio','Freehand MX','QuarkXpress','Twig templates' ]

  document.querySelector('.content-block').innerHTML = "<div id='bio'>";

  for(var i = 0; i <= imagenesBio.length; i++){
    document.querySelector('#bio').innerHTML += "<img title='" + imagenesTitle[i] + "' src='img/logos/" + imagenesBio[i] + ".png'/>";
  }

    document.querySelector('.content-block').innerHTML += "</div>";

}

//

function contacto(){

}
