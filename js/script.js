function ejecucion(){

  insertarCSS();
  insertarFormas();
  insertarFooter();
  inicio();
}

window.onload = ejecucion();

function insertarCSS(){
if(window.innerWidth <= 660){
  document.querySelector('head').innerHTML = '<link href="css/mobile.css" rel="stylesheet" media="all"/>';
  document.querySelector('head').innerHTML += '<link href="fonts/Font-Awesome/css/font-awesome.min.css" rel="stylesheet" media="all"/>';
}else if(window.innerWidth >= 661 && window.innerWidth <= 1023){
  document.querySelector('head').innerHTML = '<link href="css/tablet.css" rel="stylesheet" media="all"/>';
  document.querySelector('head').innerHTML += '<link href="fonts/Font-Awesome/css/font-awesome.min.css" rel="stylesheet" media="all"/>';
}else{
  document.querySelector('head').innerHTML = '<link href="css/desktop.css" rel="stylesheet" media="all"/>';
  document.querySelector('head').innerHTML += '<link href="fonts/Font-Awesome/css/font-awesome.min.css" rel="stylesheet" media="all"/>';
}

}

function insertarFormas(){
  document.querySelector('#name-block').innerHTML += '<svg id="triangulo"><polygon points="90,120 350,190 160,210" style="fill:yellow;" /></svg>\
    <svg id="cuadrado"><rect width="150" height="150" fill="#94FF2F" /></svg>\
    <svg id="circulo"><circle cx="100" cy="100" r="100" fill="#57FFBD"/></svg>\
    <svg id="circulo-lineal1"><circle stroke-dasharray="25,100" cx="250" cy="250" r="200" fill="transparent" stroke="#FFDD7D" stroke-width="20" stroke-linecap="square"/></svg>\
    <svg id="circulo-lineal2"><circle stroke-dasharray="25,3, 40, 20, 100" cx="450" cy="450" r="450" fill="transparent" stroke="gray" stroke-width="20" stroke-linecap="square"/></svg>';
}

function insertarFooter(){
  document.querySelector('footer').innerHTML += '<div id="external-links">\
    <ul class="e_links">\
      <li><a href="https://www.facebook.com/JmVisualCreativity" target="_blank"><i class="fa fa-facebook"></i></a></li>\
      <li><a href="https://twitter.com/chetemele" target="_blank"><i class="fa fa-twitter"></i></a></li>\
      <li><a href="https://www.linkedin.com/in/jmvisualcreativity" target="_blank"><i class="fa fa-linkedin"></i></a></li>\
      <li><a href="https://github.com/jmsenior" target="_blank"><i class="fa fa-github"></i></a></li>\
      <li><a href="https://vimeo.com/channels/389093" target="_blank"><i class="fa fa-vimeo"></i></a></li>\
    </ul>\
  </div>';
}

