const cards = [
    { name: "spades_A", face: "spades", value: 1, isAce: true, imgPath: "/cards/spades_A.png" },
    { name: "spades_2", face: "spades", value: 2, isAce: false, imgPath: "/cards/spades_2.png" },
    { name: "spades_3", face: "spades", value: 3, isAce: false, imgPath: "/cards/spades_3.png" },
    { name: "spades_4", face: "spades", value: 4, isAce: false, imgPath: "/cards/spades_4.png" },
    { name: "spades_5", face: "spades", value: 5, isAce: false, imgPath: "/cards/spades_5.png" },
    { name: "spades_6", face: "spades", value: 6, isAce: false, imgPath: "/cards/spades_6.png" },
    { name: "spades_7", face: "spades", value: 7, isAce: false, imgPath: "/cards/spades_7.png" },
    { name: "spades_8", face: "spades", value: 8, isAce: false, imgPath: "/cards/spades_8.png" },
    { name: "spades_9", face: "spades", value: 9, isAce: false, imgPath: "/cards/spades_9.png" },
    { name: "spades_10", face: "spades", value: 10, isAce: false, imgPath: "/cards/spades_10.png" },
    { name: "spades_J", face: "spades", value: 11, isAce: false, imgPath: "/cards/spades_J.png" },
    { name: "spades_Q", face: "spades", value: 12, isAce: false, imgPath: "/cards/spades_Q.png" },
    { name: "spades_K", face: "spades", value: 13, isAce: false, imgPath: "/cards/spades_K.png" },
    { name: "diamonds_A", face: "diamonds", value: 1, isAce: true, imgPath: "/cards/diamonds_A.png" },
    { name: "diamonds_2", face: "diamonds", value: 2, isAce: false, imgPath: "/cards/diamonds_2.png" },
    { name: "diamonds_3", face: "diamonds", value: 3, isAce: false, imgPath: "/cards/diamonds_3.png" },
    { name: "diamonds_4", face: "diamonds", value: 4, isAce: false, imgPath: "/cards/diamonds_4.png" },
    { name: "diamonds_5", face: "diamonds", value: 5, isAce: false, imgPath: "/cards/diamonds_5.png" },
    { name: "diamonds_6", face: "diamonds", value: 6, isAce: false, imgPath: "/cards/diamonds_6.png" },
    { name: "diamonds_7", face: "diamonds", value: 7, isAce: false, imgPath: "/cards/diamonds_7.png" },
    { name: "diamonds_8", face: "diamonds", value: 8, isAce: false, imgPath: "/cards/diamonds_8.png" },
    { name: "diamonds_9", face: "diamonds", value: 9, isAce: false, imgPath: "/cards/diamonds_9.png" },
    { name: "diamonds_10", face: "diamonds", value: 10, isAce: false, imgPath: "/cards/diamonds_10.png" },
    { name: "diamonds_J", face: "diamonds", value: 11, isAce: false, imgPath: "/cards/diamonds_J.png" },
    { name: "diamonds_Q", face: "diamonds", value: 12, isAce: false, imgPath: "/cards/diamonds_Q.png" },
    { name: "diamonds_K", face: "diamonds", value: 13, isAce: false, imgPath: "/cards/diamonds_K.png" },
    { name: "clubs_A", face: "clubs", value: 1, isAce: true, imgPath: "/cards/clubs_A.png" },
    { name: "clubs_2", face: "clubs", value: 2, isAce: false, imgPath: "/cards/clubs_2.png" },
    { name: "clubs_3", face: "clubs", value: 3, isAce: false, imgPath: "/cards/clubs_3.png" },
    { name: "clubs_4", face: "clubs", value: 4, isAce: false, imgPath: "/cards/clubs_4.png" },
    { name: "clubs_5", face: "clubs", value: 5, isAce: false, imgPath: "/cards/clubs_5.png" },
    { name: "clubs_6", face: "clubs", value: 6, isAce: false, imgPath: "/cards/clubs_6.png" },
    { name: "clubs_7", face: "clubs", value: 7, isAce: false, imgPath: "/cards/clubs_7.png" },
    { name: "clubs_8", face: "clubs", value: 8, isAce: false, imgPath: "/cards/clubs_8.png" },
    { name: "clubs_9", face: "clubs", value: 9, isAce: false, imgPath: "/cards/clubs_9.png" },
    { name: "clubs_10", face: "clubs", value: 10, isAce: false, imgPath: "/cards/clubs_10.png" },
    { name: "clubs_J", face: "clubs", value: 11, isAce: false, imgPath: "/cards/clubs_J.png" },
    { name: "clubs_Q", face: "clubs", value: 12, isAce: false, imgPath: "/cards/clubs_Q.png" },
    { name: "clubs_K", face: "clubs", value: 13, isAce: false, imgPath: "/cards/clubs_K.png" },
    { name: "hearts_A", face: "hearts", value: 1, isAce: true, imgPath: "/cards/hearts_A.png" },
    { name: "hearts_2", face: "hearts", value: 2, isAce: false, imgPath: "/cards/hearts_2.png" },
    { name: "hearts_3", face: "hearts", value: 3, isAce: false, imgPath: "/cards/hearts_3.png" },
    { name: "hearts_4", face: "hearts", value: 4, isAce: false, imgPath: "/cards/hearts_4.png" },
    { name: "hearts_5", face: "hearts", value: 5, isAce: false, imgPath: "/cards/hearts_5.png"},
    { name: "hearts_6", face: "hearts", value: 6, isAce: false, imgPath: "/cards/hearts_6.png" },
    { name: "hearts_7", face: "hearts", value: 7, isAce: false, imgPath: "/cards/hearts_7.png" },
    { name: "hearts_8", face: "hearts", value: 8, isAce: false, imgPath: "/cards/hearts_8.png" },
    { name: "hearts_9", face: "hearts", value: 9, isAce: false, imgPath: "/cards/hearts_9.png" },
    { name: "hearts_10", face: "hearts", value: 10, isAce: false, imgPath: "/cards/hearts_10.png" },
    { name: "hearts_J", face: "hearts", value: 11, isAce: false, imgPath: "/cards/hearts_J.png" },
    { name: "hearts_Q", face: "hearts", value: 12, isAce: false, imgPath: "/cards/hearts_Q.png" },
    { name: "hearts_K", face: "hearts", value: 13, isAce: false, imgPath: "/cards/hearts_K.png" },
];

