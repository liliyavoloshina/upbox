<template>
  <div class="bg-white">
    <div class="container mx-auto grid md:grid-cols-2 pt-24 gap-5">
      <div class="col-span-full flex flex-col items-center mb-24">
        <h1 class="text-4xl font-dm-heading">Pick your plan</h1>
        <img src="../assets/img/underline.png" class="w-64">
      </div>
      <div class="flex flex-col justify-evenly items-center h-64 bg-plan-1 bg-no-repeat bg-cover border-2 border-gray-200 rounded">
        <h3 class="text-3xl font-dm-heading">Monthly</h3>
        <p class="text-xl">$18/mo</p>
        <button
          class="py-4 px-10 font-bold tracking-widest text-white bg-red-300 rounded-full border-4 border-red-300 hover:bg-red-200 focus:outline-none focus:ring focus:ring-pink-500">FIND
          YOUR BOX</button>
      </div>
      <div class="flex flex-col justify-evenly items-center h-64 bg-plan-2 bg-no-repeat bg-cover border-2 border-gray-200 rounded">
        <h3 class="text-3xl font-dm-heading">Yearly</h3>
        <p class="text-xl">$15/mo</p>
        <button
          class="py-4 px-10 font-bold tracking-widest text-white bg-red-300 rounded-full border-4 border-red-300 hover:bg-red-200 focus:outline-none focus:ring focus:ring-pink-500">FIND
          YOUR BOX</button>
      </div>
      
      <div class="col-span-full text-lg">Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</div>
    </div>
    
  </div>
</template>