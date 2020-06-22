import React, { Component } from 'react';
import {dataObject} from '../data.js'
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';

const renderMapUrl =
    (val, row) =>
      <div>
        <span>UserSwipes - {row["UserSwipes"]}</span>
        <img  src={`${val}`}>
      </img>
      </div>;

const renderImageDetails =
(val, row) =>
  <div>
  <span>{val} - </span>
  <a href={`https://www.google.com/maps?q=${row['Y']},${row['X']}`} target="_blank">
      Image on Gmap
  </a>
  </div>;

const renderBool =
(val, row) =>
  val?<p>true</p>:<p>false</p>;

export class Home extends Component {   
  static displayName = Home.name;  


  constructor(props) {
    super(props);
    this.state = { 
      data: [], 
      loading: true 
    };
  }

  componentDidMount() {
   // this.populateImageData();
  }

  render () {
    var columns = [
      { title: 'Image Id', prop: 'Id'  },
      { title: 'Image Deatils', render: renderImageDetails, prop: 'ImageDetails' },
      { title: 'IsControlPoint',render:renderBool, prop: 'IsControlPoint' },
      { title: 'Image', render: renderMapUrl, prop: 'Url' }
    ]; 

    return (
      <div>
        <span>Total Images with Enough(5) Quality Validations: {dataObject.length} </span>
      <DataTable
      key="Id"
      className="container"
      keys="name"
      columns={columns}
      initialData={dataObject}
      initialPageLength={20}
      initialSortBy={{ prop: 'IsControlPoint', order: 'descending' }}
    />
    </div>
    );
  }


  async populateImageData() {
    this.setState({ data: dataObject, loading: false });    
  }
}
