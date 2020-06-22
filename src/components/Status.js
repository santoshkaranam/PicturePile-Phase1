import React, { Component } from 'react';
import { data, get } from 'jquery';

export class Status extends Component {
  static displayName = Status.name;

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    get("https://api.picturepile.geo-wiki.org/Stats")
      .then(data => {
        this.setState({ data: data, loading: false });
      });
  }

  render() {

    return (
      <div>
        <h2>Summary Status</h2>
        {this.state.data === null ? <span>Loading...</span> : this.GetSummary()}
      </div>
    );
  }

  GetSummary() {
    return <div>
      <p></p>
      <p><span>Total Images: </span><span>{this.state.data.Images}</span></p><span></span>
      <p><span>Total Users: </span><span>{this.state.data.Users}</span></p><span></span>
      <p><span>Countries: </span><span>{this.state.data.Countries}</span></p><span></span>
      <p><span>Crop types: </span><span>{this.state.data.Classifications}</span></p><span></span>
      <p><span>Total Swipes: </span><span>{this.state.data.TotalSwipes}</span></p><span></span>
      <p><span>Max Quality Validations per Image : </span><span>{this.state.data.QualityValidationMaxCountPerImage}</span></p><span></span>
      <p><span>Images with Max Quality Validations : </span><span>{this.state.data.ImagesWithEnoughQualityValidations}</span></p><span></span>
      <p><span>Images With "NoCropLand" Swipes(-1) : </span><span>{this.state.data.ImagesWithAll_NoCropSwipes_minus1}</span></p><span></span>
      <p><span>Images With "No" Swipes (0 - 39) : </span><span>{this.state.data.ImagesWithAll_NoSwipes_0_39}</span></p><span></span>
      <p><span>Images With "Unsure" Swipes (20 - 59) : </span><span>{this.state.data.ImagesWithAll_UnsureSwipes_40_59}</span></p><span></span>
      <p><span>Images With "Yes" Swipes (60 - 100) : </span><span>{this.state.data.ImagesWithAll_YesSwipes_60_100}</span></p><span></span>
      <p><span>Total Possible ControlPoint Images : </span><span>{this.state.data.TotalPossibleControlPointImages}</span></p><span></span>
      <p>Top 10 Scores</p>
      {this.state.data.Top10Scores.map(function (element, i) {
        console.log('test', element, i);
        return <li key={i}>{element}</li>
      })}
    </div>;
  }
}
