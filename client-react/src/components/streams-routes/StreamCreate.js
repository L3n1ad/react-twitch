import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    // MODERN SYNTAX
    return <input {...input} />;
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

  render() {
    console.log(this.props);
    return (
      <form>
        {/* some proprs are always required such as name,  */}
        {/* the field element has no idea how to render anything on the screen its need a component prop to render a component or call a function which returns a element which can be rendered on the screen */}
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

// it is essentialy the same thing as connect with redux
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
