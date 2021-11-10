import React, { Component } from 'react'
import List from '../conponent/List'

export default class ListContainer extends Component {
    state={
        question:[]
    }
    render() {
        const {question} = this.state
        return (
            <div>
                <List question={question}/>
            </div>
        )
    }
}
