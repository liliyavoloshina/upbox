<template>
  <header class="bg-gray-100">
    <div class="absolute top-0 right-0">
      <img src="../assets/img/topbar.png" alt="Topbar">
    </div>
    <div class="flex items-center justify-between p-6">
      <div class="w-12 h-12">
        <img src="../assets/img/Logo.png" alt="UpBox Logo">
      </div>
      <div>
        <button @click="isNavOpen = !isNavOpen" type="button"
          class="text-grey-100 focus:outline-none focus:ring focus:ring-pink-500">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isNavOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isNavOpen ? 'block' : 'hidden'" class="">
      <ul>
        <li><a href="#" class="block py-2 pl-6 focus:bg-pink-200">THIS MONTH</a></li>
        <li><a href="#" class="block py-2 pl-6 focus:bg-pink-200">SKIN</a></li>
        <li><a href="#" class="block py-2 pl-6 focus:bg-pink-200">HAIR</a></li>
        <li><a href="#" class="block py-2 pl-6 focus:bg-pink-200">BATH</a></li>
        <li><a href="#" class="block py-2 pl-6 focus:bg-pink-200">SALE</a></li>
        <li><button class="w-full mx-6 my-2 py-2 px-6 focus:outline-none focus:ring focus:ring-pink-500 rounded-xl border border-gray-900">LOG IN</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isNavOpen: false
    }
  }
}
</script>