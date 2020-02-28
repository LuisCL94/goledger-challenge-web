export default function title(state = [], action) {
  switch (action.type) {
    case "ALL_COMPANIES_DATA":
      return action.payload

    default:
      return state;
  }
}
