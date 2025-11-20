function el(target, all){
  if(all){
    return document.querySelectorAll(target);
  } else {
    return document.querySelector(target);
  }
}
