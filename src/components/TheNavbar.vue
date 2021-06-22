<template>
  <header :class="{ '-translate-y-full': !showHeader }"
    class="fixed top-0 inset-x-0 z-40 bg-white shadow-lg transform translate-none transition duration-200 ease-linear">
    <div class="md:flex md:items-center md:justify-between container mx-auto">
    <div class="absolute top-0 right-0 left-0 h-1">
      <img src="../assets/img/topbar.png" alt="Topbar" class="w-full h-full object-cover">
    </div>
    <div class="flex items-center justify-between p-6">
      <div class="w-12 h-12 transform">
        <img src="../assets/img/Logo.png" alt="UpBox Logo">
      </div>
      <div class="md:hidden">
        <button @click="isNavOpen = !isNavOpen" type="button" aria-label="navbar-button"
          class="text-grey-100 focus:outline-none focus:ring focus:ring-pink-500">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isNavOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isNavOpen ? 'block' : 'hidden'" class="md:block">
      <ul>
        <li class="md:inline-block"><a href="#" class="block py-2 px-3 focus:outline-none focus:ring focus:ring-pink-500 focus:bg-red-200">THIS MONTH</a></li>
        <li class="md:inline-block"><a href="#" class="block py-2 px-3 focus:outline-none focus:ring focus:ring-pink-500 focus:bg-red-200">SKIN</a></li>
        <li class="md:inline-block"><a href="#" class="block py-2 px-3 focus:outline-none focus:ring focus:ring-pink-500 focus:bg-red-200">HAIR</a></li>
        <li class="md:inline-block"><a href="#" class="block py-2 px-3 focus:outline-none focus:ring focus:ring-pink-500 focus:bg-red-200">BATH</a></li>
        <li class="md:inline-block"><a href="#" class="block py-2 px-3 focus:outline-none focus:ring focus:ring-pink-500 focus:bg-red-200">SALE</a></li>
        <li class="md:inline-block px-6">
          <button
            class="w-full my-4 py-2 px-6 rounded-full border-2 border-gray-900 font-bold hover:bg-red-300 focus:outline-none focus:ring focus:ring-pink-500 transition duration-150 ease-in-out">
            LOG IN</button>
        </li>
      </ul>
    </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isNavOpen: false,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  }
}
</script>