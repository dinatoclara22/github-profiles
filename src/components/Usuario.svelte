<script lang="ts">
	import type IUsuario from "../interfaces/IUsuario";
	import BarraSuperior from "./BarraSuperior.svelte";

	export let usuario: IUsuario;
	$: temRepositorios = Boolean(usuario.repositorios_recentes.length);
	// $ é uma variável reativa, toda vez que ela for alterada, o componente será atualizado
</script>

<div class="card-usuario">
	<BarraSuperior />

	<div class="usuario">
		<div class="foto-container">
			<a href={usuario.perfil_url} target="_blank" rel="noopener">
				<div
					class="foto-usuario"
					style:background-image="url({usuario.avatar_url})"
				/>
			</a>
		</div>

		<div class="detalhes-usuario">
			{#if usuario.nome}
				<div class="info">
					Nome: <span>{usuario.nome}</span>
				</div>
			{/if}
			<div class="info">
				Usuário: <span>{usuario.login}</span>
			</div>
			<div class="info">
				Seguidores: <span>{usuario.seguidores}</span>
			</div>
			<div class="info">
				Repositórios: <span>{usuario.repositorios_publicos}</span>
			</div>
		</div>

		{#if temRepositorios}
			<div class="repositorios">
				<h2 class="titulo">Repositórios Recentes:</h2>
				<ul>
					{#each usuario.repositorios_recentes as repositorio}
						<li>
							<a
								class="repositorio"
								href={repositorio.url}
								target="blank"
								rel="noopener"
							>
								{repositorio.nome}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>

<style>
	.card-usuario {
		margin-top: 65px;
	}
	.usuario {
		padding: 28px 0;
		background: #334155;
		box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
		border-radius: 0px 0px 13px 13px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.foto-container {
		margin-right: 81px;
		background-color: #334155;
	}
	.foto-usuario {
		width: 12.75rem;
		height: 12.75rem;
		border: 4.56px solid #2e80fa;
		border-radius: 50%;
		background-size: cover;
	}
	.detalhes-usuario {
		margin-right: 55px;
		margin-bottom: 4em;
		background-color: #334155;
	}

	.detalhes-usuario > .info {
		font-weight: 600;
		font-size: 20px;
		line-height: 31px;
		color: #94a3b8;
		background-color: #334155;
	}
	.detalhes-usuario > .info > span {
		color: #6781a8;
		font-weight: normal;
		background-color: #334155;
	}
	.repositorios > .titulo {
		font-size: 20px;
		line-height: 31px;
		font-weight: 600;
		color: #94a3b8;
		background-color: #334155;
	}
	.repositorio {
		font-size: 20px;
		line-height: 31px;
		color: #6781a8;
		transition: color 0.2s;
		background-color: #334155;
	}

	ul > li {
		width: 100%;
		background-color: #334155;
	}
</style>
