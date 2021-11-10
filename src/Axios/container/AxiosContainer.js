import React, { Component } from 'react'
import axios from '../../helper/axios'
import Axios from '../component/Axios'

export default class AxiosContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            question:[]
        }
        this.question=this.fetchQuestions.bind(this)
    }

    fetchQuestions(){
        axios({
            url:'api/v1/questions',
            method:'GET',

        })
        .then(res=>{
            this.setState({
                questions:res.data
            })
           console.log(res)
        })

    }
    componentDidMount(){
        this.fetchQuestions()
    }
    render() {
        const {questions}=this.state
        return (
            <>
            <Axios questions={questions}/>
         
            </>
        )
    }
}
