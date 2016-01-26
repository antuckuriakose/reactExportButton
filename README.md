<p><code>npm install reactexportbutton</code></p>

<pre>
<code class="language-javascript">"# reactExportButton" 

var  React= require('react');
var  ReactDOM= require('react-dom');
var  ReportButton = require('reactexportbutton/index');


var columns = [
    {title: "ID", dataKey: "id"},
    {title: "Name", dataKey: "name"}, 
    {title: "Country", dataKey: "country"}
];


var rows = [
    {"id": 1, "name": "Shaw", "country": "Tanzania"},
    {"id": 2, "name": "Nelson", "country": "Kazakhstan"},
    {"id": 3, "name": "Garcia", "country": "Madagascar"}
];

var App = React.createClass({

    render: function() {
        return (
            &lt;div&gt;
              &lt;ReportButton modalHeader="Report Modal" 
                            butonName="Report" 
                            closeButton="Close" 
                            reportButton="Export" 
                            columns={columns} rows={rows}/&gt;
            &lt;/div&gt;
        );
    }

});

ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));

</code></pre>

<p>&nbsp;</p>
