$(document).ready(function(){
     $("#ceP").focusout(function(event){
         let cep = event.target.value;
        fetch('https://viacep.com.br/ws/'+cep+'/json/', {
            method: 'get'
        })
        .then(function(response){
            response.json().then(function(result){
                $('.logra').val(result.logradouro);
                $('.comp').val(result.bairro);
                $('.bairr').val(result.bairro);
                $('.localidade').val(result.localidade);
                $('.uff').val(result.uf);      
            })
        })
        .catch(function(error){
            console.log('Cep inválido' + error.message);
        });
        });
     });

  
    


