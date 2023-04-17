/** Управляет игрой, запоминает какие карты были открыты, управляет колодой и считает кол-во попыток
 * Связывает JS код с пользовательским интерфейсом
*/
class Game {
    #boardElement; //DOM элемент, в котором будут отображаться карточки
    #colElement; // DOM элемент, в котором будут отображаться номера попыток
    #desk = new Desk(); // виртуальная колода
    #firsCard = null; // поля выбранны карт
    #secondCard = null;
    #attemptNumber = 0; // кол-во попыток
    colCard = 0;

    constructor(board, colNumber) {
        if (typeof board === "string") {
            this.#boardElement = document.querySelector(board);
        }
        else {
            this.#boardElement = board;
        }

        if (typeof colNumber === "string") {
            this.#colElement = document.querySelector(colNumber);
        }
        else {
            this.#colElement = colNumber;
        }
    }
    //метод, запускающий игру
    startGame() {
        this.colCard = 0;
        this.attemptNumber = 0;
        this.#desk = new Desk();
        this.#boardElement.innerHTML = "";
        this.shuffleAndDeal();
    }
    //метод перетасовки и раскладки карточек
    shuffleAndDeal() {
        this.#desk.shuffle();
        this.#desk.cards.forEach(card => {
            this.#boardElement.append(card.element);
        });
    }
    //метод, определяюий правила игры
    selectCard(card) {
        if (card == this.#firsCard) return; //если второй раз нажата одна и та же карта
        card.flip();
        // проверка значений двуx полей 
        //если нет совпадений, то карты не совпали и нужно перевернуть и рубашкой вверх
        if (this.#firsCard && this.#secondCard) {
            this.#firsCard.flip();
            this.#secondCard.flip();
            this.#firsCard = this.#secondCard = null;
        }
        // запоминание первой и второй выбранной карты
        if (this.#firsCard == null) {
            this.#firsCard = card;
        }
        else if (this.#secondCard == null) {
            this.attemptNumber++;
            this.#secondCard = card;
        //проверка на совпадение карт
            if (this.#firsCard.imgPath === this.#secondCard.imgPath) {
            //убиарются карты из колоды, но остаются в DOM
                this.#desk.removeCard(this.#firsCard);
                this.#desk.removeCard(this.#secondCard);
                this.#firsCard = this.#secondCard = null;
                this.colCard ++;
            }
        }
        if (this.colCard == 8 ) {
            alert("Поздравляем! Вы прошли игру!");
            this.colCard = 0;
        }
    }
    // возвращает значение счетчика
    get attemptNumber() { 
        return this.#attemptNumber;
    }
    // устанавливает значение счетчика
    set attemptNumber(value) {
        this.#attemptNumber = value;
        this.#colElement.innerHTML = value;
    }
}