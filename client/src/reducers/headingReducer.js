
import { initialHeadingState } from '../components/ListHeadings'

//make updates to tableHeader for ascending/descending selection

export const headingReducer = (state, action) => {
  switch(action.type){
    case 'SELECT_COLUMN':
      if (state[action.payload].descending){
        return { ...initialHeadingState }
      } else if (state[action.payload].ascending || state[action.payload].descending){
          return {
          ...initialHeadingState,
          [action.payload]: {
            ...state[action.payload],
            ascending: !state[action.payload].ascending,
            descending: !state[action.payload].descending
            }
          }
        } else {
          return {
            ...initialHeadingState,
            [action.payload]: {
              ...state[action.payload],
              ascending: !state[action.payload].ascending,
            }
          }
        }
    default:
      return state
  }
}