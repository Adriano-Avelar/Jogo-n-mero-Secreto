let listaNumerosSorteador = [];
let numeroPrincipal = 10;
let numeroAleatorio =  numeroSecreto();
tentativas = 1;

function ExibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    ExibirTexto('h1', 'Jogo do Número Secreto');
    ExibirTexto('p', `Escolha um Número de 1 a ${numeroPrincipal}`);
}
exibirMensagemInicial();

function verificarChute(){
    chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        ExibirTexto('h1','Você Acertou!!')
        palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensamTentativa = `Parabéns você acertou com ${tentativas} ${palavraTentativas}`
        ExibirTexto('p',`${mensamTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if ( chute > numeroAleatorio ){
            ExibirTexto('p', 'O número é menor')
        }else{
            ExibirTexto('p', 'O número é maior')
        }
    }
    tentativas++;
    limpaTela();
}

function numeroSecreto(){
   let numeroEscolhido = parseInt(Math.random() * numeroPrincipal + 1);
   let quantidadeElementosNaLista = listaNumerosSorteador.length;

   if ( quantidadeElementosNaLista == numeroPrincipal){
    listaNumerosSorteador = []
   }
   if (listaNumerosSorteador.includes(numeroEscolhido)){
        return numeroSecreto()
   }else{
        listaNumerosSorteador.push(numeroEscolhido);
        console.log(listaNumerosSorteador)
        return numeroEscolhido;
   }
}

function limpaTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio =  numeroSecreto();
    limpaTela();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', True);
}