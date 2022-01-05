import { Route } from 'react-router-dom';
import FolderContent from './components/contents/FolderContent';


function App(props) {
  
  
  return (<div>
      <Route path="/:id" exact> <FolderContent /> </Route>
      <Route path="/" exact> <FolderContent/> </Route>
  </div>);
}

export default App;
