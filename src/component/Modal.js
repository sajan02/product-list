
import React, { Component } from 'react'
import { Modal, Form, Col, Row } from "react-bootstrap";
import { capitalize } from '../utils/utilityFunction';
import './Modal.css';

const inputType = {
    'customer_email': 'email',
    'customer_name': 'text',
    'product': 'text',
    'quantity': 'number',
}

export default class InputModal extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             data : this.props.data || {},
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data || {}
        })
    }

    componentWillReceiveProps(nextProps) {
        const { show, data } = nextProps;
        if (show) {
            if(JSON.stringify(data) !== JSON.stringify(this.state.data)) {
                this.setState({
                    data
                })
            }
        }
    }

    handleInput = (event) => {
        console.log(event.target);
        this.setState({
            data : {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }
    
    render() {
        const props = this.props;
        const { onHide, show } = props
        return (
            <Modal
              onHide={onHide}
              show={show}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {props.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                  {
                      props.dataModel.map((datum, index) => 
                      (<>
                          <Form.Group as={Row} controlId={datum}>
                            <Form.Label column sm={2}>
                              {datum
                                  .split('_')
                                  .map(a => capitalize(a))
                                  .join(' ')}
                            </Form.Label>
                            <Col sm={10}>
                              <Form.Control name={datum} value={this.state.data?.[datum] || ''} onChange={this.handleInput} type={inputType[datum] || 'text'} />
                            </Col>
                          </Form.Group>
                      </>
                      ))
                  }
              </Form>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="btn btn-create"
                    onClick={() => props.onSubmit(this.state.data) || null}>
                    {capitalize(props.type)}
                </button>
              </Modal.Footer>
            </Modal>
        )
    }
}
