<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

html {
  background: #1d1e22;
}

::-webkit-scrollbar {
  width: 20px;
  background-color: #3a3c3c;
  color: #efebe3;
}
::-webkit-scrollbar-corner {
  background-color: #2e3030;
}
::-webkit-scrollbar-thumb {
  height: 10px;
  height: 8px;
  background-color: #6d7072;
}
</style>
