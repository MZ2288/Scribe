var React = require('react');
var ReactQuill = require('react-quill');
var RichText = React.createClass({
  render: function() {
    return (
      <ReactQuill>
        <ReactQuill.Toolbar key="toolbar"
                            ref="toolbar"
                            items={ReactQuill.Toolbar.defaultItems} />
        <div key="editor"
             ref="editor"
             className="quill-contents"
             dangerouslySetInnerHTML={{__html:this.getEditorContents()}} />
      </ReactQuill>
    );
  }
});
module.exports = RichText;
