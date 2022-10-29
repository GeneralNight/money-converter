<template>
<header id="mainHeader">
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <img src="~/assets/img/logo.png" alt="Logo" class="logo">
                <Icon icon="mdi-light:home" />
            </div>
        </div>
    </div>
</header>    
</template>

<script>

export default {
    name: "Header",
}
</script>

<style lang="scss" scoped>
#mainHeader {
    background: #1e3949;
    padding: 15px 50px;
    box-shadow: 0 0 10px rgba(0,0,0,.5);

    @include d(sm) {
        padding: 15px 30px;
    }

    @include d(xs) {
        padding: 15px 0px;
    }

    .logo {
        max-height: 60px;
    }
}
</style>