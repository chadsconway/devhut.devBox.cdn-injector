import { data } from './data.js';

function Injector() {
	this.isDebug = false;
	this.dataMap = this.createMapOfData();
	this.form = this.buildSelectionform(this.dataMap);
	this.formdiv = document.querySelector('#formdiv');
	this.formdiv.appendChild(this.form);
	this.submitButton = document.querySelector('#formSubmitButton');
	this.submitButton.addEventListener('click', this.handleFormSubmit, false);
	this.submitButton.dataMap = this.dataMap;
	this.submitButton.injectorThis = this;
}

/**
 * prototype is Object
 *  */

Injector.prototype = Object.create(Object.prototype);

/**
 * @function createMapOfData()
 */
Injector.prototype.createMapOfData = function () {
	let dataMap = new Map();
	let i = 0;
	while (i < data.length) {
		dataMap.set(data[i].name, { type: data[i].type, cdn: data[i].cdn });
		i++;
	}
	return dataMap;
};

/**
 * @function buildSelectionform
 */
Injector.prototype.buildSelectionform = function (dataMap) {
	let selections = dataMap.keys();
	const form = document.createElement('form');
	let selection = selections.next();
	while (!selection.done) {
		let brk = document.createElement('br');
		let inp = document.createElement('input');
		inp.setAttribute('type', 'checkbox');
		inp.setAttribute('value', selection.value);
		inp.setAttribute('id', selection.value);
		let lab = document.createElement('label');
		lab.setAttribute('for', selection.value);
		lab.innerHTML = selection.value;
		form.appendChild(inp);
		form.appendChild(lab);
		form.appendChild(brk);
		selection = selections.next();
	}
	let btn = document.createElement('button');
	btn.setAttribute('id', 'formSubmitButton');
	btn.setAttribute('value', 'submit');
	btn.innerHTML = 'Submit';
	form.appendChild(btn);

	return form;
};

/**
 * @function handleFormSubmit(event)
 */
Injector.prototype.handleFormSubmit = function (event) {
	event.preventDefault();
	let i = 0;
	(async function () {
		let updateDataMap = async function () {
			for (let i = 0; i < 16; i++) {
				if (event.currentTarget.form[i].checked === false) {
					event.currentTarget.dataMap.delete(event.currentTarget.form[i].value);
				}
			}
		};
		let addTags = async function () {
			for (let [key, value] of event.currentTarget.dataMap) {
				event.currentTarget.injectorThis.addTag(value);
			}
		};
		let cleanUp = async function () {
			let formdiv = document.querySelector('#formdiv');
			formdiv.remove();
		};
		await updateDataMap();
		await addTags();
		await cleanUp();
	})();
};
/**
 * @function addTag
 */
Injector.prototype.addTag = function (val) {
	if (val.type === 'LINK') {
		this.addLinkTag(val.cdn);
	} else if (val.type === 'SCRIPT') {
		this.addScriptTag(val.cdn);
	} else if (val.type === 'SCRIPTMODULE') {
		this.addScriptModuleTag(val.cdn);
	}
};
/**
 * @function addLinkTag(pin)
 */
Injector.prototype.addLinkTag = function (pin) {
	let link = document.createElement('link');
	link.setAttribute('href', pin);
	document.head.append(link);
};

Injector.prototype.addScriptTag = function (pin) {
	let script = document.createElement('script');
	script.setAttribute('src', pin);
	document.body.append(script);
};

Injector.prototype.addScriptModuleTag = function (pin) {
	let script = document.createElement('script');
	script.setAttribute('src', pin);
	script.setAttribute('type', 'module');
	document.body.append(script);
};

export { Injector as default };
export { Injector };
