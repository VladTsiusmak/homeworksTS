/*
* #EP5I1UUzAX
Взяти описану колоду  bolvdlhP карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
* */

// @ts-ignore
const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
// @ts-ignore
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

// @ts-ignore
const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        // @ts-ignore
        const card: Card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

interface Accumulator {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

const reduce = cards.reduce((accum:Accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }

    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});


console.log(reduce);
