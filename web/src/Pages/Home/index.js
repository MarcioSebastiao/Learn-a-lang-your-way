import React, { useContext } from 'react';
import EditItem from './EditItem.js';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { exibe, hide, backToTop } from '../../global'


import { HubContext } from '../../context/Hub'
import EditItemProvider from '../../context/Edit'

import { HubContainer, Card, Edit } from './styles'


import Search from './Search.js';

export default function Hub() {

    const {
        cards,
        setEdit,
        interval, setInterval,
        remove
    } = useContext(HubContext);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ) {
            setInterval(interval + 1)
        }
    }


    return (
        <>
            <EditItemProvider>
                <EditItem teste={() => { }} />
            </EditItemProvider>

            <Search />


            <HubContainer>
                {
                    cards.map((w, i) => (
                        <Card key={i}>
                            <div>
                                <h2>{w.Words}</h2>

                                <span className="pronounce">
                                    {w.Pronounce}
                                </span>
                            </div>

                            <div className="definition">
                                <span>{w.Type}</span>
                                <p>{w.Definition}</p>
                            </div>

                            <ul>
                                {
                                    w.Sentences.map((p, i) => (
                                        <li key={i}>
                                            <p>"{p}"</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Edit
                                onMouseLeave={e => hide(e.currentTarget.firstChild)}
                            >
                                <div className="confirm-remove">
                                    <span>Remove?</span>
                                    <a href="/#" onClick={(e) => { e.preventDefault(); remove(w._id) }}>Yes</a>
                                </div>

                                <FiTrash
                                    onClick={e => exibe(e.currentTarget.parentElement.querySelector(".confirm-remove"))}
                                    color='#e02041'
                                />
                                <FiEdit
                                    onClick={() => { setEdit(w); backToTop(); }}
                                />
                            </Edit>
                        </Card>
                    ))
                }
            </HubContainer>
        </>
    )
}