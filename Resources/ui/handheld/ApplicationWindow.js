function ApplicationWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	});
	var Login = require('ui/common/login');
	var login = new Login();
	var Main = require('ui/common/main');
	var main = new Main();
	
	
	self.addEventListener('open',function(){
		
		if(!Titanium.App.Properties.hasProperty('autentificacion')){
			Titanium.App.Properties.setBool('autentificacion', false);
		}
		
		
		if(Titanium.App.Properties.getBool('autentificacion')) {
                main.open();
        }else{
                login.open();
        };
		
		
		Ti.App.addEventListener('desautentificacion', function(e) {
	        login.open();
	        main.close();
		});
		
		Ti.App.addEventListener('autentificacion', function(e) {
	        main.open();
	        login.close();
		});
		
	});
	
	
	
	return self;
}
module.exports = ApplicationWindow;
