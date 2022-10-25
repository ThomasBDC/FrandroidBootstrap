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


document.querySelectorAll(".ChangeThemeDiv").forEach(div =>  {
     div.addEventListener("click", event => {
        let themeTarget = event.currentTarget.dataset.theme;

        if(themeTarget == "light"){
            //Je passe le site en mode light
            //Je récupère tous les élements qui ont la classe bg-dark
            //bg-dark -> bg-light
            
            document.querySelectorAll(".bg-dark").forEach(darkElement =>  {
                darkElement.classList.remove("bg-dark");
                darkElement.classList.add("bg-light");
            });

            document.querySelectorAll(".text-light").forEach(darkElement =>  {
                darkElement.classList.remove("text-light");
                darkElement.classList.add("text-dark");
            });

            
            document.querySelectorAll(".text-bg-dark").forEach(darkElement =>  {
                darkElement.classList.remove("text-bg-dark");
                darkElement.classList.add("text-bg-light");
            });

            document.querySelectorAll(".navbar-dark").forEach(darkElement =>  {
                darkElement.classList.remove("navbar-dark");
                darkElement.classList.add("navbar-light");
            });

            document.querySelectorAll(".btn-dark").forEach(darkElement =>  {
                darkElement.classList.remove("btn-dark");
                darkElement.classList.add("btn-light");
            });

            
            document.querySelectorAll(".dark").forEach(darkElement =>  {
                darkElement.classList.remove("dark");
                darkElement.classList.add("light");
            });
        }
        else if(themeTarget == "dark"){
            //Je passe le site en mode Dark
            document.querySelectorAll(".bg-light").forEach(darkElement =>  {
                darkElement.classList.remove("bg-light");
                darkElement.classList.add("bg-dark");
            });

            document.querySelectorAll(".text-dark").forEach(darkElement =>  {
                darkElement.classList.remove("text-dark");
                darkElement.classList.add("text-light");
            });

            document.querySelectorAll(".text-bg-light").forEach(darkElement =>  {
                darkElement.classList.remove("text-bg-light");
                darkElement.classList.add("text-bg-dark");
            });

            document.querySelectorAll(".navbar-light").forEach(darkElement =>  {
                darkElement.classList.remove("navbar-light");
                darkElement.classList.add("navbar-dark");
            });

            document.querySelectorAll(".btn-light").forEach(darkElement =>  {
                darkElement.classList.remove("btn-light");
                darkElement.classList.add("btn-dark");
            });

            
            document.querySelectorAll(".light").forEach(darkElement =>  {
                darkElement.classList.remove("light");
                darkElement.classList.add("dark");
            });
        }
     });
});