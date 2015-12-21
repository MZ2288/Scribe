var React = require('react');
var ReactQuill = require('react-quill');
var RichText = React.createClass({
  getInitialState: function () {
    return {
      text: "Hello world!"
    };
  },

  onTextChange: function (val) {
    this.setState({ text: val });
  },

  render: function () {
    return (
      <ReactQuill></ReactQuill>
    );
  },


  // getInitialState: function () {
  //   return {
  //     theme: 'snow',
  // //     // value: this.props.text || "NO PROPS PASSED THROUGH",
  // //   };
  // },
  // //
  // onTextareaChange: function (event) {
  //   this.setState({ value: event.target.value });
  // },
//
//
//   render: function () {
//     return (
//       <ReactQuill value={"Hello world"} />
//     );
//   },
});

module.exports = RichText;
