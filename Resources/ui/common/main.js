function Main(){
	
	var Cloud = require('ti.cloud');
	
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'blue',
	});
	
	
	var botonLogout = Titanium.UI.createButton({
		bottom:10,
		height:40,
		width:150,
		title:'Logout',
	});
	
	
	botonLogout.addEventListener('click', function(e){
		Cloud.Users.logout(function (e) {
		    if (e.success) {
		        alert('Success: Logged out');
		        Titanium.App.Properties.setBool('autentificacion', false);
				Ti.App.fireEvent('desautentificacion');
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	
	self.add(botonLogout);
	return self;
}
module.exports = Main;
