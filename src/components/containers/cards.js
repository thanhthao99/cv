import React, { Component } from 'react'
import Img from '../../assets/taolathao.jpg'
export default class Card extends Component {
    render() {
        return (

            <div className="card" style={{width: '80%'}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator"  src={Img} />
            </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Vo Thi Thanh Thao<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">Tester</a></p>
                    </div>
                    <div className="card-reveal">
                        <span class="card-title grey-text text-darken-4">Vo Thi Thanh Thao<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
            </div>
            
        )
    }
}
