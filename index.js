let nomeHeroi = "Lucas"
let xpHeroi = 8500
const notificacao = "Notificação: "

if(xpHeroi >= 8001){
    console.log(notificacao + "O herói " + nomeHeroi + " agora é de nível ascendente!")
    console.log(notificacao + "Ele tem " + xpHeroi + " pontos de xp!")
} else if (xpHeroi < 8001) {
    console.log(nomeHeroi + " ainda não é um herói ascendente!")
} else {
    console.log(nomeHeroi + " ainda não é um herói!")
}