import { showInConsole, showInDOM } from './components/show.js';
import product from './components/product.js';

showInConsole('info');
showInDOM('info2', 'h1');
showInDOM('info3');

showInConsole(product.name);
showInDOM(product.price, 'h1');
showInDOM(product.age);
