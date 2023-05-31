import { useState ,React } from 'react'

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Item 1"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ])
