import React from 'react'
import {Row,Col,CardText,CardTitle,CardBody,Form} from 'reactstrap'
import '../css/Cart.css'
export default function Cart() {
    return (
      <div>
        <Row>
          <Col sm="4">
            <CardBody className="card_body">
               <h5 tag="h5" className="title">Courses Categories</h5>
               <hr/>
                <div className="courses_box">
                   
                    <input type="checkbox"/>
                    <label >Course 1</label><br/>

                    <input type="checkbox"/>
                    <label >Course 2</label><br/>

                    <input type="checkbox"/>
                    <label >Course 3</label><br/>

                    <input type="checkbox"/>
                    <label >Course 4</label><br/>

                    <input type="checkbox"/>
                    <label >Course 5</label><br/>

                    <input type="checkbox"/>
                    <label >Course 6</label><br/>

                    <input type="checkbox"/>
                    <label >Course 7</label><br/>

                    <input type="checkbox"/>
                    <label >Course 8</label><br/>
                </div>
            </CardBody>
          </Col>
        </Row>
      </div>
    );
}
