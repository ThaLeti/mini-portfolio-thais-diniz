// passo 1: pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");

// passo 2: identificar o clique no elemento aba.

abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesdaAba(aba)
    });
});

function selecionarAba(aba){
            // passo 3: quando o usuário clicar, marcar a aba selecionada
            const abaSelecionada = document.querySelector(".aba.selecionado");
            abaSelecionada.classList.remove("selecionado")
    
            // passo 4: marcar a aba clicada como selecionado
            aba.classList.add("selecionado")
}

function mostrarInformacoesdaAba(aba){
            // passo 5: esconder o conteúdo anterior
            const informacaoSelecionada = document.querySelector(".informacao.selecionado");
            informacaoSelecionada.classList.remove("selecionado");
    
            // passo 6: mostrar o conteúdo da aba selecionada
            const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
            
            const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
            informacaoASerMostrada.classList.add("selecionado")
            
}