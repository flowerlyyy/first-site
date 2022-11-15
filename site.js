const products=[
    {
        id:1,
        imageSrc: './Rectangle 20.png',
        title: 'Hoodies & Sweetshirt',
        titleLink: '#',
        description: 'Explore Now!',
        arrow:'./Arrow 1.svg'
    },{
        id:2,
        imageSrc: './Rectangle 21.png',
        title: 'Coats & Parkas',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:3,
        imageSrc: './Rectangle 22.png',
        title: 'Tees & T-Shirt',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:4,
        imageSrc: './Rectangle 20.png',
        title: 'Hoodies & Sweetshirt',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:5,
        imageSrc: './Rectangle 20.png',
        title: 'Coats & Parkas',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:6,
        imageSrc: './Rectangle 20.png',
        title: 'Tees & T-Shirt',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:7,
        imageSrc: './Rectangle 21.png',
        title: 'Hoodies & Sweetshirt',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:8,
        imageSrc: './Rectangle 21.png',
        title: 'Coats & Parkas',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },{
        id:9,
        imageSrc: './Rectangle 21.png',
        title: 'Tees & T-Shirt',
        titleLink: '#',
        description: 'Explore Now!',
        descriptionLink: '#',
        arrow:'./Arrow 1.svg'
    },
    ];


const cardsContainer = document.querySelector('.three-pictures');

for (const product of products) {
  renderProductCard(product);
}

function renderProductCard(product) {
  const card = document.createElement('div');
  cardsContainer.appendChild(card);
  card.outerHTML = getProductCardMarkup(product);
}

function getProductCardMarkup(product) {
  return `
  <div class="column">
                      <img class="afterchange" src="${product.imageSrc}" alt="" >
                     <div class="textarrow">
                        <div class="text">
                       <a href="${product.titleLink}" class="name">${product.title} </a>
                       <a href="${product.descriptionLink}" class="explore">${product.description}</a>
                      </div>
                         <img class="arrow" src="${product.arrow}" alt="arrow">
                  </div>
                   </div>
              `;
}

let currentSlideNumber = 0;
const firstCard = document.querySelector('.column:first-child');


function handleCarouselButtonClick(direction) {
  const margin = -562 * direction;
  firstCard.style.marginLeft = `${margin}px`;

}
setInterval(()=>{
    if(currentSlideNumber===products.length-2){
        currentSlideNumber = 0;
       handleCarouselButtonClick(currentSlideNumber);
     }
     handleCarouselButtonClick(currentSlideNumber++)
   }, 1000);
    