function inicio(){


  document.querySelector('.content-block').innerHTML = "<div id='home'>\
    <ul class='menu-list'>\
      <li><a onclick='portfolio()' class='menu-links' href='#'>Portfolio</a></li>\
      <li><a onclick='playground()' class='menu-links' href='#'>Playground</a></li>\
      <li><a onclick='biography()' class='menu-links' href='#'>Bio</a></li>\
      <li><a onclick='contacto()' class='menu-links' href='#'>Contact</a></li>\
    </ul>\
  </div>\
  <div class='symbols'>\
  <div class='servicios'><span>Diseño gráfico</span><i class='fa fa-pencil'></i></div>\
  <div class='servicios'><span>Diseño web</span><i class='fa fa-desktop'></i></div>\
  <div class='servicios'><span>Motion graphics</span><i class='fa fa-film'></i></div>\
  <div class='servicios'><span>Diseño 3D</span><i class='fa fa-cube'></i></div>\
  <div class='servicios'><span>Desarrollo Front-End</span><i class='fa fa-code'></i></div>\
  <div class='servicios'><span>Web VR</span><i class='fa fa-eye'></i></div>\
  <div>\
  <h2 class='home-quote'>'La creatividad es contagiosa, pásala'</h2>";
    document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Welcome</h1>";

    if(window.innerWidth > 992){
      document.querySelector('#content-h1').innerHTML += "<p class='texto_bienve'>Bienvenido a mi nueva web, en la que podrás encontrar algunos ejemplos de mis trabajos en todos los ámbitos señalados, también puedes ver más información en los enlaces externos";
    }
};

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

    if(window.innerWidth > 992){
      document.querySelector('#content-h1').innerHTML += "<p class='texto_bienve'>Una breve selección, de trabajos comerciales para cliente final, público objetivo, ejemplos colaborativos y creaciones personales.</p>";
    }
  };


    // productos

    function productos(){

      var imagenes = [1,2,3,4,5,6,7,8,9];
      var descripciones = ["Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Productos de higiene y cuidado personal para países de Europa y Oriente Medio.","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Stickers para la plataforma de mensajería LINE <a href='https://store.line.me/stickershop/search/creators/es?q=Jm+visual+creativity' target='_blank' class='preview'><i class='fa fa-eye'></i> Ver producto</a>","Diseño de Vinilo para Trabet Records"]

      document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Productos</h1>";

      document.querySelector('.content-block').innerHTML = "<div id='productos'>";
      if(window.innerWidth < 481){
        document.querySelector('#productos').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
      }

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
    var descripciones = ["Logotipo e identidad corporativa de empresa","Logotipo e identidad corporativa de empresa","Logotipo,identidad corporativa y papelería publicitaria para clínica de fisioterapia","Logotipo e identidad corporativa para bar-restaurante","Logotipo para sello discográfico","Logotipo e identidad corporativa para Café Bar-Teatro","Logotipo para blog de programación","Logotipos para empresa de Páginas Web","Logotipo para DJ RuxKorp"]

    document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Logotipos</h1>";

    document.querySelector('.content-block').innerHTML = "<div id='logotipos'>";
    if(window.innerWidth < 481){
      document.querySelector('#logotipos').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
    }
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
      var descripciones = [
        "Tienda online <a href='http://tu-mundo.online/es/' class='preview' target='_blank' rel='noindex,nofollow'><i class='fa fa-eye'></i> Ver</a>",
        "Tienda online <a href='http://etcbyetcetera.com/es/' class='preview' target='_blank' rel='noindex,nofollow'><i class='fa fa-eye'></i> Ver</a>",
        "Web empresarial <a href='http://www.hermanosjimeneznavarro.com/' class='preview' target='_blank' rel='noindex,nofollow'><i class='fa fa-eye'></i> Ver</a>",
        "Anterior portfolio web <a href='http://jmvisualcreativity.es/old' class='preview' target='_blank' rel='noindex,nofollow'><i class='fa fa-eye'></i> Ver</a>",
        "Web empresarial <a href='http://www.servi-comfort.com/' class='preview' target='_blank' rel='noindex,nofollow'><i class='fa fa-eye'></i> Ver</a>",
        "Web particular <a href='http://vidabella.es/' class='preview' target='_blank'><i class='fa fa-eye' rel='noindex,nofollow'></i> Ver</a>",
        "Portfolio web <a href='http://erosionprecipitada.com/' class='preview' target='_blank'><i class='fa fa-eye' rel='noindex,nofollow'></i> Ver</a>",
        "Web empresarial <a href='http://achetemele.es/' class='preview' target='_blank'><i class='fa fa-eye' rel='noindex,nofollow'></i> Ver</a>"
      ]

      document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Webs</h1>";

      document.querySelector('.content-block').innerHTML = "<div id='webs'>";

      if(window.innerWidth < 481){
        document.querySelector('#webs').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
      }

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
       var descripciones = ["Diseño de camiseta para Awen Clout","Camiseta para Escuela Arte Granada","Colaboración para exposición en el Museo de Arte de Algeciras","Colaboración para Escuela Arte Granada","Colaboración para Estación Diseño","Diseño de portada par Yah! Magazine","Logotipo para blos de música electrónica","Logotipo para App de Play Store"]

       document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Colaboraciones</h1>";

       document.querySelector('.content-block').innerHTML = "<div id='colaboraciones'>";
       if(window.innerWidth < 481){
         document.querySelector('#colaboraciones').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
       }

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
        var descripciones = ["Cartel publicitario pra sala Underground","Cartel publicitario para empresa de comida rápida","Cartel publicitario","Cartel publicitario de exposición","Cartel informativo para asociación","Cartel publicitario pra Sala Apolo 2 (BCN)","Cartel publicitario de Dj Quarkore","Cartel publicitario de Dj Quarkore","Cartel publicitario de Bar-Restaurante"]

        document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Carteles</h1>";

        document.querySelector('.content-block').innerHTML = "<div id='carteles'>";
        if(window.innerWidth < 481){
          document.querySelector('#carteles').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
        }
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
         var descripciones = ["Video promocional de JM Visual Creativity","Video promocional de 301seotool","Video promocional de Dream Clubbers","Video promocional de DJ RuxKorp","Tráiler del corto de animación 'Guilt'","Animación para exposición de Goya","Cabecera promocional de Festival de Desert Rock","Animación de cabecera"]
         var enlaces = [
'<iframe src="https://player.vimeo.com/video/165717480?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe width="100%" height="315" src="https://www.youtube.com/embed/BOZI-u3jrCM" frameborder="0" allowfullscreen></iframe>',
'<iframe width="100%" height="315" src="https://www.youtube.com/embed/QPMm2EDoE6w" frameborder="0" allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/34341284?color=ff9933&byline=0&portrait=0" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/71604699?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/141839498?color=ff9933&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/32226385?color=ff9933&byline=0&portrait=0" width="100%" height="362" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe src="https://player.vimeo.com/video/48952438?byline=0&portrait=0" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
         ]

         document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Videos</h1>";

         document.querySelector('.content-block').innerHTML = "<div id='videos'>";
         if(window.innerWidth < 481){
           document.querySelector('#videos').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
         }
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
          var descripciones = ["Portfolio WebVR <a href='vr_portfolio/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Representación del Sistema Solar en VR <a href='vr_space' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Homenaje a Silent Hill en VR <a href='vr_room/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Parkour en VR <a href='vr_roof/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Homenaje a Twin Peaks en VR <a href='vr_twin/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Escenografía con objeto 3D de Evangelion 01 en VR - Controles: A,S,W,D y Espacio <a href='vr_eva/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Escenografía con objeto 3D de Metal Gear Rex en VR - Controles: A,S,W,D <a href='vr_metal/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>",
          "Mini juego en VR. ¿Llegarás a lo más alto? <a href='vr_jump/' class='preview' target='_blank'><i class='fa fa-eye'></i> Ver</a>"]

          document.querySelector('#content-h1').innerHTML = "<h1 class='name'>VR</h1>";

          document.querySelector('.content-block').innerHTML = "<div id='realidad'>";
          if(window.innerWidth < 481){
            document.querySelector('#realidad').innerHTML += "<p class='deslice'>Deslize hacia abajo <i class='fa fa-chevron-down'></i></p>";
          }
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


}

