<template>
<div class="load"></div>
</template>

<script>
export default {
name: "LoadSpin",

}
</script>

<style lang="scss" scoped>
.load {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-right-color: transparent;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {transform: rotateZ(0deg);}
    100% {transform: rotateZ(360deg);}
}
</style>