const backCard = "/cards/clubs_extra.png";

const jokers = [
    { name: "hearts_joker", face: "hearts", value: null, isAce: false, imgPath: "/cards/hearts_joker.png" },
    { name: "hearts_extra", face: "hearts", value: null, isAce: false, imgPath: "/cards/hearts_extra.png" },
    { name: "clubs_joker", face: "clubs", value: null, isAce: false, imgPath: "/cards/clubs_joker.png" },
    { name: "clubs_extra", face: "clubs", value: null, isAce: false, imgPath: "/cards/clubs_extra.png" },
    { name: "diamonds_joker", face: "diamonds", value: null, isAce: false, imgPath: "/cards/diamonds_joker.png" },
    { name: "diamonds_extra", face: "diamonds", value: null, isAce: false, imgPath: "/cards/diamonds_extra.png" },
    { name: "spades_joker", face: "spades", value: null, isAce: false, imgPath: "/cards/spades_joker.png" },
    { name: "spades_extra", face: "spades", value: null, isAce: false, imgPath: "/cards/spades_extra.png" },
]

const navLinks = [
    { name: "Black Jack", link: "/blackjack" },
    { name: "Classic Poker", link: "/classic-poker" },
    { name: "Texas Hold'em", link: "/texas-holdem" },
    {name: "Tutorial", link: "/tutorial"}
]

const buttonVariants = {
    primary: "bg-pink text-black h-16 text-3xl hover:bg-black hover:text-white",
    secondary: "bg-black text-white hover:bg-pink hover:text-black h-10",
    danger: "bg-red text-white hover:bg-white hover:text-red",
}


export {
    cards,
    backCard,
    navLinks,
    buttonVariants,
}