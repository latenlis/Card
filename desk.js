/** Класс, отвечаюий за создание и тасование карт и содержащий список изображений карт */
class Desk {
    #cardsImg = ["Img1.jpeg", "Img2.jpeg", "Img3.jpeg", "Img4.jpeg", "Img5.jpeg",
                "Img6.jpeg", "Img7.jpeg", "Img8.jpeg"];
    constructor() {
        this.cards = [];
        this.#cardsImg.forEach(img => {
            this.cards.push(new Card(img));
            this.cards.push(new Card(img));
        });
    }
    //тасовка карт в случайном порядке
    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        //поиск карты в массиве карт
        let index = this.cards.findIndex(item => item.imgPath == card.imgPath); 
        if (index != -1) {
            this.cards.splice(index, 1); //удаление карточки из массива
            card.disconectFromDOM();
        }
    }
}