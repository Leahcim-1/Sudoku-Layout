# Sudoku Layout

Sukudo Layout is a simple UI component to let display pictures in sudoku layout

## Getting Start
```
npm install
npm run start
```

## Usage
Put the sources of the image into an object, and then placed it inside an array. 

imageConfig must be an array

```
import SudokuLayout from '../Components/SudokuLayout';

const image4 = [
    { src: 'https://picsum.photos/seed/picsum/200/300' },
    { src: 'https://picsum.photos/200/300?random=1' },
    { src: 'https://picsum.photos/200/300?random=2' },
    { src: 'https://picsum.photos/200/300?random=3' },
]

export const Example2 = ( ) => {
    return (
            <div>
               <SudokuLayout imageConfig={image4}/>
            </div>
)}

```


## API

|Props	        |Description   	|  Type |   Default	|   	
|---	        |---	|---	|---	|
|imageConfig   	| It is used to store image config and passed it in to component   	| Array (Required)	| none	|   	
|col   	        | Controls the columns of the sudoku layout	| int 	|  3 	|   
|bordered       | Controls the whether there are borders for the images    	| bool  	|  true 	|    
|borderRadius   | Controls the border radius  	| int  	|   10	|

##   	