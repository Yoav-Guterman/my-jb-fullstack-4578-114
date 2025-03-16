import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Employee from "../models/employee/employee";


interface ProfileState {
    employees: Employee[]
}

const initialState: ProfileState = {
    employees: []
}

export const profileSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload
        },
        newEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees = [action.payload, ...state.employees]
        },
        remove: (state, action: PayloadAction<{ id: string }>) => {
            state.employees = state.employees.filter(p => p.id !== action.payload.id)
        }
    }
})

export const { init, remove, newEmployee } = profileSlice.actions

export default profileSlice.reducer
