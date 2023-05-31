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
  return (
    <main>
        {
            items.map((item) => (
                <li className='item' key={item.id}>
                    <input 
                      type="checkbox"
                      checked={item.checked}  
                    />
                    <label>{item.item}</label>
                    <button className='btn btn-danger btn-sm'>Delete</button>
                </li>
            ))
        }
    </main>
  )
}

export default Content