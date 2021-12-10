
var botaoConversor = document.querySelector('#btn');

botaoConversor.addEventListener('click', function(e){
    e.preventDefault();
    let celsus = document.querySelector('input').value;
    
    if (celsus) {
        let fahre = celsus * 1.8 + 32;
        //console.log(fahre);
        let pararagrafo = document.querySelector('p');
        let ambNatual = document.querySelector('section');
        let fundo = document.querySelector('main')
        pararagrafo.textContent = `O valor convertido em Fahrenheit é ${fahre}`;

        if ((fahre > 68) & (fahre < 84.2)) {
            
            fundo.style.cssText=`
            background-image: url(img/ambiente.webp);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover`

        }else if (fahre >= 84.2) {
            
            fundo.style.cssText=`
            background-image: url(img/calor.webp);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover`

        }else{
            
            fundo.style.cssText=`
            background-image: url(img/frio.webp);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover`
        }
    }
})