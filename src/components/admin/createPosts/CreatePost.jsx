import React, { useState } from 'react'

const CreatePost = () => {
    const[category, setcategory] = useState('uncategorized')
    const[productName, setproductName] = useState('')
    const[productRating, setproductRating] = useState('')
    const[newPrice, setnewPrice] = useState()
    const[oldPrice, setoldPrice] = useState()
    const[sold, setsold] = useState()
    const[left, setleft] = useState()
    const[typeofproduct, settypeofproduct] = useState('')
    const[mfgDate, setmfgDate] = useState('')
    const[lifespan, setlifespan] = useState('')

    const PostCategories = [
        'Vegetables', 'Fresh Fruits', 'Fresh Drink', 'Fresh Bakery', 'Biscuits Snacks', 'Fresh Meat', 'Fresh Milk'
    ]

  return (
    <div className="Signup">
        <h2>Crate a post</h2>
        
        <div className="form__createPosts">
            <select name="category"  value={category} onChange={e=> setcategory(e.target.value)} id="">
                {
                    PostCategories.map(id=> <option key={id}>{id}</option>) 
                }
            </select>
            <input type="text" />
        </div>
    </div>
  )
}

export default CreatePost