$(function() {
    $('#twoItemsSlider').owlCarousel({
      items: 2,
      dotsContainer: '.section-rewiews_slider_controls',
      startPosition: 2,
      responsive: {
        0: {items: 1},
        1070: {items: 2}
        
      }
    });
    $('#oneItemSlider').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      navContainer: '.section-slider_slider_controls',
    });
    $('#topItemsSlider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoWidth:false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });
    $('#topItemsSlider').on('changed.owl.carousel', function(e) {
        $('.owl_items-num-color').text((e.item.index+1));
        $('.owl_items-num-inherit').text('/' + e.item.count);
    })
    
  // //animation on main block spiderweb
    particlesJS('particles-js',
  
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );

  $('.btn_close_form').on('click', function() {
    $('.footer-inner').addClass('hidden');
    $('#map').addClass('active');
  })

    $(".header-menu").on("click",".header-menu_link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    $('#menu-mobile').slicknav();
    $('#menu').slicknav({
      prependTo:'.mobile-wrap'
  });


})

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
  };
})();

(function($) {
// SCENE =========================================
var WIDTH = 500,
    HEIGHT = 500;

// CAMERA ========================================
var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

// CANVAS INJECTED CONTAINER =====================
var $container = $( '#sphere' );

// THREE.JS SET UP ===============================
var renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setClearColor( 0xffffff, 0 );
var camera = 
    new THREE.PerspectiveCamera(
          VIEW_ANGLE,
          ASPECT,
          NEAR,
          FAR);

var scene = new THREE.Scene();

// Additional settings ===========================
camera.position.z = 150;
renderer.setSize( WIDTH, HEIGHT );

// SPHERE MESH ===============================
var radius = 50,
    segments = 15,
    rings = 10;

var sphereMaterial = 
    new THREE.MeshBasicMaterial(
      {
      color: 0x655a9e,
            wireframe: true
        }
    );

var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
      radius,
      segments,
      rings),    
    sphereMaterial
);
scene.add( sphere );

// RENDER 
$container.append( renderer.domElement );

// Render Function
var render = function () {
    requestAnimationFrame( render );

    // Rotation Animation
    sphere.rotation.y += .001;
    sphere.rotation.z += .0002;

    //Render Initialize
    renderer.render( scene, camera );
};

render();
})(jQuery);