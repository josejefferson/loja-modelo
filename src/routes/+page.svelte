<script lang="ts">
  import api from '../lib/api'
  import Product from '../components/Product.svelte'
  import ProductPlaceholder from '../components/ProductPlaceholder.svelte'

  let promise: any
  function fetchData() {
    promise = api.get('/products')
  }

  fetchData()
</script>

<div class="bg-light py-5 mb-5">
  <div class="container">
    <h1 class="display-4">Bem-vindo(a)!</h1>
  </div>
</div>

<div class="container">
  {#await promise}
    <div class="row">
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
    </div>
  {:then { data }}
    <div class="row">
      {#each data as product (product._id)}
        <Product {product} />
      {/each}
    </div>
  {:catch err}
    <div class="alert alert-danger py-4">
      <div class="container">
        <h1 class="display-6">Ocorreu um erro!</h1>
        <p>Desculpe-nos! Ocorreu um erro ao carregar os produtos, por favor, tente novamente.</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="btn btn-outline-danger" on:click={fetchData}>Tentar novamente</div>
      </div>
    </div>
  {/await}
</div>
