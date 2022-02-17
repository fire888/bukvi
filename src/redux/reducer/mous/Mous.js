
const initialState = {
  x: 2,
  y: 0,
  CasesNumBlock: 0
}


export function mousReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOUS_X':
      return {
        ...state,
        x: action.payload.content,
      }
    case 'SET_MOUS_Y':
      return {
        ...state,
        y: action.payload.content,
      }

      case 'SET_CASES_NUM_BLOCK':
        return {
          ...state,
          CasesNumBlock: action.payload.content,
        }
        case 'SET_CASES_NAME_BLOCK':
          return {
            ...state,
            CasesNameBlock: action.payload.content,
          }
        
    default:
      return state
  }

}





