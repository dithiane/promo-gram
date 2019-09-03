const helloReducer = (state = {}, action) => {
  switch (action.type) {
      case 'GREETING':
          return {
            greeting: action.payload
          };
      default:
          return state;
  }
}

export default helloReducer;