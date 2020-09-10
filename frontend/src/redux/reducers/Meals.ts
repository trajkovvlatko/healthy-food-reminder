import IMeal from 'interfaces/IMeal';

export const MEALS_SET = 'MEALS/SET';
export const MEALS_ADD = 'MEALS/ADD';
export const MEALS_REMOVE = 'MEALS/REMOVE';

const defaultState: IMeal[] = [];

export default function mealsReducer(state = defaultState, action: any) {
  switch (action.type) {
    case MEALS_ADD:
      return [action.payload, ...state];
    case MEALS_REMOVE:
      return state.filter((s: IMeal) => s.id !== action.payload);
    case MEALS_SET:
      return action.payload;
    default:
      return state;
  }
}
