	function crypt(str,key){
		var s= new String("")
		var j=0
        var temp
	for(var i=0;i<str.length;i++){
		if(j>=key.length) 
		{
			j=0
		}
		temp=(str.charCodeAt(i) ^ key.charCodeAt(j)).toString(16)
		if(temp<10||temp=="a"||temp=="b"||temp=="c"||temp=="d"||temp=="e"||temp=="f")
			s+= "0" + temp
	     else
	     s+=temp
	     
	    j++
	
}
return s
}
function decrypt(str,key){
	var s = new String("")
	var j=0
	for(var i=0;i<str.length;i+=2){
		if(j>=key.length) 
		{
			j=0
		}
		s+= String.fromCharCode(parseInt(str.substr(i,2),16)^key.charCodeAt(j))
		j++
	}
	return s
}
  
