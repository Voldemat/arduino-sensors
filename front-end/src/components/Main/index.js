import React from 'react';


export default function Main({data}){
    return (<>
        <main>
            <h1>{JSON.stringify(data)}</h1>
        </main>
            
    </>)
}