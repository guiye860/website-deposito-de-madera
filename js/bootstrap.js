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
            src: './img/puerta-1.jpg',
            titulo: 'Puerta con buñas',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iste neque quos harum illum, necessitatibus unde non voluptates voluptatibus voluptate, fugiat sint sapiente, autem corporis expedita. Vitae delectus, nihil error.'
          },
          {
            id: 2,
            src: './img/terciadas.jpeg',
            titulo: 'Multilaminado',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae atque ea vel consectetur, nemo nam quasi et molestiae totam architecto obcaecati quae fuga alias blanditiis, aut voluptatum illum explicabo exercitationem!'
          },
          {
            id: 3,
            src: './img/marco.png',
            titulo: 'Marco',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, earum. Cumque beatae dignissimos eligendi fugit, accusamus accusantium odio quia eius ullam repellendus, quo impedit mollitia. Laboriosam facere quisquam rem illum.'
          },
          {
            id: 4,
            src: './img/caseta.png',
            titulo: 'Caseta de Jardin',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia veniam provident expedita aliquid minima cum quidem fuga enim quasi, earum, soluta, consequuntur dolor eligendi dolorem obcaecati nulla! Qui, pariatur.'
          },
          {
            id: 5,
            src: './img/contramarco.png',
            titulo: 'contramarco',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione similique nesciunt esse illo, inventore amet, officiis maxime qui iure quae accusamus earum neque, deleniti numquam expedita vel! Assumenda neque, nemo?'
          },
          {
            id: 6,
            src: './img/machimbre.png',
            titulo: 'Machimbre',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis aliquid perspiciatis nisi. Similique ab nam facere eaque, nemo, quisquam rerum, necessitatibus consequuntur assumenda vel eveniet molestias, sint illo commodi.'
          },
          {
            id: 7,
            src: './img/clavos.png',
            titulo: 'Ferreteria',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id voluptas maiores nam, reprehenderit quod hic, in, totam esse pariatur provident quasi quae tempore. Maiores, cupiditate, eius. Iste, nobis quo!'
          },
          {
            id: 8,
            src: './img/encofradoh.png',
            titulo: 'Encofrado',
            medidas: ['medida 1','medida 2','medida 3','medida 4'],
            especies: ['especie 1','especie 2','especie 3','especie 4'],
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam beatae qui! Iusto modi dolores quidem fugit nam, delectus quisquam beatae esse nobis incidunt. Eos quibusdam sit aperiam commodi, tempore.'
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