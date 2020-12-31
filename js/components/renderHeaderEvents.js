function renderHeaderEvents(header) {

    const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('body .menu');
    const bodyDOM = document.querySelector('main');

burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
  
            menuDOM.classList.toggle('show');
        //uzsideda ant burger icon spalva
            burgerDOM.classList.toggle('new');

    });
//izjungiame burger icon pakeitimus paspaudus visur, isskyrus button
    bodyDOM.addEventListener('click', () => {
    burgerDOM.classList.remove('new');
    
    });

/* kai scrolini pasikeicia header fonas */
    const activDOM = document.querySelector('.header');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            activDOM.classList.add("active");
        } else{
            activDOM.classList.remove("active");
        }
    };
    
    const vilniusDOM = document.querySelector('header .vilnius');
    const miestasDOM = document.querySelector('body .miestas');

    vilniusDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
            miestasDOM.classList.toggle('add');
    });
    const closeDOM = document.querySelector('body .close');

    closeDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
            miestasDOM.classList.remove('add');
    });

    const btnHover = document.querySelector('body .nav-btn');
    const basketStyle = document.querySelector('body .btn-hover');

    btnHover.addEventListener('mouseover', () => {
        //susirandame artimiausia tevini elementa div
            basketStyle.classList.add('display');
    });
    btnHover.addEventListener('mouseout', () => {
        //susirandame artimiausia tevini elementa div
            basketStyle.classList.remove('display');
    });

    const starHover = document.querySelector('body .men-delivery-time');
    const starH = document.querySelector('body .star-hover');

    starHover.addEventListener('mouseover', () => {
        //susirandame artimiausia tevini elementa div
            starH.classList.add('on');
    });
    starHover.addEventListener('mouseout', () => {
        //susirandame artimiausia tevini elementa div
            starH.classList.remove('on');
    });
    const menBtn = document.querySelector('header .men-btn');
    const menuBtnDom = document.querySelector('header .men-btn-box-shadow-b');
    const boxOn = document.querySelector('body .men-btn-box-on');
    const closeBtn = document.querySelector('header .men-btn-box-close');


    menBtn.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
            boxOn.classList.add('box-on');
    });

    menuBtnDom.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
            boxOn.classList.remove('box-on');
    });
    closeBtn.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
            boxOn.classList.remove('box-on');
    })

}

export { renderHeaderEvents };