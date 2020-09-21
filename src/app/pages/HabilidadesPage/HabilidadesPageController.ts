const view = require('./HabilidadesPage.html');
const style = require('./HabilidadesPageStyle.scss');


export class HabilidadesPageController {

    view = view;
    viewId: string = "Habilidades-page"

    constructor() { 
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }

    start(){
        let animacion = document.getElementById('animado');
        let positionObj1 = animacion.getBoundingClientRect().top;
        window.onscroll = (_:any) =>{

            let tamañoDePantalla = (window.innerHeight)/2;
            console.log(tamañoDePantalla);

            if(positionObj1>tamañoDePantalla || positionObj1<tamañoDePantalla){
                animacion.style.animation = 'mover 2s ease-out';
            }

        }    
        
    }

}
