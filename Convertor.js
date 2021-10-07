var input=document.getElementById("input")
var result=document.getElementById("result")
var inputtype=document.getElementById("inputtype")
var resulttype=document.getElementById("resulttype")
var option_from,option_to

// NOW WE ADD EVENT LISTENER
input.addEventListener("keyup",myResult);
inputtype.addEventListener("change",myResult)
resulttype.addEventListener("change",myResult)

//taking intital value
//option_from=inputtype.value // INPUT TYPE VALUE GIVEN TO OPTION_FORM
//option_to=resulttype.value // AND RESULT TYPE GIVEN TO OPTION_TO
function myResult()
{
    //WHEN WE chnge the input and output type value we need  to update the inputtypevalue and resulttypevalue

    option_from=inputtype.value
    option_to=resulttype.value
    //now compare the input type and result type value  and add formula 
    if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}
	

    // IF we dont write number in input , js automatic return Nan
}