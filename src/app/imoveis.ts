export interface Imovel {
    id: number;
    arCondicionado: boolean;
    camaSolteiro: number;
    camaCasal:number,
    quartos:number,
    descricao:string,
    imagemURL:string,
    valorDaDiaria:number,
    telefoneProprietario:number,
    cep:string,
    cidade:string,
    bairro:string,
    uf:string,
    rua:string,
    numero:number,
    complemento:string,
  }
  
  export const imoveisArray = [
    {"id":1,"arCondicionado":false,"camaSolteiro":2,"camaCasal":2,"quartos":4,"descricao":"Casa de Praia","imagemURL":'null',"valorDaDiaria":100.5,"telefoneProprietario":5185452158,"cep":"91111000","cidade":"Porto Alegre","bairro":"Rio Branco","uf":"RS","rua":"Ijui","numero":255,"complemento":"ap 201"}
    ,{"id":2,"arCondicionado":false,"camaSolteiro":2,"camaCasal":2,"quartos":4,"descricao":"Casa de Praia","imagemURL":'null',"valorDaDiaria":100.5,"telefoneProprietario":5185452158,"cep":"91111000","cidade":"Porto Alegre","bairro":"Cristal","uf":"RS","rua":"Ijui","numero":255,"complemento":"ap 201"}
  ];