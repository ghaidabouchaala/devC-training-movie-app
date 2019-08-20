import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false, 
      name : '' , 
      rate : '', 
      poster : '' , 
      date : '', 
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  change= e => {
      this.setState({
          [e.target.name] : e.target.value 
      })
  }
  render() {
   const {name , rate , poster , date } = this.state
    return (
      <div>
        <Button color="dark" onClick={this.toggle}>Add Movie</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Movie</ModalHeader>
          <ModalBody>
            <input className="form-control" placeholder="enter name" name='name' onChange={this.change}/> 
            <input className="form-control" placeholder="enter rate" name='rate' onChange={this.change} />
            <input className="form-control" placeholder="enter poster" name='poster' onChange={this.change}/> 
            <input className="form-control" placeholder="enter year" name='year' onChange={this.change}/> 


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=> {
                this.props.addMovie({
                    name,
                    poster : poster ,
                    rate, 
                    date
                })
                this.toggle()
            }}>Add Movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;