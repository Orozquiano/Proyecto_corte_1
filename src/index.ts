// cargamos lodash, por defecto los elementos a importar sin ruta serán buscados en los módulos de node
import * as _ from 'lodash';
//import {sum} from './maths'

interface User{
  name: string;
  lastname: string;
  age: number;
}
/**
 * 
 * 
 */

function component(user: User) {
  const element = document.createElement('div');
  // el caractér _ hace referencia a una biblioteca llamada lodash que será muy útil
  element.innerHTML = `Hola WebPack! Mi nombre es ${user.name} ${user.lastname} y tengo ${user.age} años` 
  
  return element;
}
document.body.appendChild(component({name: "Juan Pablo",lastname: "Orozco",age: 18}));
