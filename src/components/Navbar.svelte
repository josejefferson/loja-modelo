<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid justify-content-start">
    <button class="open-sidebar btn me-2 p-0 px-1 d-lg-none" type="button">
      <span class="navbar-toggler-icon" />
    </button>
    <a class="navbar-brand" href="/"><i class="fas fa-shopping-basket" /> Modelo de loja</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" title="Início">
          <a class="nav-link" href="/">
            <i class="fas fa-home" /> Início
          </a>
        </li>

        <li
          class="nav-item"
          title="[Usuários]&#13;Edite suas informações pessoais, como nome, endereço, telefone, etc."
        >
          <a class="nav-link" href="/clients">
            <i class="fas fa-users" /> Usuários
          </a>
        </li>

        <li
          class="nav-item"
          title="[Carrinho]&#13;Compre vários produtos de uma vez com o carrinho"
        >
          <a class="nav-link" href="/cart">
            <i class="fas fa-shopping-cart" /> Carrinho
          </a>
        </li>

        <li class="nav-item" title="[Compras]&#13;Veja e cancele suas compras recentes">
          <a class="nav-link" href="/requests/my">
            <i class="fas fa-history" /> Compras
          </a>
        </li>

        <div class="vr bg-light mx-2" />
        <li class="nav-item" title="[Produtos]&#13;Edite ou remova produtos">
          <a class="nav-link" href="/products">
            <i class="fas fa-shopping-bag" /> Produtos
          </a>
        </li>
        <li class="nav-item" title="[Pedidos]&#13;Gerencie os pedidos dos usuários">
          <a class="nav-link" href="/requests">
            <i class="fas fa-bullhorn" /> Pedidos
          </a>
        </li>
        <!-- Dropdown -->
        <li class="nav-item dropdown dropdown-dark">
          <!-- Abrir dropdown -->
          <a
            class="nav-linkdropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-plus" /> Mais
          </a>
          <!-- Elementos do dropdown -->
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
            <li title="[Destaques]&#13;">
              <a class="dropdown-item " href="/highlights">
                <i class="fas fa-certificate" /> Destaques
              </a>
            </li>
            <li title="[Anúncios]&#13;">
              <a class="dropdown-item " href="/ads">
                <i class="fas fa-bullhorn" /> Anúncios
              </a>
            </li>
            <li title="[Administradores]&#13;Gerencie os administradores do sistema">
              <a class="dropdown-item " href="/admins">
                <i class="fas fa-user-shield" /> Admins
              </a>
            </li>
            <li title="[Imagens]&#13;Gerencie as imagens enviadas para o banco de dados">
              <a class="dropdown-item " href="/images">
                <i class="fas fa-image" /> Imagens
              </a>
            </li>
            <li title="[Todos os clientes]&#13;Gerencie todos os clientes do banco de dados">
              <a class="dropdown-item" href="/clients/all">
                <i class="fas fa-users" /> Todos os clientes
              </a>
            </li>
            <li title="[Logs]&#13;Gerencie os logs do sistema">
              <a class="dropdown-item" href="/logs">
                <i class="fas fa-list" /> Logs
              </a>
            </li>
          </ul>
          <!-- Elementos do dropdown -->
        </li>
        <!-- Dropdown -->
        <div class="vr bg-light mx-2" />
        <li class="nav-item" title="Sair">
          <a class="nav-link" href="/logout">
            <i class="fas fa-sign-out-alt" /> Sair
          </a>
        </li>
        <div class="vr bg-light mx-2" />
        <li class="nav-item" title="Painel do administrador">
          <a class="nav-link" href="/login">
            <i class="fas fa-user-shield" /> Painel do administrador
          </a>
        </li>
      </ul>
    </div>
    <!-- .collapse -->
    <!-- <li class="nav-item">
			<div class="open-notifications badge bg-primary rounded-pill fs-6 p-2" title="Notificações">
				<i class="fas fa-bell text-light"></i>
				<span>{{unreadNotificationCount()}}</span>
			</div>
		</li> -->
  </div>
  <!-- .container-fluid -->
</nav>
