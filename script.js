const SELETORES = {
  formulario: "#formulario-lead",
  mensagem: "#mensagem-formulario",
  trilhoCarrossel: "[data-carrossel-trilho]",
  anteriorCarrossel: "[data-carrossel-anterior]",
  proximoCarrossel: "[data-carrossel-proximo]",
  pontosCarrossel: "[data-carrossel-ponto]",
  contadorCarrossel: "#carrossel-contador"
};

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
  const formulario = obterElemento(SELETORES.formulario);
  const mensagem = obterElemento(SELETORES.mensagem);

  if (!formulario || !mensagem) {
    configurarCarrosselProduto();
    return;
  }

  configurarEnvioFormulario(formulario, mensagem);
  configurarCarrosselProduto();
}

function obterElemento(seletor) {
  return document.querySelector(seletor);
}

function configurarEnvioFormulario(formulario, mensagem) {
  formulario.addEventListener("submit", (evento) => {
    tratarEnvioFormulario(evento, formulario, mensagem);
  });
}

async function tratarEnvioFormulario(evento, formulario, mensagem) {
  evento.preventDefault();

  limparMensagem(mensagem);

  if (!formulario.checkValidity()) {
    exibirErro(mensagem, "Preencha todos os campos obrigatórios.");
    formulario.reportValidity();
    return;
  }

  const botaoEnvio = formulario.querySelector("[type='submit']");
  const textoOriginalBotao = botaoEnvio?.textContent;

  try {
    definirFormularioEnviando(botaoEnvio, true);
    await registrarLead(formulario);
    exibirSucesso(mensagem);
    limparFormulario(formulario);
  } catch (erro) {
    console.error("Erro ao capturar lead:", erro);
    exibirErro(mensagem, "Não foi possível enviar agora. Tente novamente em instantes.");
  } finally {
    definirFormularioEnviando(botaoEnvio, false, textoOriginalBotao);
  }
}

function criarCorpoFormulario(formulario) {
  const dados = new FormData(formulario);
  return new URLSearchParams(dados).toString();
}

async function registrarLead(formulario) {
  if (window.location.protocol === "file:") {
    console.info("Lead capturado localmente:", Object.fromEntries(new FormData(formulario)));
    return;
  }

  const resposta = await fetch(formulario.action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: criarCorpoFormulario(formulario)
  });

  if (!resposta.ok) {
    throw new Error(`Falha no envio: ${resposta.status}`);
  }
}

function exibirErro(elemento, texto) {
  elemento.textContent = texto;
  elemento.className = "mensagem-formulario mensagem-formulario--erro";
}

function exibirSucesso(elemento) {
  elemento.textContent = "Cadastro recebido com sucesso. Em breve entraremos em contato.";
  elemento.className = "mensagem-formulario mensagem-formulario--sucesso";
}

function limparMensagem(elemento) {
  elemento.textContent = "";
  elemento.className = "mensagem-formulario";
}

function limparFormulario(formulario) {
  formulario.reset();
}

function definirFormularioEnviando(botao, enviando, textoOriginal = "") {
  if (!botao) {
    return;
  }

  botao.disabled = enviando;
  botao.setAttribute("aria-busy", String(enviando));
  botao.textContent = enviando ? "Enviando..." : textoOriginal;
}

function configurarCarrosselProduto() {
  const trilho = obterElemento(SELETORES.trilhoCarrossel);
  const botaoAnterior = obterElemento(SELETORES.anteriorCarrossel);
  const botaoProximo = obterElemento(SELETORES.proximoCarrossel);
  const pontos = Array.from(document.querySelectorAll(SELETORES.pontosCarrossel));
  const contador = obterElemento(SELETORES.contadorCarrossel);

  if (!trilho || pontos.length === 0) {
    return;
  }

  let slideAtual = 0;
  const totalSlides = pontos.length;

  function mostrarSlide(indice) {
    slideAtual = (indice + totalSlides) % totalSlides;
    trilho.style.transform = `translateX(-${slideAtual * 100}%)`;

    pontos.forEach((ponto, indicePonto) => {
      const ativo = indicePonto === slideAtual;
      ponto.classList.toggle("ponto-carrossel--ativo", ativo);
      ponto.setAttribute("aria-current", ativo ? "true" : "false");
    });

    if (contador) {
      contador.textContent = `${slideAtual + 1} de ${totalSlides}`;
    }
  }

  botaoAnterior?.addEventListener("click", () => mostrarSlide(slideAtual - 1));
  botaoProximo?.addEventListener("click", () => mostrarSlide(slideAtual + 1));

  pontos.forEach((ponto) => {
    ponto.addEventListener("click", () => {
      mostrarSlide(Number(ponto.dataset.carrosselPonto));
    });
  });

  trilho.closest(".carrossel-produto")?.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft") {
      mostrarSlide(slideAtual - 1);
    }

    if (evento.key === "ArrowRight") {
      mostrarSlide(slideAtual + 1);
    }
  });

  mostrarSlide(slideAtual);
}
