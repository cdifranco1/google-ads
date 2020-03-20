



export const headingReducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch(action.type){
    case 'SELECT_COLUMN':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          selected: !state[action.payload].selected
        }
      }
    default:
      return state
  }
}