import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { FolderContextProvider } from './components/store/foldercontent-context';

ReactDOM.render(<FolderContextProvider><BrowserRouter><App /></BrowserRouter></FolderContextProvider>,document.getElementById('root'));


