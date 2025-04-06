
import { useState } from "react";

function DynamicListManager(){

     const [items, setItems] = useState([]);
     const [inputValue, setInputValue] = useState("");

     function handleAddItem  () {
           if(inputValue.trim() !== ""){
            setItems([...items,inputValue]);
            setInputValue("");
           }
     };


return(
  <div className="container">
        <h1>Dynamic List Manager</h1>
        <div className="input-container">
        <input type="text" 
              placeholder="Enter an item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value) } />

              <button className="Add-Item" onClick={handleAddItem}>
                Add Item</button>
                </div>
                <ul>
                     {items.map((item, index) =>(
                        <li key={index}>{item}</li>
                     )
                     )
                     }
                </ul>

    </div>
  
)

}



export default  DynamicListManager

 