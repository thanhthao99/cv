import React, { Component } from 'react'
import Header from '../header'

export default class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <Header />
                    <div className="card-content">
                        <h6 className="">
                            <strong>EDUCATIONS</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                            <tr>
                                <th>Certificate</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Danang University - University of Education</td>
                                <td>2017 - Present</td>
                                
                            </tr>
                            <tr>
                                <td>Athena English Center</td>
                                <td>2018 - 2019</td>
                                
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
