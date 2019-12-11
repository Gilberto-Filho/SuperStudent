export class Model{

    acao;
    realizacao;
    prioridade;
    data: Date;

    constructor(acao, realizacao, prioridade, data){
        this.acao = acao;
        this.realizacao = realizacao;
        this.prioridade = prioridade;
        this.data = data;
    }
   
}
