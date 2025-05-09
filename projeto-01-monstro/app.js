new Vue({
    el: '#app',
    data:{
        clicado: false,
        ganhou: null,
        aplicar: true,
        widthM: 100,
        widthJ: 100,
        monstro: 0,
        jogador: 0,
        placar:[]

    },
    computed:{
        perigoJ(){
            if(this.widthJ <= 20){
                return 'danger';
            }
        },
        perigoM(){
            if(this.widthM <= 20){
                return 'danger';
            }
        }, 
        resultado(){
            this.widthJ <= 0 ? this.ganhou = false : this.ganhou = true;

            if(this.widthJ <= 0 ||  this.widthM <= 0){
                this.clicado = false;
            }
        }
    },
    methods:{
        botaoclick(){
            this.widthJ = 100;
            this.widthM = 100;
            this.monstro = 0;
            this.jogador = 0;
            this.ganhou = null;
            this.placar = [];
            return this.clicado = !this.clicado;
        },
        incluirplacar(mensagem, estilo){
            this.placar.unshift({mensagem, estilo});
        },
        desistir(){
            this.widthJ = 100;
            this.widthM = 100;
            this.monstro = 0;
            this.jogador = 0;
            this.ganhou = null;
            this.clicado = false;
            this.placar = [];
        },
        curar(){
            this.jogador = Math.floor(Math.random() * (13 - 7) + 7);
            this.monstro = Math.floor(Math.random() * (13 - 7) + 7);

            console.log('Monstro:', this.monstro);
            console.log('Jogador:', this.jogador);

            this.widthJ += this.jogador;

            this.widthJ < this.monstro ? this.widthJ = 0 : this.widthJ -= this.monstro;
            
            console.log('WMonstro:', this.widthM);
            console.log('WJogador:', this.widthJ);

            this.resultado;
            
            this.incluirplacar(`JOGADOR GANHOU FORÇA DE ${this.jogador}`, 'player');
            this.incluirplacar(`MONSTRO ATINGIU JOGADOR COM ${this.monstro}`, 'monster');
        },
        ataqueEspecial(){
            this.jogador = Math.floor(Math.random() * (13 - 7) + 7);
            this.monstro = Math.floor(Math.random() * (13 - 7) + 7);

            console.log('Monstro:', this.monstro);
            console.log('Jogador:', this.jogador);

            this.widthJ < this.monstro ? this.widthJ = 0 : this.widthJ -= this.monstro;
            
            this.widthM < this.jogador ? this.widthM = 0 : this.widthM -= this.jogador;

            console.log('WMonstro:', this.widthM);
            console.log('WJogador:', this.widthJ);

            this.resultado;

            this.incluirplacar(`JOGADOR ATINGIU MONSTRO COM ${this.jogador}`, 'player');
            this.incluirplacar(`MONSTRO ATINGIU JOGADOR COM ${this.monstro}`, 'monster');
        },
        ataque(){
            this.jogador = Math.floor(Math.random() * (13 - 7) + 7);

            do {
                this.monstro = Math.floor(Math.random() * (13 - 7) + 7);
            } while (this.jogador >= this.monstro);

            console.log('Monstro:', this.monstro);
            console.log('Jogador:', this.jogador);

            this.widthJ < this.monstro ? this.widthJ = 0 : this.widthJ -= this.monstro;
            
            this.widthM < this.jogador ? this.widthM = 0 : this.widthM -= this.jogador;

            console.log('WMonstro:', this.widthM);
            console.log('WJogador:', this.widthJ);

            this.resultado;

            this.incluirplacar(`JOGADOR ATINGIU MONSTRO COM ${this.jogador}`, 'player');
            this.incluirplacar(`MONSTRO ATINGIU JOGADOR COM ${this.monstro}`, 'monster');
        }
    }
   
})