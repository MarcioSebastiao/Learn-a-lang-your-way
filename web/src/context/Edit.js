import React, { createContext, useContext, useState, useRef, useEffect } from "react"
import api from '../services/api';
import { HubContext } from './Hub';


export const EditItemContext = createContext();


export default function EditItemProvider({ children }) {

    const {
        cards, setCards,
        edit,
        setEdit
    } = useContext(HubContext);

    const [itemToEdit, SetItemToEdit] = useState([]);
    const [btnEdit, setBtnEdit] = useState('Add');
    const [exibeWarning, setWarning] = useState('none');

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (edit.length !== 0) {
            setWarning("flex")
            setBtnEdit("Edit")
            SetItemToEdit(edit);
        }
        // eslint-disable-next-line
    }, [edit])


    async function handleEdit(data) {
        try {
            let response = '';
            if (data.id !== '')
                response = await updateItem(data);
            else
                response = await addItem(data);
            if (response.status === 200)
                return { success: true }
        } catch (error) {
            alert('Error')
        }
    }

    const addItem = async (data) => {
        const response = await api.post('/', data);
        if (response.status === 200)
            afterAdd(response);
        return response;
    }

    const updateItem = async (data) => {
        const response = await api.put(`/${data.id}`, data);
        if (response.status === 200) {
            afterEdit(response);
            setWarning("none")
            setBtnEdit("Add")
        }
        return response;
    }


    const afterAdd = (item) => {
        console.log(item);
        if (item.data.new)
            setCards([item.data.result, ...cards])
        else
            alert("já foi adicionado")
    }

    const afterEdit = (item) => {
        setCards([item.data, ...(cards.filter(w => w._id !== item.data._id))])
    }


    const cancelEdition = () => {
        setWarning("none");
        setBtnEdit("Add");
        setEdit([]);
    }

    return <EditItemContext.Provider
        value={{
            handleEdit, itemToEdit,
            btnEdit, exibeWarning,
            cancelEdition
        }}
    >
        {children}
    </EditItemContext.Provider>
}