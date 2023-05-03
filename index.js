emailDoUsuario = prompt("Qual o seu e-mail?")
nomeDoUsuario = prompt("Qual o seu nome?")
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeDoUsuario}!`);

comidas = ["pizza", "shoarma", "lasanha", "churrasco", "batata"];
console.log(comidas)
console.log(`Essas são as minhas comidas preferidas:\n${comidas[0]}\n${comidas[1]}\n${comidas[2]}\n${comidas[3]}\n${comidas[4]}`)
comidas[1] =  prompt("Qual a sua comida favorita?")
console.log(comidas)

listaDeTarefas=[]
for(i=0; i<3; i++){
listaDeTarefas[i] = prompt("Diga uma tarefa pendente")
}
console.log(listaDeTarefas)
indice = Number(prompt("Digite o índice da tarefa (0, 1 ou 2)"))
listaDeTarefas.splice(indice,1)
console.log("Tarefas",listadeTarefas)