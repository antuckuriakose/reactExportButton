var React = require('react');
var json2csv = require('json2csv');


require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');

var raporTuru='';

require('jspdf-autotable');


var ReportButton = React.createClass({
    propTypes: {
    	modalHeader: React.PropTypes.string,
    	butonName: React.PropTypes.string,
    	closeButton:React.PropTypes.string,
    	reportButton:React.PropTypes.string
    },

    getDefaultProps: function() {
    	return {
    		butonName:"Rapor",
    		modalHeader:"Rapor Seçim Ekranı",
    		closeButton:"Kapat",
    		reportButton:"Rapor Al"
    	};
    },

	raportTuruSet:function(e){
		raporTuru = e.currentTarget.value;
	},

	 convertArrayOfObjectsToCSV:function(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    },

    downloadCSV:function() {
        var data, filename, link;

        var csv = this.convertArrayOfObjectsToCSV({
            data: this.props.rows
        });
        if (csv == null) return;

        filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i) && !navigator.msSaveBlob ) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        if(navigator.msSaveBlob){  //internet explorer için
        	var csvContent=csv; 
			var blob = new Blob([csvContent],{type: "text/csv;charset=utf-8;"});

			navigator.msSaveBlob(blob, "filename.csv");
        }else{        
                link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename);
                link.click(); }
    },

	raporAl:function(){

	  if(raporTuru==="pdf"){
	    var imgData = 'data:image/jpeg;base64,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';	
		var doc = new jsPDF('p', 'pt');
		doc.autoTable(this.props.columns, this.props.rows, {
		    //styles: {fillColor: [100, 255, 255]},
		    //columnStyles: {id: {fillColor: 255}},
		    margin: {top: 100},
		    beforePageContent: function(data) {
		        doc.addImage(imgData, 'JPEG', 15, 40, 200, 40);
		        //doc.text("Header", 40, 30);
		    }
		});
		doc.save('table.pdf');
	   }
	   else if(raporTuru==="csv"){
	     this.downloadCSV();
	   }	
	},

	render: function() {
		return (
			   <div>

			     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  {this.props.butonName}
				 </button>

				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">{this.props.modalHeader}</h4>
				      </div>
				      <div className="modal-body row"> 
				           <form role="form" className="col-md-2 col-md-offset-5">
						    <div className="radio">
						      <label><input type="radio" name="optRadio" value='pdf' onChange={this.raportTuruSet} />PDF</label>
						    </div>
						    <div className="radio">
						      <label><input type="radio"  name="optRadio" value='csv' onChange={this.raportTuruSet} />CSV</label>
						    </div>
						   </form> 
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">{this.props.closeButton}</button>
				        <button type="button" className="btn btn-primary" onClick={this.raporAl} >{this.props.reportButton}</button>
				      </div>
				    </div>
				  </div>
				</div>
			   </div>	
		);
	}

});


module.exports = ReportButton;