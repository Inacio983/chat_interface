$(document).ready(function(){
	$("#salas").hide();
	$("#mensagens").hide();

    $("#btn-entrar").on("click",()=>{
        if($("#input-nick").val().length > 2){
            $.ajax({
                url: "https://b851afea-36d8-4d14-8f5f-ebcd9729009c.mock.pstmn.io/entrar",
                method: "POST",
                data: {nick: $("#input-nick").val() },
                sucess: function(response) {
                console.log(response);
                },
                error: function(xhr, status, error) {
                    console.error(error);
                }
            });
        }
    });
});