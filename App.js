import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import X1 from './Superblog ai/Layout';   

export default function App()                                            
{                                                                
  return (       
    <BrowserRouter>                         
    <Routes>                                   
     <Route path='/' element={<X1/>}>                                                                                  
    </Route>   
    </Routes>   
    </BrowserRouter>                           
  ); 
} 