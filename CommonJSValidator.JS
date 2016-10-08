//FastValJS Version 1.0.0 by Mehul Shah, www.SolutionZeal.com

function Validator(FName,JObj)
{
	FElems=document.forms[FName].elements;
	JFields=JObj.form.fields;
	var flag=true;
	var fLen=JFields.length;

	for(var i=0;i < fLen;i++) {
		var jField=JFields[i];
		var val=FElems[jField.name].value;
		var VSet=jField.validations;
				
		if(val.length==0 && jField.mandatory=="Y"){
			flag=false;
			alert(jField.label+" is mandatory.");
		} else {
			if(VSet!=null){
				var vLen=VSet.length;
				for(var j=0;j<vLen;j++) {
					if( ((VSet[j].Type=="BI") && (! evaluate(val,VSet[j].Rule)) )  || ( (VSet[j].Type=="PD" ) && (! regEx(val,VSet[j].Rule)) )  ){
						flag=false;
						alert(VSet[j].Msg);
					}
				}// For j
			}//if
		}//else
	}//For i
return flag;
}

function evaluate(value,rule){
	return eval('"' + value + '"'+rule);
}

function regEx(value,rule){
	var re=new RegExp(rule);
	return re.test(value);
}