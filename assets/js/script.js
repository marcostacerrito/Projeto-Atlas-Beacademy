function menuShow ()  {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove ('open');
        document.querySelector('.icon').src="assets/img/Icons8-Windows-8-Very-Basic-Menu.512";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="assets/img/Steve-Zondicons-Close.512";
        
    }

    
  
      
}

