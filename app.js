//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista_amigo = []

const remover_mensagem_erro = () => {
    const span_elemento = document.getElementById('text-error')
    span_elemento.innerHTML = ""
}

const apresentar_messagem_erro_nome_vazio = (mensagem = 'Por favor, insira um nome.') => {
    const span_elemento = document.getElementById('text-error')
    span_elemento.append(mensagem)
}

const criar_lista_nao_ordenada_nome = () => {
    const ul_elemento_listaAmigos = document.getElementById('listaAmigos')
    let li_elemento_nomes = ""

    lista_amigo.forEach(nome => li_elemento_nomes += `<li>${nome}</li>`)
    ul_elemento_listaAmigos.innerHTML = li_elemento_nomes
}

const adicionarAmigo = () => {
    remover_mensagem_erro()

    const input_elemento = document.getElementById('amigo')
    const nome = input_elemento.value

    if (nome) {
        if (lista_amigo.filter(nome_amigo => nome_amigo.toLowerCase() === nome.toLowerCase()).length === 0) {
            lista_amigo.push(nome)
        } else {
            lista_amigo.splice(lista_amigo.indexOf(nome), 1);
        }
        input_elemento.value = ""
    } else {
        apresentar_messagem_erro_nome_vazio()
    }

    criar_lista_nao_ordenada_nome()
}

const obter_nome_sorteado = () => {
    let sorteadoIndex = Math.floor(Math.random() * lista_amigo.length);
    return lista_amigo[sorteadoIndex]
}

const mostrar_resultado = nome => {
    const ul_elemento_resultado = document.getElementById('resultado')
    ul_elemento_resultado.innerHTML = `<li>${nome}</li>`
}

const sortearAmigo = () => {
    if (!lista_amigo.length) {
        apresentar_messagem_erro_nome_vazio('É necessário adicionar pelo menos um nome antes de sortear.')
    } else {
        mostrar_resultado(
            obter_nome_sorteado())
    }
}