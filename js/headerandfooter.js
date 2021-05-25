function hamberopen() {
    /*   console.log(':D'); */
    $('.mob_nav_ul').toggleClass('open');
    $('.hamber span').toggleClass('close');
    $('.hamber span::before').toggleClass('close');
    $('.hamber span::after').toggleClass('close');
  }