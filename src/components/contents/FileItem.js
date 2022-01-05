import fileImage from "../../images/file.jpg";
import classes from "./FolderItem.module.css";
import {useContext,useState} from "react";
import Menu from "./Menu";
import FolderContext from "../store/foldercontent-context";
function FileItem(props)
{   const [menu,setMenu] = useState();
    const folderContext = useContext(FolderContext);
    
    function setMenuBar()
    {
        setMenu(!menu);
    }
    function deleteItem()
    {
        folderContext.removeFile(props.filename);
    }
    function renameItem(newname)
    {
        folderContext.removeFile(props.filename);
        folderContext.addFile({
            parentfolder: props.parentFolder,
            filename: newname
        });
        console.log(folderContext)
    }
    return (
        <div className={classes.item}>
            <br/>
        <img src={fileImage} alt="file" onClick={setMenuBar}></img>
        <span class="caption">{props.filename}</span>
        {menu ? (
        <Menu deleteItem={deleteItem} renameItem={renameItem} setMenuBar={setMenuBar}/>
      ) : (<div></div>)}
    </div>
    )
}

export default FileItem;