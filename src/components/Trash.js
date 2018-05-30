import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isTrashVisible: PropTypes.bool
  }

  static defaultProps = {
    isTrashVisible: false
  }

  clickTrash = () => {
    this.props.trashCallback();
  }

  render() {
    // checking if the isTrashVisible prop is true or false and if true rendering out the img tag
    let img = ''
    if (this.props.isTrashVisible) {
      img = <img src={ TrashIcon } alt="Trash" className="trash" onClick= { this.clickTrash }></img>;
    }

    return (
      // running the img tag code here
      <div className="bin">
      {img}
      </div>
    );
  }
}

export default Trash;
