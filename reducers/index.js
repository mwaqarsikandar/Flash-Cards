import { MyRECEIVE_DECKS, MyADD_DECK, MyADD_CARD, MyCLEAR_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case MyRECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case MyADD_DECK :
      const { deck } = action
      let data = state.decks
      return {
        ...state,
        decks: {
          ...data,
          [deck.title]: deck
        },
      }
    case MyADD_CARD :
      const { card, title } = action
      data = state.decks
      return {
        ...state,
        decks: {
          ...data,
          [title]: {
            title: title,
            questions: data[title].questions.concat([card])
          }
          // questions: data.questions.push(card)
        },
      }
    case MyCLEAR_DECKS :
      return {
        ...state,
        decks: {},
      }
    default :
      return state
  }
}

export default decks
