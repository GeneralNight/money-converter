<template>
<footer id="containerFooter">
    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex align-items-center">
                    <p class="text-white mb-0">Made by <a class="nameLink" target="_blank" href="https://www.linkedin.com/in/guilherme-tinen-ortolani/">Guilherme Tinen Ortolani</a></p>
                    <a class="linkFooter" target="_blank" href="https://github.com/GeneralNight"><i class="fab fa-github"></i></a>
                    <a class="linkFooter" target="_blank" href="https://www.linkedin.com/in/guilherme-tinen-ortolani/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
#containerFooter {    
    background: #1e3949;
    padding: 15px 0px;
    box-shadow: -2px 0 10px rgba(0,0,0,.5);
    position: fixed;
    bottom: 0;
    width: 100%;

    .nameLink {
        color: #FFA800;
        font-weight: 700;
        text-decoration: underline;
        transition: .2s;
        &:hover {
            filter: brightness(.9);
        }
    }

    .linkFooter {
        color: #fff;
        font-size: 24px;
        transition: .2s;

        &:first-of-type {
            margin: 0 10px;
        }

        &:hover {
            color: #5e8dce;
        }
    }
}
</style>