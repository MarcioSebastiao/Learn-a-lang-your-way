import React, { useState, useRef, useEffect, useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { HubContext } from '../../context/Hub'
import api from '../../services/api';

export default function Search(props) {

    const {
        cards, setCards,
        saveListSate, setSaveListSate
    } = useContext(HubContext);

    const [query, setQuery] = useState("");
    const [arrow, setArrow] = useState("none");

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        const handler = setTimeout(() => {
            if (query === "")
                back();
            else
                findWords();
        }, 500);

        return () => clearTimeout(handler);
        // eslint-disable-next-line
    }, [query]);



    const found = (item) => {
        if (saveListSate.length === 0) {
            setSaveListSate(cards);
        }
        setCards(item.data)
    }

    const back = () => {
        if (saveListSate.length > 0) {
            setCards(saveListSate);
        }
        setArrow("none");
    }


    async function findWords() {
        if (query === '') return;
        try {
            const response = await api.get('/search', { params: { w: query } })
            found(response);
        } catch (error) {
            alert('Error')
        }
        setArrow("");
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyUp={e => e.keyCode === 13 ? findWords() : ''}
            />

            <FiArrowLeft
                className="arrowLeft"
                display={arrow}
                onClick={() => back()}
            />
        </>
    )
}