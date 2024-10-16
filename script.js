$(document).ready(function() {

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        
        messages: {
            nome: 'Por favor, insira seu Nome.',
            telefone:'Por favor, insira seu Telefone.',
            email:'Por favor, insira seu Email.'
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, aguarde retorno.")
            $(form).trigger('reset');
        },

        invalidHandler: function(evento, validador) {
            let campoVazio = validador.numberOfInvalids();
            if(campoVazio) {
                alert(`Existem ${campoVazio} campos incompletos`)
            }
        }
    })

});