import React, { Component } from 'react';
import './Table.css';
import { capitalize } from '../utils/utilityFunction';

export default class Table extends Component {
    render() {
        return (
        <div className='table-container'>
            <div className="table-products">
            <div className="header">{this.props.title}</div>
            <table className='table' cellSpacing="0">
               <thead>
                <tr>
                  {
                    this.props.dataModel.map((datum, index) => {
                        return (
                        <th className='bold' key={`header-${index}`}>{datum
                            .split('_')
                            .map(a => capitalize(a))
                            .join(' ')
                            }</th>
                        )
                    })
                  }
                   <th className='bold' width="230">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                    this.props.data.map((datum, index) => 
                        <tr key={`tr-${index}`}>
                            {
                                this.props.dataModel
                                    .map((key, i) => <td key={`td-${i}`}>{datum[key]}</td>)
                            }
                            <td>
                                <span className='green' onClick={() => this.props.onEdit(index)}>Edit</span>
                                <span className='red' onClick={() => this.props.onDelete(index)}>Delete</span>
                            </td>
                        </tr>
                  )
                }
            </tbody>
           </table>
        </div>
    </div>)
    }
}
