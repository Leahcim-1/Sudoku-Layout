import React, { Component } from 'react';
import SudokuLayout from '../Components/SudokuLayout';

const SingleLandscapeImage = [{
    src: 'https://picsum.photos/300/200'
}]

const SinglePortraitImage = [{
    src: 'https://picsum.photos/200/300'
}]



export const Example1 = ( ) => {
    return (
        <div >
            <h2>Singe landscape image</h2>
            <SudokuLayout imageConfig={SingleLandscapeImage}/>
            <h2>Singe Portrait image</h2>
            <SudokuLayout imageConfig={SinglePortraitImage}/>
        </div>
    )


}