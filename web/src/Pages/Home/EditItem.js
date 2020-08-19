import React, { useState, useContext, useRef, useEffect } from 'react';

import { EditItemContext } from '../../context/Edit'

import { Warning } from './styles';


export default function EditItem() {

    const {
        handleEdit, itemToEdit,
        btnEdit, exibeWarning,
        cancelEdition
    } = useContext(EditItemContext);


    //To form fields
    const [id, setId] = useState('');
    const [words, setWords] = useState('');
    const [pronounce, setPronounce] = useState('');
    const [type, setType] = useState('');
    const [definition, setDefinition] = useState('');
    const [sentences, setSentences] = useState('');

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        const item = itemToEdit;
        setId(item._id);
        setWords(item.Words);
        setPronounce(item.Pronounce);
        setType(item.Type);
        setDefinition(item.Definition);
        setSentences(item.Sentences.join("\n"));

        // eslint-disable-next-line
    }, [itemToEdit])


    function cleanForm() {
        setId('');
        setWords('');
        setPronounce('');
        setType('');
        setDefinition('');
        setSentences('');
    }

    const item = {
        id,
        words,
        pronounce,
        type,
        definition,
        sentences: sentences.split("\n")
    };

    async function onSubmit(e) {
        e.preventDefault();
        const { success } = await handleEdit(item);
        if (success)
            cleanForm();

    }

    return (
        <div className="edit-words">
            <form onSubmit={e => onSubmit(e)}>
                <input
                    type="hidden"
                    value={id || ''}
                />
                <input
                    type="text"
                    placeholder="Words"
                    value={words || ''}
                    onChange={e => setWords(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Pronounce"
                    value={pronounce || ''}
                    onChange={e => setPronounce(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Type"
                    value={type || ''}
                    onChange={e => setType(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Definition"
                    value={definition || ''}
                    onChange={e => setDefinition(e.target.value)}
                />
                <textarea
                    placeholder="Example sentences"
                    value={sentences || ''}
                    onChange={e => setSentences(e.target.value)}
                />

                <Warning className="warning" style={{ display: exibeWarning }}>
                    <p>You are editing an item!</p>
                    <span onClick={() => { cancelEdition(); cleanForm(); }}>Cancel edition</span>
                </Warning>
                <button className="button" type="submit">{btnEdit}</button>
            </form>
        </div>
    )
}