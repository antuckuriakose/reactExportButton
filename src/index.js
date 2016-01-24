var React = require('react');
var Modal = require('react-modal');

var ReportButton = React.createClass({
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
		return (
			<div>
			  <button className={this.props.className} {...this.props} onClick={this.openModal} >Rapor</button>
			  <Modal
			      isOpen={this.state.modalIsOpen}
			      onRequestClose={this.closeModal}
			      style={customStyles} >

			      <h2>Rapor Seçim Ekrannı</h2>
			      <button onClick={this.closeModal}>close</button>
			      <div>I am a modal</div>
			      <form>
			        <input />
			        <button>tab navigation</button>
			        <button>stays</button>
			        <button>inside</button>
			        <button>the modal</button>
			      </form>
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