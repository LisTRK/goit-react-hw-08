// import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { fetchContacts, deleteContact, addContact } from './contactsOps';
// import { selectNameFilter } from './filtersSlice';

// const handlePending = (state) => {
//   state.loading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const handleFulfilled = (state) => {
//   state.loading = false;
//   state.error = null;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [
//       // {
//       //   id: 'id-1',
//       //   name: 'Rosie Simpson',
//       //   number: '459-12-56',
//       // },
//       // {
//       //   id: 'id-2',
//       //   name: 'Hermione Kline',
//       //   number: '443-89-1',
//       // },
//       // {
//       //   id: 'id-3',
//       //   name: 'Eden Clements',
//       //   number: '645-17-79',
//       // },
//       // {
//       //   id: 'id-4',
//       //   name: 'Annie Copeland',
//       //   number: '227-91-26',
//       // },
//     ],
//     loading: false,
//     error: null,
//   },

//   extraReducers: (builder) =>
//     builder
//       //fetchContacts
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         handleFulfilled(state);
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       //deleteContact
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         handleFulfilled(state);
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id,
//         );
//       })
//       .addCase(deleteContact.rejected, handleRejected)
//       //addContact
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         handleFulfilled(state);
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected),
// });
// export const actions = contactsSlice.actions;

// export default contactsSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;

// export const selectLoading = (state) => state.contacts.loading;

// export const selectError = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   },
// );
