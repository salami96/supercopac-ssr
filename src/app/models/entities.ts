export interface Prom {
  _id: string;
  titulo: string;
  descricao: string;
  img: string[];
  data: Date;
  dataFinal: Date;
  autor: User;
  loja: string;
  arquivo: string[];
  isEvent: boolean;
  product: [{
    cod: string,
    nome: string,
    preco: number,
    img: string
  }];
}
export interface Product {
  nome: string;
  setor: string;
  img: string;
  cod: string;
  codBarras: string;
  preco: number;
  saldo: number;
}
export interface User {
  _id: string;
  nome: string;
  loja: string;
  email: string;
  senha: string;
  nivel: number;
}
export interface Video {
  titulo: string;
  data: Date;
  dataFinal: Date;
  link: string;
}
export class CartItem {
  constructor(p: Product, q: number) {
    this.prod = p;
    this.quant = q;
    this.total = q * p.preco;
  }
  prod: Product;
  quant: number;
  total: number;
}
export class Order {
  produtos: [{
    prod: Product,
    quant: number,
    total: number,
  }];
  nome: string;
  telefone: string;
  idCliente: number;
  cpf: string;
  rua: string;
  numero: string;
  bairro: string;
  formaPagamento: string;
  comFrete: boolean;
  total: number;
  data: Date;
  status: number;
}
