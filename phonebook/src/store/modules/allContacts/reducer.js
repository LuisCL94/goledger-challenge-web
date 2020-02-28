export default function title(state = [], action) {
  switch (action.type) {
    case "ALL_CONTACTS_DATA":
      return action.payload;

    default:
      return state;
  }
}
