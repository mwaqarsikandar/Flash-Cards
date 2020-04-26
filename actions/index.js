import { getDecks } from '../utils/api'

export const MyRECEIVE_DECKS = 'MyRECEIVE_DECKS'
export const MyADD_DECK = 'MyADD_DECK'
export const MyADD_CARD = 'MyADD_CARD'
export const MyCLEAR_DECKS = 'MyCLEAR_DECKS'

export function receiveDecks (decks) {
  return {
    type: MyRECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: MyADD_DECK,
    deck,
  }
}
export function addCard (card, title) {
  return {
    type: MyADD_CARD,
    card,
    title,
  }
}

export function clearCustomDecks () {
  return {
    type: MyCLEAR_DECKS,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return getDecks ()
      .then((decks) => {
        dispatch(receiveDecks({ decks }))
      })
  }
}