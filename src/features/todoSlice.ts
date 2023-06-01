import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, todoTitle: "todo Item 1", completed: false },
  { id: 2, todoTitle: "todo item 2", completed: false },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoObject = {
        id: Date.now(),
        todoTitle: action.payload.todoTitle,
        completed: false,
      };
      state.push(newTodoObject);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
