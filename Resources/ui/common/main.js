function Main(){
	
	var Cloud = require('ti.cloud');
	
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'blue',
	});
	
	var imagen = Titanium.UI.createImageView({
		top:20,
		height:250,
		width:250,
		borderColor:'#000',
		borderRadius:5,
	});
	
	var send = Titanium.UI.createButton({
		top:300,
		height:40,
		width:150,
		title:'enviar foto',
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
	
	
	function tomarFoto(){
		Titanium.Media.openPhotoGallery({
			success:function(event){
				var img = event.media;
				imagen.image = img;
			},
			error:function(){
				alert('error');
			},
			cancel:function(){
				
			},
			allowEditing:true,
		});
	}
	
	
	imagen.addEventListener('click', function(e){
		tomarFoto();
	});
	
	
	self.add(botonLogout);
	self.add(imagen);
	self.add(send);
	return self;
}
module.exports = Main;
