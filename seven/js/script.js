$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="谭敏敏" &&  pwd=="20170607"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert("嘿嘿不正确,密码是:20170607");
	}
});
