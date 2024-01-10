<template>
<header>
        <!-- Header Start -->
        <div class="header-area header-transparrent">
            <div class="headder-top header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-2">
                            <!-- Logo -->
                            <div class="logo">
                                <a href="index.html"><img src="/assets/img/logo/logo.png" alt=""></a>
                            </div>  
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="menu-wrapper">
                                <div class="main-menu">
                                    <nav class="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><router-link :to="'/'"  class="d-inline-block">Home </router-link></li>
                                             <li><router-link :to="'/findjob/'"  class="d-inline-block">Find a Job </router-link></li>
                                            <li><router-link :to="'/blogs/'"  class="d-inline-block">Blogs </router-link></li>
                                            <li><router-link :to="'/about/'"  class="d-inline-block">About </router-link></li>
                                           <li><router-link :to="'/contact/'"  class="d-inline-block">Contact </router-link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="header-btn d-none f-right d-lg-block">
                                    <a href="#" class="btn head-btn1">Register</a>
                                    <a href="#" class="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>

    <!--================Blog Area =================-->
    <div class="container-fluid mt-3 my-5 py-5">
      <router-view />
    </div>
    <!--================Blog Area =================-->
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
