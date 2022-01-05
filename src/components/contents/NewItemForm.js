
import classes from './NewItemForm.module.css';
import {useRef, useState} from 'react';
//import Card from '../ui/Card';
function NewItemForm(props)
{
    const nameInputRef= useRef();
    const [isFolder,setFolder] =useState(true);
    const [foldercolor, setFolderColor] = useState("#00BFFF");
    const [filecolor, setFileColor] = useState("grey");
    var folderButtonStyle = {
        font: "inherit",
        padding: "5px",
        width: "120px",
        height: "30px",
        backgroundColor: foldercolor,
        borderColor: "white",
        borderRadius: "5px"
    }
    var fileButtonStyle = {
        font: "inherit",
        padding: "5px",
        width: "120px",
        height: "30px",
        backgroundColor: filecolor,
        borderColor: "white",
        borderRadius: "5px"
    }
    
    function submitHandler(event)
    {
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        if(isFolder)
        {
            const content={
                parentfolder:props.parentFolder,
                foldername:enteredName
            };
            props.confirmFolderHandler(content);
        }
        else
        {
            const content={
                parentfolder:props.parentFolder,
                filename:enteredName
            };
            props.confirmFileHandler(content);
        }
    }
    function folderSelectHandler()
    {
        setFolder(true);
        setFolderColor("#00BFFF");
        setFileColor("grey");
    }
    function fileSelectHandler()
    {
        setFolder(false);
        setFolderColor("grey");
        setFileColor("#00BFFF");
    }
    return(
      
            <form className={classes.form} onSubmit={submitHandler}>
            
            <button style={folderButtonStyle}  onClick ={folderSelectHandler}>Folder</button>
            <button style ={fileButtonStyle} onClick ={fileSelectHandler}>File</button>
            <div className={classes.control}>
            
            <label htmlFor='name'></label>
            <input type='text' required id='name' ref={nameInputRef}></input>
            </div>
            <div className={classes.actions}>
                <button>Create</button>
            </div>
            </form>
       
    );
}
export default NewItemForm;