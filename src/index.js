var React = require('react');
var pdfMake = require('pdfmake/build/pdfmake.min.js');

var raporTuru='';

var ReportButton = React.createClass({

	raportTuruSet:function(e){
		raporTuru = e.currentTarget.value;
	},

	raporAl:function(){
		alert(raporTuru);
		var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
        pdfMake.createPdf(docDefinition).open();
	},
	render: function() {
		return (
			   <div>

			     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  Rapor Alzs
				 </button>

				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Rapor Seçim Ekranı</h4>
				      </div>
				      <div className="modal-body"> 
				           <form role="form">
						    <div className="radio">
						      <label><input type="radio" name="optRadio" value='pdf' onChange={this.raportTuruSet} />PDF</label>
						    </div>
						    <div className="radio">
						      <label><input type="radio" name="optRadio" value='csv' onChange={this.raportTuruSet} />CSV</label>
						    </div>
						   </form> 
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Kapat</button>
				        <button type="button" className="btn btn-primary" onClick={this.raporAl} >Rapor Al</button>
				      </div>
				    </div>
				  </div>
				</div>
			   </div>	
		);
	}

});


module.exports = ReportButton;