//
function playground(){



  var imagenes = [1,2,3,4,5];
  var descripciones = [
    'Bienvenido al "nuevo" Sistema Operativo CHE OS, un banco de pruebas en constante crecimiento imitando al clásico sistema operativo de mediados de los 90. <a href="play_cheos/" class="preview" target="_blank"><i class="fa fa-eye"></i> Ver</a>',
    'Tres aficiones en una: Diseñar, programar y tocar la guitarra. <a href="play_guitar/" class="preview" target="_blank"><i class="fa fa-eye"></i> Ver</a> ',
    'Diseño creado solamente en CSS3 <a href="play_eye/" class="preview" target="_blank"><i class="fa fa-eye"></i> Ver</a>',
    'Un diseño creativo y actual para tus tipografías realizado con Css3  <a href="play_font/" class="preview" target="_blank"><i class="fa fa-eye"></i> Ver</a>',
    '¿Acaso es un truco de magia? No es CSS3 <a href="play_card/" class="preview" target="_blank"><i class="fa fa-eye"></i> Ver</a>'
  ]

  document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Playground</h1>";

  document.querySelector('.content-block').innerHTML = "<div id='playground'>";

  document.querySelector('#playground').innerHTML += "<p class='texto_play'>Zona experimental en constante crecimiento de prácticas creativas con Html5, Css3, Javascript, jQuery,...</p>";

  for(var i = 0; i <= 4 ; i++){
    document.querySelector('#playground').innerHTML += "<div class='item'>\
    <img class='min-img' onclick='ampliarProductos("+ imagenes[i] +")' src='img/play/play_" + imagenes[i] + "min.png'/>\
    <div id='back-img" + imagenes[i] + "' class='hide'>\
    <div class='content'>\
    <a class='cerrar btn' onclick='cerrar(" + imagenes[i] + ")'><i class='fa fa-remove'></i></a>\
    <img id='img-grande" + imagenes[i] + "' src='img/play/play_" + imagenes[i] + ".png' />\
    <p id='texto" + imagenes[i] + "'>" + descripciones[i] + " </p>\
    </div>\
    </div>\
    </div>";


  }

  document.querySelector('#playground').innerHTML += "<a href='#' class='volver_listado' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a>";
  document.querySelector('.content-block').innerHTML += "</div>";


};


