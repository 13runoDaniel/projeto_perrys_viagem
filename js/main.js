$('document').ready(function(){
    $('#telefone').mask(`(00) 0000-0000`);
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: false
            },
            email:{
                required: true
            },
        },
        messages:{
            nome: `Informe seu nome`,
            email: `Informe seu e-mail`,
            mensagem: `Deixe-nos uma mensagem`,
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`!! ATENÇÃO !! é necessário preencher ${camposIncorretos} campo(s).`)
            }
        }
    });
    $('.imagem_destino button').click(function(){
        const destino = $('#fale_conosco');
        const destinoEscolhido = $(this).parent().find('h5').text();

        $('#meu_destino_e').val(destinoEscolhido);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    });
});