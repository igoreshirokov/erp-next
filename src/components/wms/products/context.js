'use client'
// Создайте файл, например, context.js
import React, { createContext, useContext, useReducer } from 'react';
import { useWMS } from './wms.class';

// Создайте контекст
const WmsStateContext = createContext();

// Создайте провайдер состояния
export const WmsStateProvider = ({ children }) => {
    const initialState = {
        selected: []
    };
    const WMS = useWMS()

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
            case 'SEND_ORDER_FORM':
                const fieldsData = {}
                const fields = action.payload.forEach(field => {
                    fieldsData[field.name] = field.value
                });
                const data = { ...state, fields: fieldsData }
                WMS.createOrder(data)
                
                // WMS
                //     .createOrder({...data})
                
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
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