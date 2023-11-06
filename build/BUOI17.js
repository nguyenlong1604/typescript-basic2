"use strict";
class Caculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    ;
    sum() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mul() {
        return this.a * this.b;
    }
    div() {
        return this.a / this.b;
    }
    pow() {
        return Math.pow(this.a, this.b);
    }
}
/*
const createNewBook: Function = function () : void {
    let nameElement: HTMLInputElement | null = (<HTMLInputElement>document.getElementById("name"));
    // let nameElement = document.getElementById("name");
 
    let bookName: string = "";
    if (nameElement) {
        bookName = nameElement.value;
    }
 
    let descriptionElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=description]'));
    let desciption: string = "";
    if (descriptionElement) {
        desciption = descriptionElement.value;
    }
 
    let priceElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=price]'));
    let price: number = 0;
    if (priceElement) {
        price = parseInt(priceElement.value);
    }
 
    let hirePriceElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=hire_price]'));
    let hirePrice: number = 0;
    if (hirePriceElement) {
        hirePrice = parseInt(hirePriceElement.value);
    }
 
    let library = new Library.Library();
 
    library.addBook(bookName, desciption, price, hirePrice)
    library.printBook()
}
*/
const Caculate = () => {
    const resultElement = document.getElementById('result');
    const aValue = parseInt(document.querySelector(`[name=a]`).value);
    const bValue = parseInt(document.querySelector(`[name=b]`).value);
    if (resultElement) {
        let resultHtml = [];
        let calc = new Caculator(aValue, bValue);
        resultHtml.push(`<p>Ket qua cua phep cong ${calc.sum()} <p>`);
        resultHtml.push(`<p>Ket qua cua phep tru ${calc.sub()} <p>`);
        resultHtml.push(`<p>Ket qua cua phep nhan ${calc.mul()} <p>`);
        resultHtml.push(`<p>Ket qua cua phep chia ${calc.div()} <p>`);
        resultElement.innerHTML = resultHtml.join('');
    }
};
