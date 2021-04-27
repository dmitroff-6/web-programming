import React from 'react';
import Element from "./Element"

const ListElement = (list) => {
    const array = list.value;
    return (
        <ul>
            {
                array.map(element => <Element key = {element.id} value={element.content} />)
            }
        </ul>
    );
}

export default ListElement;
