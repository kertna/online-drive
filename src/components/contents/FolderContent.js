
import FolderList from "./FolderList";
import {useParams } from "react-router-dom";

function FolderContent(props)
{   let { id } = useParams();
    if (!id)
        id="root"
    return(
        <div>
            <FolderList  parentFolder={id}/>
        </div>
    )
}
export default FolderContent; 