const readline = require("readline-sync")

function start(){
    const data = {}

    data.searchTerm = askReturnsearchTerm()
    data.prefixTerm = askReturnprefixTerm()
    
    function askReturnsearchTerm() {
        return readline.question('Digite termo de busca no Wikipedia:')
    }
    function askReturnprefixTerm() {

        const prefixes = ["Quem e", "O que e", "A Historia do "]
        const selectedPrefixesIndex = readline.keyInSelect(prefixes, "Escolha uma opção:")
        const selectedPrefixestext = prefixes[selectedPrefixesIndex]

        return selectedPrefixestext

    }

    console.log(data)
} 
start()