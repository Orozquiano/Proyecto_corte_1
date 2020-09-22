const view = require('./WorksPage.html');
const style = require('./WorksPageStyle.scss');


export class WorksPageController {

    view = view;
    viewId: string = "WorksPage"

    constructor() { 
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }

    start(){
        console.log("Works Loaded");
        let any1 = document.getElementById('sec1');
        let any2 = document.getElementById('sec2');
        let any3 = document.getElementById('sec3');
        let any4 = document.getElementById('sec4');
        let any5 = document.getElementById('sec5');

        let Pobj1 = any1.getBoundingClientRect().top;
        let Pobj2 = any2.getBoundingClientRect().top;
        let Pobj3 = any3.getBoundingClientRect().top;
        let Pobj4 = any4.getBoundingClientRect().top;
        let Pobj5 = any5.getBoundingClientRect().top;
        window.onscroll = (_:any) =>{
            /**
             * se realiza una comparacion entre la posicion del objeto
             * contra la posicion vertical media de la pantalla
             */
            console.log(window.scrollY);
            if((window.scrollY+window.innerHeight/2)>=Pobj1){
                any1.style.opacity='1';
                console.log("entro1")
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj2){
                any2.style.opacity='1';
                console.log("entro2")
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj3){
                any3.style.opacity='1';
                console.log("entro3")
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj4){
                any4.style.opacity='1';
                console.log("entro4")
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj5){
                any5.style.opacity='1';
                console.log("entro5")
            }

        }
    }

}
