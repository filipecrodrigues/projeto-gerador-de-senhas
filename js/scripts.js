document.addEventListener('DOMContentLoaded', function() {
    /*seleção de elementos */
    const generatepasswordButton = document.querySelector("#generate-password");
    const generatedpasswordElement = document.querySelector("#generated-password");

    /*Elementos novas funcionalidades */
    const OpenCloseGeneratorButton = document.querySelector("#open-generate-password");
    const generatePasswordContainer = document.querySelector(".generate-options");
    const lengthInput = document.querySelector("#length");
    const letterUppercaseInput = document.querySelector("#letters-uppercase");
    const letterLowercaseInput = document.querySelector("#letters-lowercase");
    const numbersInput = document.querySelector("#numbers");
    const symbolInput = document.querySelector("#symbols");
    const copyPasswordButtun = document.querySelector("#copy-password");

    // Verifica se todos os elementos críticos foram encontrados
    if (!OpenCloseGeneratorButton) {
        console.error("Elemento #open-generate-password não encontrado");
        return; // Interrompe a execução se faltam elementos críticos
    }

    if (!generatePasswordContainer) {
        console.error("Elemento .generate-options não encontrado");
        return; // Interrompe a execução se faltam elementos críticos
    }

    // Esconde o container de geração de senha inicialmente
    generatePasswordContainer.style.display = "none";

    /*Funções */
    /*gerando letras minusculas */
    const getLetterLowerCase = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };

    /* gerando letras maiusculas */
    const getLetterUpperCase = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    /*gerando numeros aleatórios */
    const getNumbers = () => {
        return Math.floor(Math.random() * 10).toString();
    }

    /*gerando caracteres especiais */
    const getSymbols = () => {
        const symbols = "!@#$%^&*()-_+=[]{}';:\",./<>?\\|~`";
        return symbols[Math.floor(Math.random() * symbols.length)];
    };

    /* Função que pega os caracteres aleatorios e entrega as senhas */
    const generatedpassword = () => {
        let password = "";

        // Pegar o valor definido pelo usuário ou usar 10 como padrão
        const passwordLength = lengthInput ? parseInt(lengthInput.value) : 10;
        
        // Array para guardar apenas as funções que o usuário selecionou
        const generators = [];
        
        // Adicionar apenas as funções das opções selecionadas
        if (letterLowercaseInput && letterLowercaseInput.checked) {
            generators.push(getLetterLowerCase);
        }
        
        if (letterUppercaseInput && letterUppercaseInput.checked) {
            generators.push(getLetterUpperCase);
        }
        
        if (numbersInput && numbersInput.checked) {
            generators.push(getNumbers);
        }
        
        if (symbolInput && symbolInput.checked) {
            generators.push(getSymbols);
        }
        
        // Se nenhuma opção estiver marcada, use todas
        if (generators.length === 0) {
            generators.push(getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols);
        }

        //loop para executar aleatoriamente as funções
        for (let i = 0; i < passwordLength; i++) {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        }

        // Garantir que a senha tenha exatamente o tamanho solicitado
        password = password.slice(0, passwordLength);

        /*Exibição do elemento */
        if (generatedpasswordElement) {
            generatedpasswordElement.style.display = "block";
            const heading = generatedpasswordElement.querySelector("h4");
            if (heading) {
                heading.innerText = password;
            }
        }
    };

    /*Eventos */
    if (generatepasswordButton) {
        generatepasswordButton.addEventListener("click", generatedpassword);
    }

    // Esta é a parte crítica que estava causando o erro
    OpenCloseGeneratorButton.addEventListener("click", () => {
        if (generatePasswordContainer.style.display === "none" || 
            getComputedStyle(generatePasswordContainer).display === "none") {
            generatePasswordContainer.style.display = "block";
        } else {
            generatePasswordContainer.style.display = "none";
        }
    });

    // Adicionar funcionalidade para copiar a senha
    if (copyPasswordButtun) {
        copyPasswordButtun.addEventListener("click", () => {
            const passwordElement = document.querySelector("#generated-password h4");
            
            if (passwordElement && passwordElement.innerText) {
                // Criar um elemento temporário para copiar o texto
                const tempInput = document.createElement("input");
                tempInput.value = passwordElement.innerText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                
                // Opcional: Mostrar feedback ao usuário
                alert("Senha copiada com sucesso!");
            }
        });
    }
});