<template>
  <header>
      <nav
        class="navbar navbar-expand-lg navbar-light border-bottom border-1 pt-3 pb-3"
      >
        <div class="container">
          <router-link class="navbar-brand" to="/"
            ><h2 class="fw-bolder">Shikhi</h2></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/about"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Courses</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>