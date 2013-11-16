function Login(){
	
	
	var Cloud = require('ti.cloud');
	var Registro = require('ui/common/registro');
	
	
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
			Cloud.Users.login({
			    login: inputName.value,
			    password: inputPass.value
			}, function (e) {
			    if (e.success) {
			        var user = e.users[0];
			        alert('Success:\n' +
			            'id: ' + user.id + '\n' +
			            'sessionId: ' + Cloud.sessionId + '\n' +
			            'first name: ' + user.first_name + '\n' +
			            'last name: ' + user.last_name);
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		}else{
			alert('faltan datos');
		}
	});
	
	registro.addEventListener('click', function(e){
		var registroWin = new Registro();
		registroWin.open();
	});
	
	
	contenedor.add(inputName);
	contenedor.add(inputPass);
	contenedor.add(aceptar);
	contenedor.add(registro);
	self.add(contenedor);
	return self;
}
module.exports = Login;