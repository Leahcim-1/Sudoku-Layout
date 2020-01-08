import React, { Component } from 'react';
import SudokuLayout from '../Components/SudokuLayout';

const image4 = [
    { src: 'https://picsum.photos/seed/picsum/200/300' },
    { src: 'https://picsum.photos/200/300?random=1' },
    { src: 'https://picsum.photos/200/300?random=2' },
    { src: 'https://picsum.photos/200/300?random=3' },
]

const image8 = [
    { src: 'https://picsum.photos/200/300?random=4' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
    { src: 'https://picsum.photos/200/300?random=4' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
]

const image9 = [
    { src: 'https://picsum.photos/200/300?random=3' },
    { src: 'https://picsum.photos/200/300?random=4' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
    { src: 'https://picsum.photos/200/300?random=4' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
    { src: 'https://picsum.photos/300/200?random=5' },
    { src: 'https://picsum.photos/300/200?random=6' },
]




export const Example2 = ( ) => {
    return (
        <div >
            <h2>4 Images</h2>
            <SudokuLayout imageConfig={image4}/>
            <h2>8 Images</h2>
            <SudokuLayout imageConfig={image8}/>
            <h2>9 Images</h2>
            <SudokuLayout imageConfig={image9}/>
        </div>
    )


}