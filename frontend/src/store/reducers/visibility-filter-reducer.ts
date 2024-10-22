import { VisibilityFilters } from "../actions";

// Define the type for the action
interface SetVisibilityFilterAction {
  type: "SET_VISIBILITY_FILTER";
  filter: VisibilityFilters;
}

type VisibilityFilterAction = SetVisibilityFilterAction;

const visibilityFilterReducer = (
  state: VisibilityFilters = VisibilityFilters.SHOW_ALL,
  action: VisibilityFilterAction
): VisibilityFilters => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
