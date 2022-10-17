document.addEventListener('scroll', (e) => {
    let btnScrollTop = document.getElementById("scrollTop");
    if(window.scrollY > 150){
        //Je veux afficher le bouton
        btnScrollTop.style.display = "initial";
    }
    else{
        //Je veux masquer le bouton
        btnScrollTop.style.display = "none";
    }
  });