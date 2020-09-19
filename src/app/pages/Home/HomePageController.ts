const view = require('./HomePage.html');
const style = require('./HomePageStyle.scss');


export class HomePageController {

    view = view;
    viewId: string = "home-page"

    constructor() { 
        
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }

}
