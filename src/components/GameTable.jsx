import { motion, AnimatePresence } from "framer-motion"
import { backCard } from "../constants"

const Hand = ({ hand, hideFirstCard, position }) => {
    const flyFrom = position === 'top' ? 150 : -150

    return (
        <div className="hand-table">
            <AnimatePresence>
                {hand.map((card, i) => (
                    <motion.img
                        key={card.name + i}
                        layoutId={card.name + i}
                        src={i === 0 && hideFirstCard ? backCard : card.imgPath}
                        initial={{ x: 0, y: flyFrom, opacity: 1 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 450, damping: 50 }}
                        className="placement"
                        alt={card.name}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

const DeckStack = ({ count }) => {
    const visualCards = Math.min(count, 5)
    const stackWidth = 80 + (visualCards - 1) * 16

    return (
        <div className="placement" style={{ width: stackWidth, height: 140, position: "relative" }}>
            {Array.from({ length: visualCards }).map((_, i) => (
                <img
                    key={i}
                    src={backCard}
                    alt="deck"
                    className="placement"
                    style={{
                        left: i * 32,
                        zIndex: visualCards - i,
                        position: "absolute",
                    }}
                />
            ))}
        </div>
    )
}

const GameTable = ({
    botHand = [],
    playerHand = [],
    hideBotFirstCard = false,
    deckCount = 0,
    status,
    message,
    controls,
}) => {
    return (
        <div className="grid grid-cols-3 w-full h-full">
            <div className="game-table col-span-2">
                <Hand hand={botHand} hideFirstCard={hideBotFirstCard} position="top" />

                <div className="text-center text-black flex items-center justify-center">
                    <DeckStack count={deckCount} />
                </div>

                <div className="placement">
                    <Hand hand={playerHand} hideFirstCard={false} position="bottom" />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 p-6 justify-center">
                {status && <h1 className="subtitle">{status}</h1>}
                {message && <h1>{message}</h1>}
                {controls}
            </div>
        </div>
    )
}

export {
    GameTable,
}