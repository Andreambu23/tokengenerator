

function meuEscopo() {

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const dados = []

    // form.onsubmit = function(evento){
    //     evento.preventDefault()
    // };

    // let contador = 1
    function recebeEventoForm(evento) {
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
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(dados);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Planilha');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'Registro-Tokens.xlsx';
        downloadLink.innerHTML = 'Baixar Planilha'; // adicione o texto do link aqui

        // Adicione o link em um elemento HTML, como um botão ou um link
        const resultado = document.querySelector('.resultado');
        resultado.appendChild(downloadLink);


        resultado.innerHTML += `<p>Nome: ${nome.value} ///  Telefone: ${telefone.value} /// Pedido: ${pedido.value} Token: ${token} </p></br>`
        nome.value = '';
        telefone.value = '';
        pedido.value = '';

    }

    form.addEventListener('submit', recebeEventoForm)


}
meuEscopo()