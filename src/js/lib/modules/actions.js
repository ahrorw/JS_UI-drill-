import $ from '../core';

$.prototype.html = function(content){
    for (let i = 0; i < this.length; i++) {
        if (content){
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
};
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};
$.prototype.index = function(){
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    return childs.findIndex((item, i) => {
        return item == this[0];
    });
};
$.prototype.find = function(selector) {
    let numberOfIndex = 0,
        counter = 0;
    const copyObj = Object.assign({}, this);
    for (let i = 0; i < copyObj.length; i++){
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }
        numberOfIndex += arr.length;
    }
    this.length = numberOfIndex;
    const objLength = Object.keys(this).length;
    for (; numberOfIndex < objLength; numberOfIndex++){
        delete this[numberOfIndex];
    }
    return this;
};