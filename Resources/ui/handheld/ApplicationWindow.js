function ApplicationWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	});
	var Login = require('ui/common/login');
	var login = new Login();
	
	
	self.addEventListener('open',function(){
		
		login.open();
		
	});
	
	
	
	return self;
}
module.exports = ApplicationWindow;
