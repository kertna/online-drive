import { createContext, useState } from 'react';

const FolderContext = createContext({
    folders: [],
    totalFolders: 0,
    files:[],
    totalFiles:0,
    addFolder: (foldername) => {},
    removeFolder: (foldername) => {},
    addFile:(filename) =>{},
    removeFile:(filename)=>{},
    isFolderInFolder:(foldername)=> {},
    isFileInFolder:(filename)=> {},
    foldersInFolder:(foldername)=> {}
    
    });

export function FolderContextProvider(props) {
  const [allfolders, setFolderContent] = useState([]);
  const [allfiles, setFileContent] = useState([]);

  function addFolderHandler(folderName) {
    console.log(folderName)
    setFolderContent((prevFolders) => {
      return prevFolders.concat(folderName);
    });
  }
  function addFileHandler(fileName) {
    setFileContent((prevFiles) => {
      return prevFiles.concat(fileName);
    });
  }
  function foldersInFolderHandler(folderName) {
    return allfolders.filter(folder => folder.parentfolder === folderName);
  }
  function filesInFolderHandler(fileName) {
   
  return allfiles.filter(file => file.parentfolder === fileName);
}
  function folderInFolderHandler(folderName) {
    return allfolders.some(folder => folder.foldername === folderName);
  }
  function fileInFolderHandler(fileName) {
    return allfiles.some(file => file.filename === fileName);
  }
  function removeFolderHandler(folderName)
  {
    setFolderContent((prevFolders) => {
        return prevFolders.filter(folder=> folder.foldername !==folderName );
      });
  }
  function removeFileHandler(fileName)
  {
    setFileContent((prevFiles) => {
        return prevFiles.filter(file=> file.filename !==fileName );
      });
  }
  
  
  const context = {
    folders:allfolders,
    totalFolders:allfolders.length,
    files:allfiles,
    totalFiles:allfiles.length,
    addFolder:addFolderHandler,
    addFile:addFileHandler,
    isFolderInFolder:folderInFolderHandler,
    isFileInFolder:fileInFolderHandler,
    foldersInFolder:foldersInFolderHandler,
    filesInFolder:filesInFolderHandler,
    removeFolder:removeFolderHandler,
    removeFile:removeFileHandler,
    
  };

  return (
    <FolderContext.Provider value={context}>
      {props.children}
    </FolderContext.Provider>
  );
}

export default FolderContext;