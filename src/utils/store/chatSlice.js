import { createSlice } from "@reduxjs/toolkit";

// const useConversation = create((set) => ({
// 	selectedConversation: null,
// 	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
// 	messages: [],
// 	setMessages: (messages) => set({ messages }),
// }));

// export default useConversation;

const chatSlice = createSlice({
  name: "conversation",
  initialState: {
    selectedConversation: null,
    messages: [],
  },
  reducers: {
    addConversation(state, action) {
      state.selectedConversation = action.payload.conversation;
    },
    addMessage(state, action) {
      state.messages = action.payload.message;
    },
  },
});

export const { addConversation, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
