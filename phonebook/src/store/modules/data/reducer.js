export default function title(state = [], action) {
  switch (action.type) {
    case 'ASSET_TYPE_INFO':
      return action.payload;

    default:
      return state;
  }
}
