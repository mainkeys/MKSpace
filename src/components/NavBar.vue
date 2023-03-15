<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="navbar-brand" href="#">Space</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span style="background-color:aliceblue; border-radius: 20%;" class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link active" style="color: aliceblue;"
                            aria-current="page" href="/">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'userlist' }" class="nav-link" href="/userlist">好友列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'userprofile', params: { userId: 2 } }" class="nav-link"
                            href="/userprofile">用户动态</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav" style="color:  rgb(162, 207, 245);">

                    <li class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link" href="/login">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'register' }" class="nav-link" href="/register">注册</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>



<script>
export default {
    name: "NavBar",
}
</script>


<style scoped>
.container * {
    color: rgb(162, 207, 245);
}
</style>