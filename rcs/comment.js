
var oText = document.getElementById('input');
var oButton = document.getElementById('button');
var oUl = document.getElementById('content');

oButton.onclick = function(){
	var sText = oText.value;
	var oLi = document.createElement('li'); 
	oLi.innerHTML = sText;
	if (oUl.children.length > 0){
	var oFirstNode = oUl.children[0];
	oUl.insertBefore(oLi, oFirstNode);
	}
	else{
	oUl.appendChild(oLi);
	}

}