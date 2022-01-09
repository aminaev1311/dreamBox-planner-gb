<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg border-bottom" id="top">
        <div class="container">
          <a class="navbar-brand" href=""><img src="@/assets/logo.svg" alt="logo" /></a>

          <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-3"><a href="#features" class="nav-link">Features</a></li>
              <li class="nav-item me-3"><a href="#interesting" class="nav-link">Articles</a></li>
              <li class="nav-item me-3"><a href="#pricing" class="nav-link">Pricing</a></li>
              <li class="nav-item me-3"><a href="#contacts" class="nav-link">Contact Us</a></li>
              <li class="nav-item me-3"><a href="#about" class="nav-link">About</a></li>
              <button class="btn btn-primary" @click="$emit('login')">Log In</button>
            </ul>
          </div>
        </div>
    </nav>
  </header>
  <body>
    <section id="title" class="container">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center py-4">
                <h1 class="title-heading text-primary mb-5">DREAMBOX PLANNER</h1>
                <p class="text-secondary title-text mb-5 text-info">For everyone who wants to change his life, but does not know where to start. We will help to make your life bright and eventful!</p>
                <div class="d-flex justify-content-start align-it">
                    <button class="btn btn-lg btn-primary btn-signup" @click="$emit('login')">Sign Up Now</button>
                </div>
                <p class="text-warning mb-5 tal">and start changing your life</p>
            </div>
            <div class="col-lg-6 d-flex justify-content-center py-4">
                <img src="../assets/time_cogs.svg" alt="do more!" class="title-image">
            </div>
        </div>
    </section>

    <section id="features" class="container">
        <h2 class="text-primary mb-2">FEATURES</h2>
        <p class="text-secondary">Dreambox Planner will help you define your life priorities and plan tasks to reach your goals.</p>
        <div class="row g-2">
            <div class="col-lg-3 col-md-6">
                <div class="d-flex flex-column h-100 justify-content-between p-2 align-items-center border rounded">
                    <i class="fas fa-cog fa-4x mb-3 card-img-top text-info"></i>
                    <div class="d-flex flex-column h-100 justify-content-between p-2 align-items-center">
                        <h5 class="card-title">Колесо баланса</h5>
                        <p class="card-text">Составляйте колесо жизненного баланса в соответствии со своими приоритетами</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                    <i class="fas fa-stopwatch fa-4x mb-3 text-info"></i>
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center">
                        <h5 class="card-title">Таймер Помодоро</h5>
                        <p class="card-text">Оставайтесь в фокусе и добивайтесь своих целей эффективно</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                    <i class="fas fa-graduation-cap fa-4x text-info"></i>
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center">
                        <h5 class="card-title">Курсы от Udemy</h5>
                        <p class="card-text">Присоединяйтесь к миллионам студентов Udemy со всего мира. Выбирайте курсы прямо из приложения</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                    <i class="fas fa-bell fa-4x text-info"></i>
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center">
                        <h5 class="card-title">Напоминания</h5>
                        <p class="card-text">Настраивайте свою систему напоминаний. Выбирайте удобный способ и время.</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="interesting" class="my-5">
        <div class="container">
            <h2 class="text-primary mb-2">INTERESTING</h2>
            <div class="row g-2">
                <div class="col-lg-6">
                    <div class="card mb-3 h-100">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="@/assets/blog/wheel.jpg" class="card-img text-secondary p-2" alt="wheel">
                            </div>
                            <div class="col-md-8 d-flex align-items-stretch h-100">
                                <div class="d-flex flex-column justify-content-start p-2">
                                    <p class="card-text tal"><small class="text-muted">03 Jan 2022</small></p>
                                    <h5 class="card-title tal">Колесо баланса</h5>
                                    <p class="card-text text-left tal">Колесо жизненного баланса Пола Дж. Майера. Примеры и иструкция</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card mb-3 h-100">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="@/assets/blog/udemy.jpg" class="card-img text-secondary p-2" alt="udemy">
                            </div>
                            <div class="col-md-8 d-flex align-items-stretch h-100">
                                <div class="d-flex flex-column h-100  justify-content-start p-2">
                                    <p class="card-text tal"><small class="text-muted">03 Jan 2022</small></p>
                                    <h5 class="card-title tal">Онлайн-курсы Udemy</h5>
                                    <p class="card-text text-left tal">Платформа для онлайн-обучения. Изучайте 183 000 курсов по программированию, маркетингу, работе с данными и другому...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card mb-3 h-100">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="@/assets/blog/pomodoro.jpg" class="card-img text-secondary p-2" alt="pomodoro" style="height: 100%">
                            </div>
                            <div class="col-md-8 h-100">
                            <div class="d-flex flex-column h-100  justify-content-start p-2">
                                <p class="card-text tal"><small class="text-muted">03 Jan 2022</small></p>
                                <h5 class="card-title tal">Помодоро-таймер</h5>
                                <p class="card-text text-left tal">Метод и техника тайм-менеджмента по помидору</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card mb-3 h-100">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="@/assets/blog/ikigay.jpg" class="card-img text-secondary p-2" alt="ikigay" style="width: 100%;height: auto;">
                            </div>
                            <div class="col-md-8 h-100">
                                <div class="d-flex flex-column h-100  justify-content-start p-2">
                                    <p class="card-text tal"><small class="text-muted">03 Jan 2022</small></p>
                                    <h5 class="card-title tal">Икигай</h5>
                                    <p class="card-text text-left tal">Икигай - это то, что позволяет смело смотреть в будущее, даже если сейчас вы чувствуете себя ужасно</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-6">
                    <div class="card mb-3">
                        <div class="d-flex">
                            <div class="col-md-4 col-sm-2">
                                <img src="@/assets/blog/ikigay.jpg" class="card-img text-secondary p-2" alt="ikigay" >
                            </div>
                            <div class="d-flex flex-column justify-content-start p-2">
                                <p class="card-text tal"><small class="text-muted">03 Jan 2022</small></p>
                                <h5 class="card-title tal">Икигай</h5>
                                <p class="card-text text-left tal">Икигай - это то, что позволяет смело смотреть в будущее, даже если сейчас вы чувствуете себя ужасно</p>
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>
    </section>

    <section id="pricing" class="my-5">
        <div class="container">
            <h2 class="text-primary">PRICING</h2>
            <p class="text-secondary">Choose a plan that works for you!</p>
            <div class="row g-2 d-flex flex-wrap justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <!-- <div class="card h-100 align-items-stretch"> -->
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                        <i class="fas fa-cog fa-4x mb-3 text-info"></i>
                        <h4  class="mb-3">FREE</h4>
                        <p class="mb-3 text-secondary">Basic functions are free. Forever!</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <!-- <div class="card h-100 align-items-stretch"> -->
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                        <i class="fas fa-coffee fa-4x d-flex text-info mb-3"></i>
                        <h4 class="mb-3">LIGHT</h4>
                        <p class="mb-3 text-secondary">Achieve your dreams at the price of one coffee cup per month</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="d-flex flex-column h-100  justify-content-between p-2 align-items-center border rounded">
                        <i class="fas fa-dollar-sign fa-4x d-flex mb-3 text-info"></i>
                        <h4 class="d-flex my-1">PREMIUM</h4>
                        <p class="mb-3 text-secondary d-flex">Don't go it alone. Personal coach support is included!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contacts" class="container p-5">
        <h2 class="text-primary mb-2">CONTACTS</h2>
        <div class="row feature-box-gap justify-content-center">
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-map-marker-alt fa-2x mb-3 text-secondary"></i>
                <h4  class="mb-3">Visit us</h4>
                <p class="mb-3 text-secondary">Visit Russia</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-phone-alt fa-2x mb-3 text-secondary"></i>
                <h4 class="mb-3">Call us</h4>
                <p class="mb-3 text-secondary">8 (800) 450-00-00</p>
            </div>
            <div class="col-lg-3 col-md-6 p-2">
                <i class="fas fa-at fa-2x mb-3 text-secondary"></i>
                <h4 class="mb-3">Email Us</h4>
                <p class="mb-3 text-secondary">suppport@dreambox.com</p>
            </div>
        </div>
    </section>

  </body>
  <footer>
      <nav class="navbar navbar-light border-top">
        <div class="container">
          <a class="navbar-brand" href="#top">DreamBox</a>

            <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item me-3"><a href="#" class="nav-link">Privacy Policy</a></li>
              <li class="nav-item me-3"><a href="#" class="nav-link">Terms and Conditions</a></li>
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
    // p
    //     margin-bottom: 0px !important
    h2
        font-weight: 600
    .btn-signup
        text-align: left
        width: inherit
    .title-heading
        font-weight: 600
        text-align: left
    .title-text
        font-weight: 600
        text-align: left
        font-size: 1.5rem
    .title-image
        width: 100%
    .border-bottom
        border-bottom: 1px solid #E5E5E5
    .border-top
        border-top: 1px solid #E5E5E5
    .container
        min-height: inherit
    .btn-login
        // background-color: #62013C
        border-color: var(--bs-custom-primary)
        background-color: var(--bs-custom-primary)
        &:hover
            background-color: #B44688
            border-color: var(--bs-custom-primary)
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
    .card
        padding: 16px 0
</style>