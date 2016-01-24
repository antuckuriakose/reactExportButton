var React = require('react');
var Modal = require('react-modal');
var Radium = require('radium');

var ReportButton = React.createClass({
	mixins:[Radium.StyleResolverMixin, Radium.BrowserStateMixin],

	propTypes: {
		className: React.PropTypes.string
	},

	getDefaultProps:function(){
		return {
			className:'btn btn-default'
		}
	},
	getInitialState:function(){
		return {modalIsOpen:false}
	},
	openModal: function() {
      this.setState({modalIsOpen: true});
  	},
 
  	closeModal: function() {
      this.setState({modalIsOpen: false});
  	},

	render: function() {
		var styles={
			  perspective: 600,
			  opacity: 0,
			  overflowX: 'hidden',
			  overflowY: 'auto',
			  backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}



		return (
			<div>
			  <button className={this.props.className} {...this.props} onClick={this.openModal} >Rapor</button>
			  <Modal
			      className="Modal__Bootstrap modal-dialog"
			      closeTimeoutMS={150}
			      isOpen={this.state.modalIsOpen}
			      onRequestClose={this.closeModal}
			      style={this.buildStyles(styles)}>

			      <div className="modal-content">
		            <div className="modal-header">
		              <button type="button" className="close" onClick={this.handleModalCloseRequest}>
		                <span aria-hidden="true">&times;</span>
		                <span className="sr-only">Close</span>
		              </button>
		              <h4 className="modal-title">Modal title</h4>
		            </div>
		            <div className="modal-body">
		              <h4>Really long content...</h4>
		              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
		              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
		              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
		            </div>
		            <div className="modal-footer">
		              <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
		              <button type="button" className="btn btn-primary" >Save changes</button>
		            </div>
		          </div>
			    </Modal>
			</div>
		);
	}

});

const customStyles = {
	    content : {
	    top                   : '50%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)'
	  }
    };

module.exports = ReportButton;