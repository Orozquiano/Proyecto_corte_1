import { count } from './counter'
import { HomePageController } from './pages/Home/HomePageController'
class App {
  
  mainPages = [
    HomePageController
  ];

  render() {
    const component = this.component();
    this.mainPages.forEach(pageController => {
    
      const [elId, element] = new pageController().getView();
      component.appendChild(this.createPage(elId, element));
    })
    
    document.body.append(component);
  }

  createPage(id: string, element: DocumentFragment) {
    const page = document.createElement('div');
    page.id = id;
    page.appendChild(element);
    return page;
  }

  component() {
    const element = document.createElement('div');
    element.id = "app";
    return element;
  }
}

const app = new App();
app.render();
