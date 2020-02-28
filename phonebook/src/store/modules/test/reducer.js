export default function title(state = "", action) {
  switch (action.type) {
    case 'TEST':
      return "TEST";

    default:
      return state;
  }
}
