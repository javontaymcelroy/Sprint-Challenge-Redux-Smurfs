// --------------------------- DEPENDACIES-------------------------------------------//
import React, { Component } from 'react';
import { connect } from 'react-redux';

// --------------------------- STYLES -------------------------------------------//
import './App.css';

// ---------------------------IMPORTS -------------------------------------------//
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import UpdateSmurf from './UpdateSmurf';

// --------------------------- BIG CLASS COMPONENT INCOMING -------------------------------------------//
class App extends Component {
  state = {
    addNewSmurf: false,
    name: '',
    age: null,
    height: null,
    updateID: null
  };

  // --------------------------- FUNCTIONS -------------------------------------------//
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // --------------------------- ADD SMURF -------------------------------------------//
  onClickAdd = event => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      addNewSmurf: false,
      name: '',
      age: null,
      height: null
    });
  };

  newSmurf = () => {
    if (this.state.addNewSmurf)
      return (
        <div>
          <h4>Add Smurf</h4>
          <AddSmurf
            onChange={this.handleInputChange.bind(this)}
            onClick={this.onClickAdd}
          />
        </div>
      );
    else
      return (
        <button
          onClick={() =>
            this.setState({
              addNewSmurf: true
            })
          }
          className='add-button'
        >
          Add Smurf
        </button>
      );
  };
  // --------------------------- ADD SMURF -------------------------------------------//

  // --------------------------- UPDATE SMURF -------------------------------------------//
  toggleUpdate = id => {
    const smurf = this.props.smurfs.filter(x => x.id === id)[0];
    if (smurf) {
      this.setState({
        updateID: id,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      });
    }
  };

  onClickUpdate = event => {
    const id = this.state.updateID;
    this.props.updateSmurf({
      name: this.state.name,
      id: id,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      addNewSmurf: false,
      name: '',
      age: null,
      height: null,
      updateID: null
    });
  };
  // --------------------------- UPDATE SMURF -------------------------------------------//

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img
            src='http://pngimg.com/uploads/smurf/smurf_PNG65.png'
            alt='smurfs-logo'
            className='smurfs-logo'
          />
          <div className='smurfs'>
            <img
              src='http://pngimg.com/uploads/smurf/smurf_PNG39.png'
              alt='papasmurf'
              className='papa'
            />
            <img
              src='http://pngimg.com/uploads/smurf/smurf_PNG53.png'
              alt='smurfette'
              className='smurfette'
            />
          </div>
        </div>
        <div className='smurf-container'>
          <h1 className='smurf-title'>
            Join the Smurf Gang on Their Next Adventure!
          </h1>
          <div className='Smurfs-list'>
            {this.props.smurfs.length === 0 ? (
              <div>Add a Smurf!</div>
            ) : this.props.fetchingSmurfs ? (
              <h1>Loading...</h1>
            ) : (
              <Smurfs {...this.props} update={this.toggleUpdate} />
            )}
          </div>
          <div className='addNewsmurf'>
            {this.state.updateID === null ? (
              this.newSmurf()
            ) : (
              <UpdateSmurf
                {...this.state}
                onChange={this.handleInputChange.bind(this)}
                onClick={this.onClickUpdate}
              />
            )}
          </div>
        </div>
        <img
          src='http://pngimg.com/uploads/smurf/smurf_PNG51.png'
          alt='smurfs'
          className='grumpy'
        />
        <img
          src='http://pngimg.com/uploads/smurf/smurf_PNG61.png'
          alt='smurfs'
          className='smurf-family'
        />
        <img
          src='http://pngimg.com/uploads/smurf/smurf_PNG55.png'
          alt='flower-smurf'
          className='flower-smurf'
        />
        <img
          src='http://pngimg.com/uploads/smurf/smurf_PNG40.png'
          alt='tipping-smurf'
          className='tip-smurf'
        />
        <span className='background2' />
        <span className='background' />
      </div>
    );
  }
}

// --------------------------- mapStateToProps -------------------------------------------//

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

// --------------------------- EXPORTS -------------------------------------------//
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
// --------------------------- THE END -------------------------------------------//
