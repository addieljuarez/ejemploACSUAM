function Login(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	});
	
	var inputName = Titanium.UI.createTextField({
		top:200,
		height:40,
		width:250,
		borderColor:'#000',
		borderRadius:5,
		hintText:'inserta tu nombre'
	});
	
	
	self.add(inputName);
	return self;
}
module.exports = Login;