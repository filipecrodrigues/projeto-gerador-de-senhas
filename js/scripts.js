/*seleção de elementos */
const generatepasswordButton = document.querySelector("#generate-password");
const generatedpasswordElement = document.querySelector("#generated-password");


/*Funções */

/*gerando letras minusculas */
const getLetterLowerCase = ()=>{

    return (String.fromCharCode(Math.floor(Math.random()*26) +97));
};
/* gerando letras maiusculas */
const getLetterUpperCase = ()=>{

    return (String.fromCharCode(Math.floor(Math.random()*26) +65));
};

/*gerando numeros aleatórios */
const getNumbers = () =>{
    return (Math.floor(Math.random()*10).toString()) //math.floor para pegar um numero quebrado
}
/*gerando caracteres especiais */
 const getSymbols = () =>{
    const symbols ="!@#$%^&*()-_+=[]{}';:\",./<>?\\|~`";
    return symbols [Math.floor(Math.random()* symbols.length)];
 };

/* Funçaço que pega os caracteres aleatorios e entrga as senhas */

const generatedpassword =(getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols) =>{ //passando as funções como parametros
  
     let password =" ";

     const passwordLength = 10; //senha de 10 caracters
     const generators = [getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols ]
    
    //loop para execultar aleatoriamente as funções
 
    for(i = 0; i <passwordLength; i+= generators.length  ){
        generators.forEach(() => {
            
            const randomValue = generators[Math.floor(Math.random()* generators.length)]();
            
            password +=randomValue;
        });
    }
        password = password.slice(0, passwordLength);
        
        /*Exibição do elemnto */
        generatedpasswordElement.style.display ="block"
        generatedpasswordElement.querySelector("h4").innerText = password;

};


/*Eventos */
generatepasswordButton.addEventListener("click", ()=>{
    generatedpassword(getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols);
});
