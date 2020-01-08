import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

class SudokuLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    // 初始化组件的style
    //如果有值就替换初始值
    initStyles = ( col, bordered, borderRadius ) => {
        let styles = {
            col: 3,                     // 设置初始列数为3
            bordered: 'true',     // 设置初始有边框 
            borderRadius: 10,  // 设置初始圆角为10px
        }

        if (col && col >= 2  )
            Object.assign(styles, {col: col});

        if (bordered)
            Object.assign(styles, {bordered: bordered})

        if (borderRadius)
            Object.assign(styles, {borderRadius: borderRadius})

        return styles
    }

    // 组装九宫格，需要两个params
    // imageConfig 是图片的json 数据
    // styles 是对象，里面包含col, bordered, borderRadius
    renderSudokuLayout = ( imageConfig, styles ) => {

        // 是否传imageConfig了
        if (!imageConfig) 
            return <img src='' alt="No Image Config"/>
 
        const border = styles.bordered ? '1px solid darkgray' : '0'; // 如果bordered为true，返回对应的css
        const borderRadius =  `${styles.borderRadius}px`;               // 返回borderRadius的css
        const width = `${100 / styles.col}%`;                                     // 返回width的百分比

        // 检查imageConfig 是否超过九张照片
        // 如果是， 截取前九张
        if (imageConfig.length > 9 )
            imageConfig = imageConfig.slice(0, 9)

        // 检查是多张照片还是一张
        if (imageConfig.length > 1) {        // 多张的情况                                     
            return imageConfig.map((img, index) => {
                const src = `url(${img.src})`;
                return (
                    <div 
                        className="sudoku-img-wrapper"   // 图片的wrapper
                        key={index}
                        style={{
                            width: width,
                            paddingBottom: width 
                            // 用来创造正方形图片的trick， 具体就是用padding来撑起wrapper
                    }}>
                        <div   
                            className="sudoku-img" 
                            style={{
                                backgroundImage: src,
                                border: border,
                                borderRadius: borderRadius
                            }}    
                        />
                    </div>  
                )
            })
        }

        else {        // 单张照片的情况
            return <img 
                src={imageConfig[0].src} 
                style={{
                    border: border, 
                    borderRadius: borderRadius
                }} />
        }
    }

    componentWillMount( ) {
        const { col, bordered, borderRadius } = this.props; // 获取props里面的值
        const styles = this.initStyles( col, bordered, borderRadius); // 传递props获取的值来初始化styles
        this.layout = this.renderSudokuLayout(this.props.imageConfig, styles); // 得到九宫格布局
    }

    render() {
        return (
            <div 
                className='sudoku-layout'
            >
                {this.layout}
            </div>
        );
    }
}

export default SudokuLayout

SudokuLayout.propTypes = { 
    imageConfig: PropTypes.array.isRequired,
}

