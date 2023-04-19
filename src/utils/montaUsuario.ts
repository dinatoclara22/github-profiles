import type IRepositorio from "../interfaces/IRepositorios";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(
	dadosUsuario: any,
	dadosRepositorios: any
): IUsuario {
	const repositorios_recentes = dadosRepositorios.map((repositorio) => {
		return {
			nome: repositorio.name,
			url: repositorio.html_url,
		} as IRepositorio;
	});

	return {
		avatar_url: dadosUsuario.avatar_url,
		nome: dadosUsuario.name,
		login: dadosUsuario.login,
		seguidores: dadosUsuario.followers,
		repositorios_publicos: dadosUsuario.public_repos,
		perfil_url: dadosUsuario.html_url,
		repositorios_recentes
	};
}
