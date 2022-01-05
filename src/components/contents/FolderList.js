import FolderContext from "../store/foldercontent-context";
import FolderItem from "./FolderItem";
import FileItem from "./FileItem";
import classes from "./FolderList.module.css";
import {useContext, useState} from "react";
import NewItem from "./NewItem";
import Backdrop from "./Backdrop";
import goBack from "../../images/arrow_up.jpg";
import addNew from "../../images/add_new_button.jpg";
function FolderList(props)
{   const folderContext = useContext(FolderContext);
    const listOfFolders = folderContext.foldersInFolder(props.parentFolder);
    const listOfFiles = folderContext.filesInFolder(props.parentFolder);
    const [modalIsOpen,setModalIsOpen]=useState(false);
    
    var arrowStyle = {
        width: "20px",
        height: "20px",
        backgroundImage: `url(${goBack})`,
    }
    var buttonStyle = {
        width: "60px",
        height: "70px",
        margin: "20px",
        backgroundImage: `url(${addNew})`,
        borderColor: "transparent"
      };
    function createHandler()
    {  
        setModalIsOpen(true);
    }
    function closeModalHandler()
    {  
        setModalIsOpen(false);
    }
    function confirmFolderHandler(content)
    {
        folderContext.addFolder(content);
        setModalIsOpen(false);
    }
    function confirmFileHandler(content)
    {
        folderContext.addFile(content);
        setModalIsOpen(false);
    }
   
    return(

        <div>
            
            <div >
            <div >
                
            <img style={arrowStyle} src={goBack} alt ="goBack"/>
            <span>{props.parentFolder}</span>
            <hr></hr>
            </div>
            {modalIsOpen && <NewItem parentFolder={props.parentFolder} onCancel={closeModalHandler} onConfirmFolder={e => confirmFolderHandler(e)}
            onConfirmFile={e => confirmFileHandler(e)}/>}
            {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
            </div>
            <div className={classes.main}>
            <ul className={classes.list}>
               {listOfFolders.map((folder) => (
               <FolderItem
               foldername={folder.foldername}
               parentFolder={props.parentFolder}
               />
               )) }
               {listOfFiles.map((file) => (
               <FileItem
               filename={file.filename}
               parentFolder={props.parentFolder}
               />
               )) }
               
               <span className={classes.item}>
                <button  style={buttonStyle} onClick={createHandler}></button>
               </span>
               
           </ul>
           
            </div>
        </div>
    )
}
export default FolderList; 