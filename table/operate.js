var recnum=0;
function Init(){
	var table=document.getElementById("mlist");
	var rownum=table.rows.length;
	// alert(rownum-1);
	for(i=1;i<rownum;i++){
		table.rows[i].style.backgroundColor="white";
	}
}
function Add(){
	recnum+=1;
	var res=window.showModalDialog("input.html",window);
	//for chrome
	if(!res){
		res = window.returnValue;
	}
	// alert(res.length);

	var tb=document.getElementById("mlist");
	var row=document.createElement("tr");
	row.id="record"+recnum.toString();
	var id=document.createElement("td");
	id.innerText=recnum.toString();
	var name=document.createElement("td");
	name.innerText=res[0];//"Edison";
	var gender=document.createElement("td");
	gender.innerText=res[1];//"Male";
	var phone=document.createElement("td");
	phone.innerText=res[2];//"15905155080";
	var reg=document.createElement("td");
	reg.innerText=res[3];//"2000";

	row.appendChild(id);
	row.appendChild(name);
	row.appendChild(gender);
	row.appendChild(phone);
	row.appendChild(reg);
	tb.appendChild(row);

	var option=document.createElement("option");
	option.innerText=recnum.toString();
	option.id="option"+recnum.toString();
	document.getElementById("mselect").appendChild(option);
}
function Addnew(){
	function addcell(row,text){
		var cell=row.insertCell(-1);
		cell.appendChild(document.createTextNode(text));
	}
	var res=window.showModalDialog("input.html",window);
	//for chrome
	if(!res){
		res = window.returnValue;
	}
	var table=document.createElement('table')	;
	var thead=table.createTHead();
	var row=thead.insertRow(-1);
	var label=['ID','Name','Gender','Phone','Registration'];
	var len=label.length;

	for(var i=0;i<len;i++){
		addcell(row,label[i]);
	}

	var tbody=document.createElement('tbody');
	table.appendChild(tbody);

	row=tbody.insertRow(-1);
	row.className=(row.rowIndex%2)?'odd':'even';
	addcell(row,row.rowIndex);
	for(var v in res){
		addcell(row,res[v]);
	}
	document.body.appendChild(table);
}
function Remove(){
	var select=document.getElementById("mselect");
	var index=select.options[select.selectedIndex].text;
	if(index==0)
		return;
	var table=document.getElementById("mlist");
	var row=document.getElementById("record"+index);
	table.removeChild(row);

	var select=document.getElementById("mselect");
	var option=document.getElementById("option"+index);
	select.removeChild(option);
}
function ClearSelection(){
	var select=document.getElementById("mselect");
	select.selectedIndex=0;
	Init();
}
function Locate(id){
	Init();
	var select=document.getElementById(id);
	if(select.selectedIndex==0)
		return;
	var index=select.options[select.selectedIndex].text;
	var row=document.getElementById("record"+index);
	row.style.backgroundColor="#0000ff";
}
function checkSubmit(id){
	var frm=document.getElementById(id);
	var name=frm.name.value;
	var gender=frm.gender.value;
	var phone=frm.phone.value;
	var reg=frm.reg.value;
	if(name!="" && gender!="" && 
	   phone!="" && reg!=""){
		if(confirm("Are you sure to submit?")){
			var result=[name,gender,phone,reg];
			// window.returnValue=result;
			if (window.opener){
				//for chrome
				window.opener.returnValue = result;
			}else{
				window.returnValue = result;
			}
			window.close();
		}
		else{
			;
		}
	}else{
		alert("Please fill the blank!");
	}
}