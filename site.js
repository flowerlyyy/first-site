const products=[
  {
      id:1,
      imageSrc: './Assets/Rectangle 20.png',
      title: 'Hoodies & Sweetshirt',
      titleLink: '#',
      description: 'Explore Now!',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:2,
      imageSrc: './Assets/Rectangle 21.png',
      title: 'Coats & Parkas',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:3,
      imageSrc: './Assets/Rectangle 22.png',
      title: 'Tees & T-Shirt',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:4,
      imageSrc: './Assets/Rectangle 20.png',
      title: 'Hoodies & Sweetshirt',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:5,
      imageSrc: './Assets/Rectangle 20.png',
      title: 'Coats & Parkas',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:6,
      imageSrc: './Assets/Rectangle 20.png',
      title: 'Tees & T-Shirt',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:7,
      imageSrc: './Assets/Rectangle 21.png',
      title: 'Hoodies & Sweetshirt',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:8,
      imageSrc: './Assets/Rectangle 21.png',
      title: 'Coats & Parkas',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
  },{
      id:9,
      imageSrc: './Assets/Rectangle 21.png',
      title: 'Tees & T-Shirt',
      titleLink: '#',
      description: 'Explore Now!',
      descriptionLink: '#',
      arrow:'./Assets/Arrow 1.svg'
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
 }, 2000);


 let maindiv = document.querySelector('.common-comments');
 fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2')
   .then(res => res.json())
   .then(data => data.forEach(item => {
     let div = `
     <div class="user-message">
     <p class="title">Name: ${item.name}"</p>
     <p class="user-email">Email: ${item.email}"</p>
     <p class="user-comment">Body: ${item.body}"</p>
   </div>
   `;
  maindiv.innerHTML += div;

 }));




