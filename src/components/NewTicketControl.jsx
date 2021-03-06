import React from "react";
import NewTicketForm from "./NewTicketForm";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New ticket button was clicked!");
    this.setState({formVisibleOnPage: true});
    console.log("formVisibleOnPage set to: " + this.state.formVisibleOnPage);
  }

  render() {
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <NewTicketForm/>
    } else {
      formAreaContent =
      <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      <div>{formAreaContent}</div>
    );
  }

}

export default NewTicketControl;
