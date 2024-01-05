'use client'
// Создайте файл, например, context.js
import React, { createContext, useContext, useReducer } from 'react';

// Создайте контекст
const WmsStateContext = createContext();

// Создайте провайдер состояния
export const WmsStateProvider = ({ children }) => {
    const initialState = {
        selected: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_SELECTED':
                const updatedSelected = state.selected.map(el => {
                    if (el.id == action.payload.id) {
                        return { ...el, count: el.count + 1 }
                    } else {
                        return el;
                    }
                });

                if (!state.selected.find(el => el.id === action.payload.id)) {
                    updatedSelected.push({ ...action.payload, count: 1 })
                }

                return { ...state, selected: updatedSelected }
            case 'REMOVE_SELECTED':
                const updateRemoved = state.selected.filter(el => {
                    if (el.id !== action.payload.id) {
                        return el;
                    }
                });

                return { ...state, selected: updateRemoved }
            case 'UPDATE_SELECTED_ITEM':
                const newStateWithNewItem = state.selected.map(item => {
                    if (item.id == action.payload.id) {
                        return action.payload
                    }
                    return item
                })

                return {...state, selected: newStateWithNewItem}
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return (
        <WmsStateContext.Provider value={{ state, dispatch }}>
            {children}
        </WmsStateContext.Provider>
    );
};

// Создайте хук для использования состояния в компонентах
export const useWmsState = () => {
    const context = useContext(WmsStateContext);
    if (!context) {
        throw new Error('useWmsState must be used within an WmsStateProvider');
    }
    return context;
};