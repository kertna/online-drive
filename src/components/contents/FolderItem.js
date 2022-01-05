import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import folderImage from "../../images/folder.jpg";
import FolderContext from "../store/foldercontent-context";
import classes from "./FolderItem.module.css";
import Menu from "./Menu";
function FolderItem(props)
{   const [menu,setMenu] = useState();
    const folderContext = useContext(FolderContext);
    const history= useHistory();
    const folder= props.foldername;
    const navigateIntoFolder = () => {history.push(
        {
            pathname: `/${folder}`
        }
    )};
    function setMenuBar()
    {
        setMenu(!menu);
    }
    function deleteItem()
    {
        folderContext.removeFolder(props.foldername);
    }
    function renameItem(newname)
    {
        folderContext.removeFolder(props.foldername);
        folderContext.addFolder({
            parentfolder: props.parentFolder,
            foldername: newname
        });
        
    }
    return (
        <div className={classes.item}>
            <br/>
        <img src={folderImage} alt="folder" onDoubleClick={navigateIntoFolder} onClick={setMenuBar}></img>
        <span className={classes.caption}>{props.foldername}</span>
        
        {menu ? (
        <Menu deleteItem={deleteItem} renameItem={renameItem} setMenuBar={setMenuBar}/>
      ) : (<div></div>)}
    </div>
    )
}

export default FolderItem;