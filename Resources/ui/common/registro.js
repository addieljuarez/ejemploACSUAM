function Registro(){
	
	var Cloud = require('ti.cloud');
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'pink',
	});
	
	var contenedor = Titanium.UI.createScrollView();
	
	
	var saludo = Titanium.UI.createLabel({
            text:'registrate',
            top:'30dp',
            color:'#000',
    });
    
    var userName = Titanium.UI.createTextField({
            width:'250dp',
            top:'60dp',
            hintText:'nombre de usuario',
            borderColor:'#000',
            borderRadius:5,
    });
    
    
    var password = Titanium.UI.createTextField({
            width:'250dp',
            top:'120dp',
            hintText:'password',
            passwordMask:true,
            borderColor:'#000',
            borderRadius:5,
    });
    
    
    var password2 = Titanium.UI.createTextField({
            width:'250dp',
            top:'180dp',
            hintText:'confirma tu password',
            passwordMask:true,
            borderColor:'#000',
            borderRadius:5,
    });
    
    
    var send =  Titanium.UI.createButton({
            title:'enviar',
            top:'300dp',
            width:'180dp',
    });
    
    
    //------------------------------------------------
    // addeventListener
    //------------------------------------------------
    
    userName.addEventListener('return', function(e){
    		password.focus();
    });
    
    password.addEventListener('return', function(e){
    		password2.focus();
    });
    
    
    
    send.addEventListener('click',function(e){
    		if (userName.value != '' && password.value != '' && password2.value!='') {
    			if (password.value === password2.value) {
    				Cloud.Users.create({
				    email: userName.value,
				    first_name: 'test_firstname',
				    last_name: 'test_lastname',
				    password: password.value,
				    password_confirmation: password2.value
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
    				alert('pass not match');
    			}
    			
    		}else{
    			alert('faltan datos');
    		}
    });
    
    
    
    contenedor.add(send);
	contenedor.add(password);
	contenedor.add(password2);
    contenedor.add(userName);
    contenedor.add(saludo);
    self.add(contenedor);
	
	return self;
}
module.exports = Registro;