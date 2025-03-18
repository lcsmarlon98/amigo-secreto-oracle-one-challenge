//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista_amigo = []

const adicionarAmigo = () => {
    const input_elemento = document.getElementById('amigo')
    const nome = input_elemento.value

    if (nome) {
        lista_amigo.push(nome)
        console.log(lista_amigo)
    }
}