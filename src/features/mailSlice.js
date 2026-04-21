import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
    selectedMessage: null,
    sidebarIsOpen: false,
    activeFilter: 'all',
    userEmail: localStorage.getItem('userEmail') || ''
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
      localStorage.setItem('userEmail', action.payload);
    }
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  openMessage,
  toggleSidebar,
  setActiveFilter,
  setUserEmail
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;
export const selectSidebarIsOpen = (state) => state.mail.sidebarIsOpen;
export const selectActiveFilter = (state) => state.mail.activeFilter;
export const selectUserEmail = (state) => state.mail.userEmail;

export default mailSlice.reducer;
