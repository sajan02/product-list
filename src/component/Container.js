import React, { Component } from 'react'
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputModal from './Modal';
import { logout, getProfileData } from '../utils/auth'

const data = require('../assets/DummyData.json');

export default class Container extends Component {

  state = {
    data : [],
    dataModel: [
        'customer_email',
        'customer_name',
        'product',
        'quantity',
    ],
    modalShow: false,
    type: 'edit',
    selectedProductIndex: -1,
  }

  componentDidMount() {
    this.setState({ data : data});
  }

  onEdit = (index) => {
    this.setState({
      type: 'edit',
      modalShow: true,
      selectedProductIndex: index
    })
  }

  onCreateNewOrder = () => {
    this.setState({
      type: 'create',
      modalShow: true,
    })
  }

  onDelete = (index) => {
    let { data } = this.state;
    data.splice(index, 1);
    this.setState({
      data
    })
  }

  onHide = () => {
    this.setState({
      modalShow: false,
      selectedProductIndex: -1,
    })
  }

  onSubmit = (newEntry) => {
    const { type, selectedProductIndex } = this.state;
    let { data } = this.state;
    if (data && type === 'edit') {
        data[selectedProductIndex] = { ...newEntry };
    } else{
        data.push({...newEntry});
    }
    this.setState({
      data,
      modalShow: false,
      selectedProductIndex: -1,
    })
  }

  responseGoogle = (res) => {
    console.log(res);
  }

  render() {
    const { data, dataModel, selectedProductIndex, type } = this.state;
    const title = type === 'edit' ? 'Edit Order' : 'Create New Order';
    const profileData = JSON.parse(getProfileData());
    console.log();
    return (
      <div className='app-container'>
        <div className='left-container'>
            {profileData && <div className="profile-detail">
                <img src={profileData.imageUrl}></img>
                <div className='email-detail'>{profileData.email}</div>
                <div className='name-detail'>{profileData.name}</div>
                <button type="button" className="btn btn-create" onClick={() => logout(() => this.props.history.push('/login'))}>Logout</button>
            </div>}
        </div>
        <div className='right-container'>
          <div className='create-btn'>
            <button type="button" className="btn btn-create" onClick={this.onCreateNewOrder}>Create New Order</button>
          </div>
          <Table
            data={data} dataModel={dataModel}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
            title={'Order List'}
          />
          <InputModal
              show={this.state.modalShow}
              onSubmit={this.onSubmit}
              data={data[selectedProductIndex]}
              type={type}
              onHide={this.onHide}
              dataModel={dataModel}
              title={title}
            />
          </div>
      </div>
    )
  }
}
