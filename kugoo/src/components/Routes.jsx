import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AboutUs from '../pages/about-us/aboutUs'
import Catalog from '../pages/catalog/catalog'

export default function RoutesPage(){
    return(
            <Routes>
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/catalog" element={<Catalog/>} />
                
            </Routes>
    )
};
