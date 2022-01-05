import { useRef } from "react";
import classes from "./NewItemForm.module.css";
import cancel from "../../images/close.jpg"
function TextBox (props)
{
    const nameInputRef= useRef();
    var buttonStyle = {
        width: "20px",
        height: "20px",
        float: "right",
        backgroundImage: `url(${cancel})`,
        borderColor:"transparent"
    }
    function submitHandler(event)
    {
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        props.rename(enteredName);
    }
    function close()
    {
        props.close();
    }
    return (
        <div className="modal">
        <form className={classes.form} onSubmit={submitHandler}>
            
        <div className={classes.control}>
        <p>Rename <button  style={buttonStyle} onClick={close}></button></p>
        <label htmlFor='name'></label>
        <input type='text' required id='name' ref={nameInputRef}></input>
        </div>
        <div className={classes.actions}>
            <button>Rename</button>
        </div>
        </form>
        </div>
    )
}
export default TextBox;