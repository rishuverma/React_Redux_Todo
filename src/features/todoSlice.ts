import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, todoTitle: "todo Item 1", completed: false },
  { id: 2, todoTitle: "todo item 2", completed: false },
  { id: 3, todoTitle: "todo item 3", completed: true },
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
    toggleComplete: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      //      const toRemoveIndex = state.findIndex(
      //        (item) => item.id === action.payload.id
      //      );
      //      state.splice(toRemoveIndex, 1);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
