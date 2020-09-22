const view = require('./QuienSoyPage.html');
const style = require('./QuienSoyPageStyle.scss');


export class QuienSoyPageControlls{
    view = view;
    viewId: string = "Quien_Soy"

    constructor() {
        
    }
    start(){
        let animacion = document.getElementById('animado');
        let positionObj1 = animacion.getBoundingClientRect().top;
        window.onscroll = (_:any) =>{

            let tamañoDePantalla = (window.innerHeight)/3;
            console.log(tamañoDePantalla);

            if(positionObj1>tamañoDePantalla || positionObj1<tamañoDePantalla){
                animacion.style.animation = 'mover 2s ease-out';
                animacion.style.opacity= '1';
            }

        }    
        
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }

}