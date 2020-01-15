export class pacientes {

    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public telefone: string,
        public cep: string,
        public logradouro: string,
        public bairro: string,
        public cidade: string,
        public estado: string
    ) { }
}
