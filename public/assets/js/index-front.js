const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);

//Defino o tamanho do #slider-width, de acordo com a quantidade de itens dentro do array sliderItens
let sliderWidth = q('#slider #slider-width').style.width = `calc(100vw * ${sliderItens.length})`;

//Cloco a div de cada slide, altero os dados e jogo ela dentro de #slider-width
sliderItens.map((item) => {
     let sliderItem = q('#models .slider-item').cloneNode(true);
     let pointer = q('#models .pointer-item').cloneNode();

     sliderItem.querySelector('h1').innerHTML = item.h1;
     sliderItem.querySelector('h2').innerHTML = item.h2;
     sliderItem.querySelector('.slider-right img').src = item.img;

     q('#slider #slider-width').append(sliderItem);
     q('#slider #pointers').append(pointer);
});

//Função de troca de slides pelo click em cada pointer
let pointerItem = qa('#pointers .pointer-item');
pointerItem[0].classList.add('atual');

for(let i = 0 ; i < pointerItem.length; i ++) {
     pointerItem[i].addEventListener("click", () => {
          for(let i = 0; i < pointerItem.length; i++) {
               pointerItem[i].classList.remove('atual');
          }
          q('#slider-width').style.marginLeft = `calc(-100vw * ${i})`;
          pointerItem[i].classList.add('atual');
     });
}

//Função para trocar de slide automaticamente
function goSlide() {
     if (ctGoSlide >= sliderItens.length) {
          ctGoSlide = 0;
     };
     for(let i = 0; i < pointerItem.length; i++) {
          pointerItem[i].classList.remove('atual');
     }

     q('#slider-width').style.marginLeft = `calc(-100vw * ${ctGoSlide})`;
     pointerItem[ctGoSlide].classList.add('atual');

     ctGoSlide++;
};

//Defino o tamanho do #width-slider-all-img, de acordo com a quantidade de itens dentro do array pokedex
let widthSliderAllImg = q('#slider-all-img #width-slider-all-img').style.width = `calc(5vw * ${pokedex.length})`;

//Função para clocar a div .item-slider-all-img e adicionar as imagens dos pokémons
pokedex.map((item) => {
    let itenSliderAllImg = q('#models .item-slider-all-img').cloneNode(true);

    itenSliderAllImg.querySelector('img').src = item.img;

    q('#width-slider-all-img').append(itenSliderAllImg);
});

//Função para mover o #width-slider-all-img
function moveSliderAllImg() {
   if(ctAllImg >= pokedex.length - 15){
        q('#width-slider-all-img').style.marginLeft = `0`;
        ctAllImg = 1;
   } else {
        q('#width-slider-all-img').style.marginLeft = `calc(-5vw * ${ctAllImg})`;
   }
   ctAllImg++;
}

let ctAboutImg = 1;
//Função para exibir os cards no About
aboutImg.map((item) => {
     let aboutImgIten = q('#models .about-card').cloneNode(true);

     aboutImgIten.querySelector('.img-card img').src = item.img;
     aboutImgIten.querySelector('.card-border-content h2').innerHTML = item.name;
     aboutImgIten.querySelector('.card-border-content p').innerHTML = item.num;

     if(ctAboutImg == 1) {
          aboutImgIten.classList.add('first');
     } else if (ctAboutImg == 2) {
          aboutImgIten.classList.add('second');
     } else if(ctAboutImg == 3) {
          aboutImgIten.classList.add('third');
     } else {
          aboutImgIten.classList.add('fourth');
     }
     ctAboutImg++;
     q('#about #about-left').append(aboutImgIten);
     
});


//Função para exibir todos os cards de pokémons

pokedex.map((item) => {
     let pokedexCard = q('#models .card').cloneNode(true);
     pokedexCard.querySelector('.img-card img').src = item.img;
     pokedexCard.querySelector('.card-border-content h2').innerHTML = item.name;
     pokedexCard.querySelector('.num-card p').innerHTML = item.num;
     pokedexCard.querySelector('.buttons-card a').href = `/detalhes/${item.id}`;
     q('#pokemons-area').append(pokedexCard);
});



//Contadores
let ctAllImg = 1;
let ctGoSlide = 1;




setInterval(moveSliderAllImg, 830);
setInterval(goSlide, 6000);