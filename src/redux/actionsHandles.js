export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

export const handleFetchContactsFulfilled = (state, action) => {
  handleFulfilled(state);
  state.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  handleFulfilled(state);
  state.items.push(action.payload);
};

export const handleDeleteContactFulfilled = (state, action) => {
  handleFulfilled(state);
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
