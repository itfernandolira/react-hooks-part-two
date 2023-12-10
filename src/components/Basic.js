import React, { useContext } from 'react'

import DataContext from '../data/DataContext';

const Basic = () => {

    const { state, setState } = useContext(DataContext);

    return (
        <>
            <div className="center">
                <h3>Basic with Context</h3>
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
            </div>
        </>
    )
}

export default Basic;