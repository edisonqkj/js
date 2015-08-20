var http=require('http');
var url=require('url');
var fs=require('fs');
var folder='.';
var port='80';
var ip='127.0.0.1';
var encode='utf8';

function getList(){
	var nsrc=document.createElement("script");
	nsrc.setAttribute("type","text/javascript");
	nsrc.setAttribute("src","update.js");
	document.body.appendChild(nsrc);
	// var embed='<script type="text/javascript">';
	// embed+='function update(recs){'+
	// 	'var tb=document.getElementById("mlist");'+
	// 	'var tr=tb.innerHTML;'+
	// 	'for(i=0;i<recs.length;i++){'+
	// 		'tr+=\'<tr class="rec">\';'+
	// 		'tr+="<td>"+recs[i]["id"]+"</td>";'+
	// 		'tr+="<td>"+recs[i]["name"]+"</td>";'+
	// 		'tr+="<td>"+recs[i]["gender"]+"</td>";'+
	// 		'tr+="<td>"+recs[i]["phone"]+"</td>";'+
	// 		'tr+="<td>"+recs[i]["reg"]+"</td>";'+
	// 		'tr+="</tr>";'+
	// 	'}'+
	// 	'tb.innerHTML=tr;'+
	// '}';
	// embed+='recs=[{"id":1,"name":"Edison","gender":"Male","phone":15905155080,"reg":4000},'+
	// 			'{"id":2,"name":"Mary","gender":"Female","phone":68580170,"reg":3200}];';
	// embed+='update(recs);';
	// embed+='</script>';
	// return embed;
}

var server=http.createServer(function(req,res){
	var path=url.parse(req.url);
	var filepath=folder+path.pathname;
	console.log(path);
	fs.readFile(filepath,encode,function(err,file){
		console.log('error: '+err);
		if(err){
			res.writeHead(404,{'Content-Type':'text/plain'});
			res.end();
			return;
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		file+=getList();
		res.write(file);
		// console.log(file);
		res.end();
	});
});
server.listen(port,ip);