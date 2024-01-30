     function aventuras(){

        let contAventuras = document.getElementById('aventuras');
        let contAnimadas = document.getElementById('animadas');
        let contDramas = document.getElementById('dramas');
        
        
        let btnAventuras = document.getElementById('btn-aventuras');
        let btmAnimadas = document.getElementById('btn-animadas');
        let btmDramas = document.getElementById('btn-dramas');

        contAventuras.classList.add('active');
        btnAventuras.classList.add('active');

        contAnimadas.classList.remove('active');
        contDramas.classList.remove('active');
        btmAnimadas.classList.remove('active');
        btmDramas.classList.remove('active');

        

     }

     function animadas(){

        let contAventuras = document.getElementById('aventuras');
        let contAnimadas = document.getElementById('animadas');
        let contDramas = document.getElementById('dramas');
        
        
        let btnAventuras = document.getElementById('btn-aventuras');
        let btmAnimadas = document.getElementById('btn-animadas');
        let btmDramas = document.getElementById('btn-dramas');

        contAnimadas.classList.add('active');
        btmAnimadas.classList.add('active');


        btnAventuras.classList.remove('active');
        contAventuras.classList.remove('active');
        contDramas.classList.remove('active');
        btmDramas.classList.remove('active');

        

     }

     function dramas(){

        let contAventuras = document.getElementById('aventuras');
        let contAnimadas = document.getElementById('animadas');
        let contDramas = document.getElementById('dramas');
        
        
        let btnAventuras = document.getElementById('btn-aventuras');
        let btmAnimadas = document.getElementById('btn-animadas');
        let btmDramas = document.getElementById('btn-dramas');
        
        contDramas.classList.add('active');
        btmDramas.classList.add('active');

        contAnimadas.classList.remove('active');
        btmAnimadas.classList.remove('active');
        btnAventuras.classList.remove('active');
        contAventuras.classList.remove('active');

        

     }


     function mostrarModal(){

        let contModel = document.getElementById('model');

        contModel.classList.add('active');


     }



     function cerrarModal(){
          let contModel = document.getElementById('model');


          contModel.classList.remove('active');
     }


     function menu(){

        let menu = document.getElementById('menu');

        menu.classList.toggle('active');
     }