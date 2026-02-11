import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: { balance: 0 },
  reducers: {
    addIncome: (state, action) => {
      state.balance += action.payload;
    },
    addExpense: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addIncome, addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
