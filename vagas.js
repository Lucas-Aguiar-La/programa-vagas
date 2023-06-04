let jobsList = [];

function showJobs() {
  let vacancyText = jobsList.reduce(function (finalText, vacancy, index) {
    finalText += `${index}. `;
    finalText += vacancy.name;
    finalText += `(${vacancy.candidates.length} candidatos)\n`;
    return finalText;
  }, "");

  alert(vacancyText);
}

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
