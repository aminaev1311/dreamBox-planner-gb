<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg border-bottom">
        <div class="container">
          <a class="navbar-brand" href=""><img src="@/assets/logo.svg" alt="logo" /></a>

          <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-3"><a href="#features" class="nav-link">Features</a></li>
              <li class="nav-item me-3"><a href="" class="nav-link">Blog</a></li>
              <li class="nav-item me-3"><a href="#pricing" class="nav-link">Pricing</a></li>
              <li class="nav-item me-3"><a href="contact-us" class="nav-link">Contact Us</a></li>
              <li class="nav-item me-3"><a href="#about" class="nav-link">About</a></li>
              <button class="btn btn-primary" @click="$emit('login')" >Log In</button>
            </ul>
          </div>
        </div>
    </nav>
  </header>
  <body>
    <section id="title" class="container">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center py-5 h500">
                <h1 class="title-heading text-primary mb-5">DREAMBOX PLANNER</h1>
                <p class="text-secondary title-text mb-5">For everyone who wants to change his life, but does not know where to start. We will help to make your life bright and eventful!</p>
                <button class="btn btn-lg btn-primary btn-signup" @click="$emit('login')">Sign Up Now</button>
                <p class="text-muted mb-5 tal">and start changing your life</p>
            </div>
            <div class="col-lg-6 d-flex justify-content-center h500">
                <img src="../assets/time_cogs.svg" alt="do more!" class="title-image">
            </div>
        </div>
    </section>
    <section id="features" class="container">
        <h2 class="text-primary">Features</h2>
        <p class="text-secondary">Dreambox Planner will help you define your life priorities and plan tasks to reach your goals.</p>
        <div class="row feature-box-gap justify-content-between">
            <div class="col-lg-2 col-md-6 p-2 feature-box">
                <i class="fas fa-cog fa-4x mb-3"></i>
                <h4  class="mb-3">Колесо баланса</h4>
                <p class="mb-3 text-secondary">Составляйте колесо жизненного баланса в соответствии со своими приоритетами</p>
            </div>
            <div class="col-lg-2 col-md-6 p-2 feature-box">
                <i class="fas fa-stopwatch fa-4x mb-3"></i>
                <h4 class="mb-3">Таймер Помодоро</h4>
                <p class="mb-3 text-secondary">Оставайтесь в фокусе и добивайтесь своих целей эффективно</p>
            </div>
            <div class="col-lg-2 col-md-6 p-2 feature-box">
                <i class="fas fa-graduation-cap fa-4x"></i>
                <h4 class="mb-3">Курсы Udemy</h4>
                <p class="mb-3 text-secondary">Присоединяйтесь к миллионам студентов Udemy со всего мира. Выбирайте курсы прямо из приложения</p>
            </div>
            <div class="col-lg-2 col-md-6 p-2 feature-box">
                <i class="fas fa-bell fa-4x"></i>
                <h4 class="mb-3">Напоминания</h4>
                <p class="mb-3 text-secondary"> Настраивайте свою систему напоминаний. Выбирайте удобный способ и время.</p>
            </div>
        </div>
    </section>

    <section id="pricing" class="container">
        <h2 class="text-primary">Pricing</h2>
        <p class="text-secondary">Choose a plan that works for you!</p>
        <div class="row feature-box-gap justify-content-center">
            <div class="col-lg-3 col-md-6 p-2 feature-box">
                <i class="fas fa-cog fa-4x mb-3"></i>
                <h4  class="mb-3">FREE</h4>
                <p class="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2 feature-box">
                <i class="fas fa-stopwatch fa-4x mb-3"></i>
                <h4 class="mb-3">LIGHT</h4>
                <p class="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2 feature-box">
                <i class="fas fa-graduation-cap fa-4x"></i>
                <h4 class="mb-3">PREMIUM</h4>
                <p class="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.</p>
            </div>
        </div>
    </section>

    <section id="contact-us" class="container">
        <h2 class="text-primary">CONTACTS</h2>
        <div class="row feature-box-gap justify-content-center">
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-cog fa-4x mb-3"></i>
                <h4  class="mb-3">Visit us</h4>
                <p class="mb-3 text-secondary">GEEKBRAINS г. Москва</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-stopwatch fa-4x mb-3"></i>
                <h4 class="mb-3">Call us</h4>
                <p class="mb-3 text-secondary">8 (800) 450-00-00</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-graduation-cap fa-4x"></i>
                <h4 class="mb-3">Email Us</h4>
                <p class="mb-3 text-secondary">support@example.com</p>
            </div>
        </div>
    </section>

  </body>
  <footer>
      <nav class="navbar navbar-light border-top">
        <div class="container">
          <a class="navbar-brand" href="">DreamBox</a>

            <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item me-3"><a href="#features" class="nav-link">Privacy Policy</a></li>
              <li class="nav-item me-3"><a href="" class="nav-link">Terms and Conditions</a></li>
            </ul>
        </div>
    </nav>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    .btn-signup
        text-align: left
        width: inherit
    .title-heading
        font-weight: 600
        text-align: left
    .title-text
        font-weight: 600
        text-align: left
    .title-image
        width: 100%
    .border-bottom
        border-bottom: 1px solid #E5E5E5
    .border-top
        border-top: 1px solid #E5E5E5
    .container
        min-height: inherit
    .btn-login
        background-color: #62013C
    .tal
        text-align: left
    .h500
        height: 500px
    .feature-box
        border: 1px solid #B3B3B3
        border-radius: 5px
        box-sizing: border-box
        &-gap
            gap: 16px
</style>