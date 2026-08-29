const SELETORES = {
  formulario: "#formulario-lead",
  mensagem: "#mensagem-formulario"
};

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
  const formulario = obterElemento(SELETORES.formulario);
  const mensagem = obterElemento(SELETORES.mensagem);

  if (!formulario || !mensagem) {
    return;
  }

  configurarEnvioFormulario(formulario, mensagem);
}

function obterElemento(seletor) {
  return document.querySelector(seletor);
}

function configurarEnvioFormulario(formulario, mensagem) {
  formulario.addEventListener("submit", (evento) => {
    tratarEnvioFormulario(evento, formulario, mensagem);
  });
}

function tratarEnvioFormulario(evento, formulario, mensagem) {
  evento.preventDefault();

  limparMensagem(mensagem);

  if (!formulario.checkValidity()) {
    exibirErro(mensagem, "Preencha todos os campos obrigatórios.");
    formulario.reportValidity();
    return;
  }

  const lead = coletarDadosFormulario(formulario);

  registrarLead(lead);
  exibirSucesso(mensagem);
  limparFormulario(formulario);
}

function coletarDadosFormulario(formulario) {
  const dados = new FormData(formulario);

  return {
    nome: normalizarTexto(dados.get("nome")),
    whatsapp: normalizarTexto(dados.get("whatsapp")),
    empresa: normalizarTexto(dados.get("empresa")),
    segmento: normalizarTexto(dados.get("segmento")),
    volume: normalizarTexto(dados.get("volume")),
    controle: normalizarTexto(dados.get("controle"))
  };
}

function normalizarTexto(valor) {
  return String(valor ?? "").trim();
}

function registrarLead(lead) {
  console.info("Lead capturado:", lead);
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
