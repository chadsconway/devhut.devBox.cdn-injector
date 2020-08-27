import Injector from './Injector.js';
let formdiv = document.createElement('div');
// this div will be automatically removed after selecting cdn links to inject
if (document.body) {
	document.body.appendChild(formdiv);
}
let injector = new Injector();
