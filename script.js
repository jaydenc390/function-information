function el(target, all){
  if(all){
    return document.querySelectorAll(target);
  } else {
    return document.querySelector(target);
  }
}


el("h1").innerText = "Hello World";

el ("p").innerText = "This is reusable";

el ("textarea"").value = "This is some content";
