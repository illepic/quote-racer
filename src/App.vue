<template>
  <div id="app" class="font-source-sans font-normal leading-normal  ">
    <div id="nav" class="fixed flex justify-center p-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board">Board</router-link>
    </div>

    <router-view />
  </div>
</template>
