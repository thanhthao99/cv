import React, { Component } from 'react'
import Header from '../header'

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <Header />
                    <div className="card-content">
                        <h6>
                            <strong>EXPERIENCES</strong> <hr/>
                        </h6>
                        <div className="row">
                            <div className="col s12 m4">
                                <p className="green lighten-3 white-text center-align">Jan <strong>2016</strong> - March <strong>2017</strong></p>
                            </div>
                            <div className="col s12 m8">
                                <blockquote className ="">
                                    <h6 className="">
                                        <strong>DESIGNER</strong>
                                    </h6>
                                    <p>
                                        Hi! My name is Thao and I am 21 years old. 
                                        I am from Danang. 
                                        I have experience writing test cases, log bugs, I'm good at tester, I'm a cheerful person with everyone.
                                        If I work at your company I will do my best
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col s12 m4">
                                <p className="green lighten-3 white-text center-align">Jan <strong>2016</strong> - March <strong>2017</strong></p>
                            </div>
                            <div className="col s12 m8">
                               <blockquote>
                                   <h6>
                                       <strong>WEB DEVELOPMENT</strong>
                                   </h6>
                                    <p>
                                    Hi! My name is Thao and I am 21 years old. 
                                    I am from Danang. 
                                    I have experience writing test cases, log bugs, I'm good at tester, I'm a cheerful person with everyone.
                                    If I work at your company I will do my best
                                    </p>
                               </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
