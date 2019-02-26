;
((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const copy = d.querySelector('.Footer small')

    copy.innerHTML = `&copy; ${new Date().getFullYear()} @guiye860`

    $('.navbar-nav>li>a').on('click', () => $('.navbar-collapse').collapse('hide'))

    $('a[href*="#w"]').on('click', function(){console.log('lo logre, jaha a casa')})

    //https://github.com/cferdinandi/smooth-scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      offset: 60,
      selectorHeader: '.navbar'
    })
  })
})(document);

const app = new Vue({
    el: '#app',
    data: {
        isShow: true,
        prod: [],
        productos: [
          {
            id: 1,
            src: './img/puerta.png',
            titulo: 'Puerta con buñas',
            alt: 'Puerta',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: '¿Necesitas un toque de estilo y fuerza?',
          },
          {
            id: 2,
            src: './img/terciadas.jpeg',
            titulo: 'Multilaminado',
            alt: 'Terciadas',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Podés usarlo para reforzar techos, montar paredes falsas.',
          },
          {
            id: 3,
            src: './img/marco.png',
            titulo: 'Marco',
            alt: 'Marco',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'De Yvyrapyta | Guayaibi',
          },
          {
            id: 4,
            src: './img/caseta.png',
            titulo: 'Caseta de Jardin',
            alt: 'Caseta',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: '¿Muchas herramientas y poco espacio?',
          },
          {
            id: 5,
            src: './img/contramarco.png',
            titulo: 'contramarco',
            alt: 'Contramarco',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Comeplemetan tu marco, con nuestra linea de contramarcos.',
          },
          {
            id: 6,
            src: './img/machimbre.png',
            titulo: 'Machimbre',
            alt: 'Machimbre',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Para techo y tambien para pisos',
          },
          {
            id: 7,
            src: './img/clavos.png',
            titulo: 'Ferreteria',
            alt: 'Ferreteria',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Todo lo que necesitas para el trabajo con madera',
          },
          {
            id: 8,
            src: './img/encofradoh.png',
            titulo: 'Encofrado',
            alt: 'Encofrado',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Apoyamos tu emprendimiento desde el inicio.',
          }
        ],
        servicios: [{
          id: 1,
          titulo: 'Carpintería',
          subTitulo: 'Muebles y piezas en general',
          texto: 'Necesitas una puerta (como la que tenemos en nuestro catálogo) y buscas alguna personalización extra, o por que no, algún mobiliario, no te preocupes que contamos con el talento y toda la maquinaria para cubrir esa necesidad.',
          clase: 'col-12 col-lg-6 text-right',
          img: './img/carpinteria.png',
          imgClass: 'img-fluid shadow mb-5 bg-white rounded'
        },
        {
          id: 2,
          titulo: 'Colocación de Aberturas',
          subTitulo: 'Marcos y puertas',
          texto: 'Alguna puerta o ventana que necesites montar, contamos con mano de obra calificada para éste trabajo.',
          clase: 'col-12 col-lg-6 order-lg-1',
          img: './img/aberturas.jpg',
          imgClass: 'img-fluid shadow mb-5 bg-white rounded'
        },
        {
          id: 3,
          titulo: 'Lustre',
          subTitulo: 'Brillo y durabilidad',
          texto: 'Sellamos, protegemos y le damos brillo a tus muebles, ésto ayuda a extender el ciclo de vida del producto.',
          clase: 'col-12 col-lg-6 text-right',
          img: './img/cepillado.jpeg',
          imgClass: 'img-fluid shadow mb-5 bg-white rounded'
        },
        {
          id: 4,
          titulo: 'Cepillado',
          subTitulo: 'Limando asperezas',
          texto: 'Es similar a lijar una superficie pero con una maquinaria mas sofisticada y precisa, removemos todas esas imperfecciones de la madera y ésta queda lista para sellarla.',
          clase: 'col-12 col-lg-6 order-lg-1',
          img: './img/lustre-cepillado.jpg',
          imgClass: 'img-fluid shadow mb-5 bg-white rounded'
        },
        {
          id: 5,
          titulo: 'Colocacion de contramarco',
          subTitulo: 'Marco y contramarco siempre vienen de la mano',
          texto: 'Para una terminacion elegante, es infaltable un buen marco.',
          clase: 'col-12 col-lg-6 text-right',
          img: './img/contramarco-colocacion.jpg',
          imgClass: 'img-fluid shadow mb-5 bg-white rounded'
        }]
    },
    methods: {
      setProduct: function(idProd){this.isShow=false;this.prod = this.productos.filter(e => e.id === idProd)},
      setModalShow: function(){this.isShow = true}
    },
    computed: {
      producto: function(){
        return this.prod;
      }
    }
})