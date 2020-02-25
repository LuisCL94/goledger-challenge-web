export default function title(state = true, action) {
  switch (action.type) {
    case "ACTIVATE_SELECTOR":
      return false;

    case "DEACTIVATE_SELECTOR":
      return true;

    default:
      return state;
  }
}
