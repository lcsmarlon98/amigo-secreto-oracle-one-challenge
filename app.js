//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista_amigo = []

const remover_mensagem_erro = () => {
    const span_elemento = document.getElementById('text-error')
    span_elemento.innerHTML = ""
}

const apresentar_messagem_erro_nome_vazio = () => {
    const span_elemento = document.getElementById('text-error')
    span_elemento.append('Por favor, insira um nome.')
}

const adicionarAmigo = () => {
    remover_mensagem_erro()

    const input_elemento = document.getElementById('amigo')
    const nome = input_elemento.value

    if (nome) {
        lista_amigo.push(nome)
        console.log(lista_amigo)
    } else {
        apresentar_messagem_erro_nome_vazio()
    }
}