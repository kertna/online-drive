import { useState } from "react";
import TextBox from "./TextBox";

function Menu(props)
{   var buttonStyle={
    font: "inherit",
    width: "120px",
    height: "30px",
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: "5px",
    color:"red"
    
}
    var listStyle={
        listStyle:"none"
    }
    const [textbox, settextbox] = useState(false);
    function rename(newname)
    {
        props.renameItem(newname);
        settextbox(false)
        props.setMenuBar()
    }
    function renameItem()
    {
        settextbox(true)
    }
    function deleteItem()
    {
        props.deleteItem();
    }
    function closeTextBox()
    {
        settextbox(false);
        props.setMenuBar()
    }
    return (
        <div >
        <ul style={listStyle}>
          <li><button style={buttonStyle} onClick={renameItem}>Rename</button></li>
          <li><button style={buttonStyle} onClick={deleteItem}>Delete</button></li>
        </ul>
        {textbox ? (
        <TextBox  rename={rename} close={closeTextBox}/>
      ) : (<div></div>)}
        </div>
    )
}

export default Menu;