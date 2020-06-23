import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // MODERN SYNTAX
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );

    // OLDER SyNTAX
    // renderInput(formProps)
    // console.log(formProps);
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // to see what we get from redux-form
    // console.log(this.props);
    return (
      // we need to call redux-form handleSubmit function and pass our own formSubmit function as an argument
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        {/* some proprs are always required such as name,  */}
        {/* the field element has no idea how to render anything on the screen its need a component prop to render a component or call a function which returns a element which can be rendered on the screen */}
        {/* Field will automatically pass unknown properties to the function so we will have access to it */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// it is essentialy the same thing as connect with redux
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
