function consultarCep() {
    $(".barra-progresso").show()
    var cep = document.getElementById("cep").value
    var url = `https://viacep.com.br/ws/${cep}/json`
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo-cep").html(`CEP ${cep}`)
            $(".cep").show()
            $(".barra-progresso").hide()
        }
    })
}

$(function() {
    $(".cep").hide()
    $(".barra-progresso").hide()
})

// Ao executar o comando $("#taijitu").hide() e a seguir $("#yang").show(), ainda assim nenhum conteúdo seria visível, apesar da propriedade da div "yang" estar configurada como "visível".