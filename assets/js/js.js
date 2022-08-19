const elementCart = document.querySelector('.header__cart-wrap');
const elementCartList = document.querySelector('.header__cart-list');
const elementApp  = document.querySelector('.app');



elementCart.addEventListener('click',function(e){
   e.stopPropagation();
    if(elementCartList.style.display == 'none'){
        elementCartList.style.display = 'block';
    }
    else{
        elementCartList.style.display = 'none';

    }

})


elementApp.addEventListener('click', function(){
    elementCartList.style.display = 'none';
});
document.addEventListener('scroll', function(){
    elementCartList.style.display = 'none';
});

