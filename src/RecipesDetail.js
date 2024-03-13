import React from 'react';
import {useParams} from 'react-router-dom';

const RecipesDetail = () => {
    const params = useParams();
    return (
    <section>
    <h1>Product Detail</h1>
    <p>{params.recipeId}</p>
    </section>); };

export default RecipesDetail;
