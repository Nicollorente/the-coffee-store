const dom = document.addEventListener('DOMContentLoaded',function(){

const carouselCoffee=document.querySelector('#carousel-coffee');
const carouselMilkShake=document.querySelector('#carousel-milkshake');
const carouselFood=document.querySelector('#carousel-food')


const capaCoffee= document.getElementById('capa1');
const capaMilkShake= document.getElementById('capa2');
const capaFood= document.getElementById('capa3'); 



carouselCoffee.addEventListener('mouseover',function(){
    capaCoffee.style.transform='scale(1)';
    capaMilkShake.style.transform='scale(0)';
    capaFood.style.transform='scale(0)';

    carouselCoffee.addEventListener('mouseout',function(){
        capaCoffee.style.transform='scale(0)';
    })
})


carouselMilkShake.addEventListener('mouseover',function(){
    capaCoffee.style.transform='scale(0)';
    capaMilkShake.style.transform='scale(1)';
    capaFood.style.transform='scale(0)';

    carouselMilkShake.addEventListener('mouseout',function(){
        capaMilkShake.style.transform='scale(0)';
    })
})


carouselFood.addEventListener('mouseover',function(){
    capaCoffee.style.transform='scale(0)';
    capaMilkShake.style.transform='scale(0)';
    capaFood.style.transform='scale(1)';

    carouselFood.addEventListener('mouseout',function(){
        capaFood.style.transform='scale(0)';

    })
})

})
