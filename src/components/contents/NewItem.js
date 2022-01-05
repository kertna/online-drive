import NewMeetUpForm from "./NewItemForm";
import cancel from "../../images/close.jpg"
function NewItem(props)
{   
    var buttonStyle = {
        width: "20px",
        height: "20px",
        float:"right",
        backgroundImage: `url(${cancel})`,
        borderColor:"transparent"
    }
    var hstyle={
        color:"red"
    }
    function confirmFolderHandler(content)
    {
        props.onConfirmFolder(content);
    }
    function confirmFileHandler(content)
    {
        props.onConfirmFile(content);
    }
    function cancelHandler()
    {
        props.onCancel();
    }
    return (
        
        <div className='modal'>
            <p>Create New <button  style={buttonStyle} onClick={cancelHandler}></button></p>
            <h6 style={hstyle}> please click on Create button to create</h6> 
            <NewMeetUpForm parentFolder={props.parentFolder} confirmFolderHandler={confirmFolderHandler} confirmFileHandler={confirmFileHandler}/>
        </div>
    );
    }
export default NewItem;