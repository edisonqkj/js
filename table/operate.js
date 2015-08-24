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
	// var res=window.showModalDialog("input.html");
	var tb=document.getElementById("mlist");
	var row=document.createElement("tr");
	row.id="record"+recnum.toString();
	var id=document.createElement("td");
	id.innerText=recnum.toString();
	var name=document.createElement("td");
	name.innerText="Edison";
	var gender=document.createElement("td");
	gender.innerText="Male";
	var phone=document.createElement("td");
	phone.innerText="15905155080";
	var reg=document.createElement("td");
	reg.innerText="2000";

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