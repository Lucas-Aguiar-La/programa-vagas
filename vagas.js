let jobsList = [];
// Listar vagas
function showJobs() {
  let vacancyText = jobsList.reduce(function (finalText, vacancy, index) {
    finalText += `${index}. `;
    finalText += vacancy.jobName;
    finalText += ` (${vacancy.candidates.length} candidatos)\n`;
    return finalText;
  }, "");

  alert(vacancyText);
}
// Criar nova vaga
function newJob() {
  let jobName = prompt("Qual o nome da vaga que deseja cadastrar?");
  let jobDescription = prompt("Faça uma descrição da vaga: ");
  let jobData = prompt("Especifique uma data limite (dd/mm/aaaa): ");

  let answer = confirm(`Dados da vaga:
  Nome da vaga: ${jobName}
  Descrição da vaga: ${jobDescription}
  Data limite: ${jobData}\n
  Deseja criar nova vaga?`);

  if (answer) {
    let newJob = { jobName, jobDescription, jobData, candidates: [] };
    jobsList.push(newJob);
    alert("Vaga cadastrada com sucesso!");
  } else {
    alert("Vaga não cadastrada.");
  }
}
// Ver vagas
function seeJobs() {
  let index = prompt("Informe o índice da vaga que deseja exibir: ");
  let vacancy = jobsList[index];

  let candidatesText = vacancy.candidates.reduce(function (
    finalText,
    candidates
  ) {
    return finalText + "\n - " + candidates;
  },
  "");

  alert(`Vaga nº ${index}
  Nome: ${vacancy.jobName}
  Descrição: ${vacancy.jobDescription}
  Data limite: ${vacancy.jobData}
  Quantidade de candidatos: ${vacancy.candidates.length}
  Candidatos inscritos: ${candidatesText}`);
}
// Inscrever candidato em uma vaga
function subCandidate() {
  let candidate = prompt("Qual é o nome do candidato?");
  let index = prompt(
    "Qual o índice da vaga para a qual o candidato deseja se inscrever?"
  );
  let vacancy = jobsList[index];

  let answer =
    confirm(`Deseja inscrever o candidato ${candidate} na vaga ${index}?
  Nome: ${vacancy.jobName}
  Descrição: ${vacancy.jobDescription}
  Data limite: ${vacancy.jobData}`);

  if (answer) {
    vacancy.candidates.push(candidate);
    alert(`Candidato ${candidate} foi inscrito com sucesso!`);
  } else {
    alert("Candidato não inscrito na vaga.");
  }
}
// Remover uma vaga
function deleteJobVac() {
  let index = prompt("Informe o índice da vaga que deseja excluir:");
  let vacancy = jobsList[index];

  let answer = confirm(`Você tem certeza que deseja excluir a vaga ${index}?
  Nome: ${vacancy.jobName}
  Descrição: ${vacancy.jobDescription}
  Data limite: ${vacancy.jobData}`);

  if (answer) {
    jobsList.splice(index, 1);
    alert("Vaga excluída.");
  } else {
    alert("A operação foi cancelada.");
  }
}
// Menu
function showMenu() {
  let options = prompt(`Bem vindo ao cadastro de vagas de emprego!
  Por favor, escolha uma opção:
  [ 1 ] Listar vagas disponíveis
  [ 2 ] Criar nova vaga
  [ 3 ] Visualizar uma vaga
  [ 4 ] Inscrever candidato em uma vaga
  [ 5 ] Excluir uma vaga
  [ 6 ] Sair`);

  return options;
}
// Chamada de funções
function exe() {
  let option = "";

  do {
    option = showMenu();

    switch (option) {
      case "1":
        showJobs();
        break;
      case "2":
        newJob();
        break;
      case "3":
        seeJobs();
        break;
      case "4":
        subCandidate();
        break;
      case "5":
        deleteJobVac();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("algo deu errado!\n Atualize a página e tente novamente.");
    }
  } while (option !== "6");
}

exe();
