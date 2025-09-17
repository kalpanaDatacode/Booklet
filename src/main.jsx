import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional for JS components
import './index.scss'; // custom SCSS
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
   
);
