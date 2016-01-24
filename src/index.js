var React = require('react');

var ReportButton = React.createClass({

	render: function() {
		return (
			   <div>
			   
			    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  Rapor Al
				</button>

				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Rapor Seçim Ekranı</h4>
				      </div>
				      <div className="modal-body"> 
				        ...
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Kapat</button>
				        <button type="button" className="btn btn-primary">Rapor Al</button>
				      </div>
				    </div>
				  </div>
				</div>
			   </div>	
		);
	}

});

module.exports = ReportButton;