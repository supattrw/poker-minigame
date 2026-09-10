import { cards } from "../constants";

const builDeckBlackJack = () => {
    return cards
        .filter(c => c.value !== null)
        .map(c => ({
            ...c, 
            blackjackValue: c.value > 10 ? 10 : c.value === 1 ? 11 : c.value,
        }))
}

const shuffleDeckBlackJack = () => {
    const deck = builDeckBlackJack()
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
}


const calculateScore = (hand) => {
    let total = hand.reduce((sum, c) => sum + c.blackjackValue, 0);
    let aces = hand.filter( c => c.name.endsWith('_A')).length

    while (total > 21 && aces > 0) {
        total -= 10
        aces -= 1
    }

    return total;
}


export {
    shuffleDeckBlackJack,
    calculateScore,
}