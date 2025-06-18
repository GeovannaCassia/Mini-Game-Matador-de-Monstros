# 🧟‍♂️ Jogo Vue - Jogador vs Monstro 🎮
Este é um projeto simples feito com Vue.js, onde o jogador enfrenta um monstro em batalhas de ataque, ataque especial e cura. O objetivo é reduzir a vida do oponente a zero antes que a sua própria vida acabe.

## 📋 Descrição do Projeto
O jogo é controlado por barras de vida que diminuem a cada ação (ataques ou curas). O jogador pode:

* Atacar o monstro

* Fazer um ataque especial

* Se curar

* Desistir da partida

* O jogo registra todas as ações no placar com informações de dano causado e recebido.

## 🎮 Funcionalidades
✅ Sistema de vida para jogador e monstro

✅ Modo de ataque normal e ataque especial

✅ Opção de cura com risco de sofrer dano durante a recuperação

✅ Botão para desistir e reiniciar a partida

✅ Placar de ações realizadas

✅ Indicador de perigo quando a vida estiver abaixo de 20%

## 🏗️ Tecnologias Utilizadas
* Vue js 2

* HTML 5

* CSS3

## 📈 Lógica de Jogo
Ataque Normal → Jogador ataca, Monstro contra-ataca com dano aleatório menor.

Ataque Especial → Ambos causam danos mais significativos.

Cura → Jogador recupera vida, mas pode receber dano do monstro.

Desistir → Reseta o jogo.

As ações são registradas no placar para consulta no final da partida.
