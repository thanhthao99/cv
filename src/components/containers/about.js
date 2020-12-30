import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className= 'row'> 
                <div className="col s6">
                    <strong>Gender: </strong>
                    <span>Female</span>
                 </div>
                 <div className="col s6">
                    <strong>Day of birth: </strong>
                    <span>July 24, 1999</span>
                 </div>
                 <div className="col s6">
                    <strong>Phone: </strong>
                    <span>01652953313</span>
                 </div>
                 <div className="col s6">
                    <strong>Email: </strong>
                    <span>thao01652953313@gmail.com</span>
                 </div>
                 <div className="col s6">
                    <strong>Address: </strong>
                    <span>Tien Phuoc - Quang Nam</span>
                 </div>
                 
                 <div className="col s12">
                    <h6><b>Introduce yourself</b></h6>
                    <p>My name is Thao, and I'm 21 years old this year. Born and raised in Quang Nam. 
                       I have been living in Da Nang for nearly 4 yearn and now I am living in Da Nang. 
                       Before, I studied at Da Nang Pedagogical University and graduated with a bachelor's 
                       degree in information technology. I used to participate in a tester course at Da Nang 
                       tester training center.</p>
                 </div>
            </div>
        )
    }
}
