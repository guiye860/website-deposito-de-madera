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
        ]
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