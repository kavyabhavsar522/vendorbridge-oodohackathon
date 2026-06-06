import React, { useState } from "react";

function Quotation() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    
    const addItem = () => {
        if (!itemName || !price || !qty) return;

        const newItem = {
            id: Date.now(),
            name: itemName,
            price: parseFloat(price),
            qty: parseInt(qty)
        };

        setItems([...items, newItem]);

        setItemName("");
        setPrice("");
        setQty("");
    };

    
    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    
    const total = items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h1>Quotation Generator</h1>

            {/* INPUT SECTION */}
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                />

                <button onClick={addItem}>Add Item</button>
            </div>

            {/* TABLE */}
            <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                            <td>
                                <button onClick={() => deleteItem(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TOTAL */}
            <h2 style={{ marginTop: "20px" }}>
                Grand Total: ₹{total}
            </h2>
        </div>
    );
}

export default Quotation;