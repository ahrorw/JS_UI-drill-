import $ from '../core';

$.prototype.setAttr = function(attr, value = '') { // Добавление атрибута и его значение
    for (let i = 0; i < this.length; i++) {
		if (!attr) {
			return this;
		}

		this[i].setAttribute(attr, value);
	}

	return this;
};
$.prototype.getAttr = function(attrName) { // получение значения атриубта
	
	for (let i = 0; i < this.length; i++) {
		return this[i].getAttribute(attrName);
	}
};

$.prototype.removeAttr = function(attr) { // удаление атрибута 
	for (let i = 0; i < this.length; i++) {
		if (!attr) {
			return this;
		}

		this[i].removeAttribute(attr);
	}

	return this;
};