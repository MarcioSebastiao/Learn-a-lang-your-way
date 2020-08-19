import React, { createContext, useState, useEffect } from "react"
import api from '../services/api';

export const HubContext = createContext();

export default function HubProvider({ children }) {
    const [cards, setCards] = useState([]);
    const [interval, setInterval] = useState(1);
    const [total, setTotal] = useState(0);

    const [edit, setEdit] = useState([]);
    const [saveListSate, setSaveListSate] = useState([]);


    useEffect(() => {
        loadWords();
        // eslint-disable-next-line
    }, [interval]);


    async function loadWords() {
        if (total > 0 && cards.length === total) return;
        const response = await api.get('/', { params: { interval } })
        setCards([...cards, ...response.data.items]);
        setTotal(response.data.total);
    }

    const remove = async (id) => {
        const response = await api.delete(`/${id}`);

        if (response.data.deleted)
            setCards(cards.filter(w => w._id !== id));
    }

    return <HubContext.Provider
        value={{
            cards, setCards,
            edit, setEdit,
            saveListSate, setSaveListSate,
            remove,
            interval, setInterval
        }}
    >
        {children}
    </HubContext.Provider>

}