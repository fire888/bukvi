import React from 'react'
import { Viewer } from './Viewer'


let viewer = null


export class Letters3D extends React.Component {
    constructor (props) {
        super(props)
        this._domElem = React.createRef()
    }


    componentDidMount() {
        !viewer && (viewer = new Viewer())
        this._domElem.current.appendChild(viewer.renderer.domElement)
        window.addEventListener('resize', this._resize.bind(this))
        viewer.startUpdate()
        this._resize()
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this._resize)
        viewer.stopUpdate()
    }


    render() {
        return (<div className="letters3D" style={{}} ref={ this._domElem } />)
    }


    _resize () {
        viewer && viewer.resize(window.innerWidth, 400)
    }
}

