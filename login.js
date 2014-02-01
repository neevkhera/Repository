var Url=new Array();
var username = new Array();
var password = new Array();
  //fill varialbes.
var x=window.location.href
for(var i=0;i<Url.length;i++){
if(x==Url[i]){
$("document").ready(function(){



 	$(":text").filter(function(){return $(this).attr('name').toLowerCase().indexOf('uname')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('name').toLowerCase().indexOf('email')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('name').toLowerCase().indexOf('username')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('name').toLowerCase().indexOf('login')>-1}).first().val(username[i])
    $(":input").filter("[type=email]").first().val(username)

    
    $(":text").filter(function(){return $(this).attr('id').toLowerCase().indexOf('uname')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('id').toLowerCase().indexOf('email')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('id').toLowerCase().indexOf('username')>-1}).first().val(username[i])
    $(":text").filter(function(){return $(this).attr('id').toLowerCase().indexOf('login')>-1}).first().val(usernam[i])
    
       
    $(":password").val(password[i])
    
    
    if(!$(":input").filter("[type=submit]").click()){

    $("button").filter("[type=submit]").first().click()
}

})

}
}

 
