/** Описывает отдельную карту, которая может отображаться картинкой вверх или вниз */
class Card {
    #img;
    #element; //узел
    #isFlipped = false;

    constructor(img) {
        this.#img = img;

        this.#element = document.createElement("div");
        this.#element.classList.add("card");
        this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        this.#element.connectedCard = this; // в св-ве DOM объекта будет находиться ссылка на экземпляр карты
    }
    // картинка вверх
    get imgPath() {
        return `${this.#img}`;
    }
    //картинка вниз
    get coverPath() {
        return "imgBG.jpg";
    }

    get element() {
        return this.#element;
    }
    // метод, переворачивающий карточку
    flip() {
        if (this.#isFlipped)
            this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        else 
            this.#element.style.backgroundImage = `url('${this.imgPath}')`;
        this.#isFlipped = !this.#isFlipped;
    }

    disconectFromDOM() {
        this.#element.connectedCard = null;
    }
}