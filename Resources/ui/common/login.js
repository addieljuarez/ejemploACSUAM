function Login(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	});
	
	var contenedor = Titanium.UI.createScrollView({
		backgroundColor:'transparent',
	});
	
	var inputName = Titanium.UI.createTextField({
		top:200,
		height:40,
		width:250,
		borderColor:'#000',
		borderRadius:5,
		hintText:'inserta tu nombre',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	});
	
	var inputPass = Titanium.UI.createTextField({
		top:300,
		height:40,
		width:250,
		borderColor:'#000',
		borderRadius:5,
		hintText:'inserta tu password',
		passwordMask:true,
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		// keyboardType:Titanium.UI.KEYBOARD_DECIMAL_PAD,
	});
	
	
	var aceptar = Titanium.UI.createButton({
		top:350,
		height:45,
		title:'aceptar',
		width:150,
	});
	
	var registro = Titanium.UI.createButton({
		top:420,
		height:45,
		title:'registro',
		width:150,
	});
	
	
	//----------------------------------------------------------
	//addEventListener
	//----------------------------------------------------------
	
	inputName.addEventListener('return', function(e){
		inputPass.focus();
	});
	
	aceptar.addEventListener('click', function(e){
		if (inputName.value != '' && inputPass.value !='') {
			alert('correcto');
		}else{
			alert('faltan datos');
		}
	});
	
	
	
	
	contenedor.add(inputName);
	contenedor.add(inputPass);
	contenedor.add(aceptar);
	contenedor.add(registro);
	self.add(contenedor);
	return self;
}
module.exports = Login;