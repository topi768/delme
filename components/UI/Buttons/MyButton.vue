<template>
  <button>
    <slot> </slot>
  </button>
</template>

<style lang="scss">
button {
  cursor: pointer;
  padding: 16px 40px;
  background: $color-primary;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.15px;
  border-radius: 10px;
  color: #ffffff;
  white-space: nowrap;
  transition: 0.2s;
}
button:hover {
  opacity: 0.9;
}
</style>
