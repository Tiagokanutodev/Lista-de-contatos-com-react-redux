const initialState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
  
      case "EDIT_CONTACT":
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id
              ? { ...contact, ...action.payload.updatedContact }
              : contact
          ),
        };
  
      case "REMOVE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default contactReducer;