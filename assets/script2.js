function meuEscopo() {
    
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const dados = []

    // form.onsubmit = function(evento){
    //     evento.preventDefault()
    // };

    // let contador = 1
    function recebeEventoForm(evento){
        evento.preventDefault()
        // console.log(`Formulario não foi enviado ${contador}`)
        // contador++
        const nome = form.querySelector('.nome');
        const telefone = form.querySelector('.telefone');
        const pedido = form.querySelector('.pedido');
        const token = document.querySelector(".password").textContent;

        console.log(dados)
        
        dados.push({
            nome: nome.value,
            sobrenome: telefone.value,
            token: token
            
        })

        resultado.innerHTML += `<p>Nome: ${nome.value} ///  Telefone: ${telefone.value} /// Token: ${token} </p></br>`
        nome.value='';
        telefone.value='';
        pedido.value='';
    }
    
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()