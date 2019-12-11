import React from 'react';

const aux = {
    type:'available',
    product: 'celular'
}

function Otro (props) { 
    return 
        (
        <div>
           <p> {aux.type}</p>
           <p> {aux.prduct}</p>
        </div>
    )
 }

 export default Otro;
 