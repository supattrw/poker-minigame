import { useEffect, useState, useRef } from "react"
import Button from "../components/Button"
import { GameTable } from "../components/GameTable";
import { calculateScore, shuffleDeckBlackJack } from "../utils/Deck";

const MAX_CARDS = 10;

const BlackJack = () => {
   const [deck, setDeck] = useState([])
   const [playerHand, setPlayerHand] = useState([])
   const [botHand, setBotHand] = useState([])
   const [gameActive, setGameActive] = useState(false)
   const [playerStood, setPlayerStood] = useState(false)
   const [botStood, setBotStood] = useState(false)
   const [message, setMessage] = useState("")
   const [playerTurn, setPlayerTurn] = useState(true)
   const [botTrigger, setBotTrigger] = useState(0)

   const playerScore = calculateScore(playerHand)
   const botScore = calculateScore(botHand)

    const handleStartGame = () => {
        const freshDeck = shuffleDeckBlackJack()
        const pHand = [freshDeck.pop(), freshDeck.pop()]
        const bHand = [freshDeck.pop(), freshDeck.pop()]

        setDeck(freshDeck)
        setPlayerHand(pHand)
        setBotHand(bHand)
        setPlayerStood(false)
        setBotStood(false)
        setPlayerTurn(true)
        setBotTrigger(0)
        setMessage("")
        setGameActive(true)
    }

    const handleEndGame = () => {
        setGameActive(false)
        setPlayerHand([])
        setBotHand([])
        setMessage("")
    }

    const drawCard = (setHand, hand) => {
        if (deck.length === 0) return hand
        const newDeck = [...deck]
        const card = newDeck.pop()
        setDeck(newDeck)
        const newHand = [...hand, card]
        setHand(newHand)
        return newHand
    }

    useEffect(() => {
        handleStartGame()
    }, [])

    const handlePlayerHit = () => {
        const newHand = drawCard(setPlayerHand, playerHand)
        const score = calculateScore(newHand)
        if (score > 21 || newHand.length >= MAX_CARDS) {
            setPlayerStood(true)
        }
        setPlayerTurn(false)
        setBotTrigger(t => t + 1)
    }

    const handlePlayerStand = () => {
        setPlayerStood(true)
        setPlayerTurn(false)
        setBotTrigger(t => t + 1)
    }

    const botHandRef = useRef(botHand)
    const deckRef = useRef(deck)
    const playerStoodRef = useRef(playerStood)

    useEffect(() => { botHandRef.current = botHand }, [botHand])
    useEffect(() => { deckRef.current = deck }, [deck])
    useEffect(() => { playerStoodRef.current = playerStood }, [playerStood])

    useEffect(() => {
        if (!gameActive || botStood || botTrigger === 0) return 

        const timer = setTimeout(() => {
            let hand = [...botHandRef.current]
            let currentDeck = [...deckRef.current]

            const card = currentDeck.pop()
            hand.push(card)

            setBotHand(hand)
            setDeck(currentDeck)

            if (calculateScore(hand) >= 17 || hand.length >= MAX_CARDS) {
                setBotStood(true)
                setPlayerTurn(true)
            } else if (playerStoodRef.current) {
                setBotTrigger(t => t + 1)
            } else {
                setPlayerTurn(true)
            }
        }, 800)

        return () => clearTimeout(timer)
    }, [botTrigger])

    useEffect(() => {
        if (!gameActive || !botStood || !playerStood || message) return

        let result

        if (playerScore > 21 && botScore > 21) result = "It's a tie."
        else if (playerScore > 21) result = "You lose."
        else if (botScore > 21) result = "You win."
        else if (playerScore > botScore) result = "You win."
        else if (playerScore < botScore) result = "You lose."
        else result = "It's a tie."

        setMessage(result)
    }, [botStood, playerStood])

    const getScoreLine = () => {
    if (message) {
        return `You: ${playerScore} | Bot: ${botScore}`
    }

    if (botHand.length === 0) {
        return `You: ${playerScore} | Bot: ?`
    }

    // Bot's first card is hidden until the round ends, so calculate the score
    // from only the visible (non-first) cards
    const visibleBotScore = calculateScore(botHand.slice(1))

    if (botStood && playerStood) {
        return `You: ${playerScore} | Bot: ${visibleBotScore} + ? (calculating...)`
    }

    if (playerTurn) {
        return `You: ${playerScore} | Bot: ${visibleBotScore} + ?`
    }

    return `You: ${playerScore} | Bot: ${visibleBotScore} + ? (bot thinking...)`
}

return (
    <GameTable
        botHand={botHand}
        playerHand={playerHand}
        playerTurn={playerTurn}
        hideBotFirstCard={!message}
        deckCount={deck.length}
        status={message}
        message={getScoreLine()}
        controls={
            <>
                {!playerStood && (
                    <>
                        <Button className="w-72" variant="primary" onClick={handlePlayerHit}>
                            Call for more
                        </Button>
                        <Button className="w-32" variant="secondary" onClick={handlePlayerStand}>
                            Stand
                        </Button>
                    </>
                )}
                {message && (
                    <Button className="w-64" variant="primary" onClick={handleStartGame}>
                        Start A New Game
                    </Button>
                )}
            </>
        }
    />
)
}

export default BlackJack