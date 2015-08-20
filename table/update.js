recs=[{"id":1,
	   "name":"Edison",
	   "gender":"Male",
	   "phone":15905155080,
	   "reg":4000},
	  {"id":2,
	   "name":"Mary",
	   "gender":"Female",
	   "phone":68580170,
	   "reg":3200}];
function update(recs){
		var tb=document.getElementById("mlist");
		var tr=tb.innerHTML;
		for(i=0;i<recs.length;i++){
			tr+='<tr class="rec">';
			tr+="<td>"+recs[i]["id"]+"</td>";
			tr+="<td>"+recs[i]["name"]+"</td>";
			tr+="<td>"+recs[i]["gender"]+"</td>";
			tr+="<td>"+recs[i]["phone"]+"</td>";
			tr+="<td>"+recs[i]["reg"]+"</td>";
			tr+="</tr>";
		}
		tb.innerHTML=tr;
	};
}