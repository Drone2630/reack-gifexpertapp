import React, {useState} from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["one punch"]);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map(category => {
                    return <GifGrid category={category} key={category}/>    
                    })
                }
            </ol>
        </>
    );
};
