var defalutvalue = "输入你希望的Subscriber";
var resultElement = document.getElementById("result");
function gencode(value){

	var firstCode = value.charCodeAt(0);
	var result = getcode(value);
	if(value == ""){
		resultElement.textContent =("");
	}else if(65> firstCode || firstCode >122){
		resultElement.textContent = "第一个字符必须为英文";
	}else{
		resultElement.textContent =("Subscription Code: " + result);
	}
	
}

function handlerfocus(input, isFocus){
		if( !onfocus && input.value == "" ){
		input.value = defalutvalue;
	}else if(isFocus && input.value == defalutvalue){
		input.value = "";
	}
}

var userIdInput = document.getElementById("userId");
userIdInput.value = defalutvalue;