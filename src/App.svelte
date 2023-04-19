<script lang="ts">
	import Form from "./components/Form.svelte";
	import Titulo from "./components/Titulo.svelte";
	import Usuario from "./components/Usuario.svelte";
	import type IUsuario from "./interfaces/IUsuario";

	let usuario: IUsuario | null = null;

	function definirUsuario(evento: CustomEvent<IUsuario | null>) {
		usuario = evento.detail; //contem as informações do usuário dentro da api
	}
</script>

<div class="app">
	<header>
		<Titulo />

		<div class="busca-usuario">
			<Form on:aoAlterarUsuario={definirUsuario} />
		</div>
	</header>

	{#if usuario}
		<Usuario {usuario} />
	{/if}
</div>

<style>
	.app {
		max-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.busca-usuario {
		position: relative;
		width: 70%;
	}
</style>
