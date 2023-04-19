import type IRepositorio from "./IRepositorios";

export default interface IUsuario {
  login : string;
  avatar_url : string;
  perfil_url : string;
  nome : string;
  repositorios_publicos : number;
  seguidores : number;
  repositorios_recentes: IRepositorio[];
}