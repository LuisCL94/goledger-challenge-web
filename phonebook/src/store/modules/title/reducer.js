export default function title(state="", action) {
  switch(action.type) {
    case 'SET_TITLE_SEARCH':
      return "Search";

    case 'SET_TITLE_VIEW' :
      return "Info";
    
    case 'SET_TITLE_EDIT':
      return "Edit";
    
    case 'SET_TITLE_ADD':
      return "Add";
      
    default:
      return state;
  }
}