//

function biography(){

var imagenesBio = ['html5','css3','javascript','jquery','jquery-mobile','bootstrap','as3','ai','fl','id','pr','ae','ps','dw','corel','fontlab','freehand','quark','twig']
var imagenesTitle = ['Html5','Css3','Javascript','jQuery y jQuery UI','jQuery-Mobile','Boostrap','Actionscript 3.0','Illustrator','Flash professional','inDesign','Premiere Pro','After Effects','Photoshop','Dreamweaver','Corel Draw','Font Lab Studio','Freehand MX','QuarkXpress','Twig templates' ]




  document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Biografía</h1>";//"<img class='retrato' src='img/varios/retrato.png'/>";
  document.querySelector('.content-block').innerHTML = "<div id='bio'>";



  document.querySelector('#bio').innerHTML += "<img class='retrato' src='img/varios/retrato.png'/>";
  document.querySelector('#bio').innerHTML += "<h3 class='frase'>El éxito es simplemente, la aplicación diaria de la disciplina</h3>";
  document.querySelector('#bio').innerHTML += "<i class='more fa fa-chevron-down fa-2x'></i>";
  document.querySelector('#bio').innerHTML += "<div class='portrait'>\
  <ul class='bio_list'>\
  <li>Desarrollador Front-End</li>\
  <li>Diseñador Gráfico y Web</li>\
  <li>Productor Motion Graphics</li>\
  <li>Desarrollador y diseñador de WebVR</li>\
  <li> ... </li>\
  <ul>\
  </div>";

  for(var i = 0; i < imagenesBio.length; i++){
    document.querySelector('#bio').innerHTML += "<img class='programas' title='" + imagenesTitle[i] + "' src='img/logos/" + imagenesBio[i] + ".png'/>";
  }

    document.querySelector('.content-block').innerHTML += "</div>";

    document.querySelector('#bio').innerHTML += "<a href='#' class='volver_listado' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a>";


}

//

function contacto(){
 document.querySelector('.content-block').innerHTML = '<div id="contacto">\
   <div><img class="img_contact" src="img/varios/logo_jm.png" />\
   <h3 class="contact_h3">JM Visual Creativity</h3></div>\
   <div>\
   <hr class="black-line"/>\
   <ul class="bio_list">\
   <li>Desarrollador Front-End</li>\
   <li>Diseñador Gráfico y Web</li>\
   <li>Productor Motion Graphics</li>\
   <li>Desarrollador y diseñador de WebVR</li>\
   <li class="form">Para cualquier consulta e información <a href="mailto:info@jmvisualcreativity.es"><i class="fa fa-envelope-o"></i> Enviar correo</a> </li>\
   <ul>\
   </div>';

   document.querySelector('#contacto').innerHTML += "<a href='#' class='volver_listado' onclick='inicio()'><i class='fa fa-chevron-left'></i> Volver</a>";

     document.querySelector('#content-h1').innerHTML = "<h1 class='name'>Contacto</h1>";
     if(window.innerWidth > 992){
       document.querySelector('#content-h1').innerHTML += "<p class='texto_bienve'>Para cualquier consulta que quieras realizar, rellena el siguiente formulario</p>";
     }
}
