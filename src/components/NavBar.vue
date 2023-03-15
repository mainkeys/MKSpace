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
                        <router-link :to="{ name: 'userlist' }" class="nav-link">好友列表</router-link>
                    </li>

                </ul>
                <ul class="navbar-nav" v-if="!$store.state.user.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link"
                            :to="{ name: 'userprofile', params: { userId: $store.state.user.id } }">
                            {{ $store.state.user.username }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="cursor: pointer" @click="logout">退出</a>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
</template>



<script>
import { useStore } from 'vuex';
export default {
    name: "NavBar",
    setup() {
        const store = useStore();
        const logout = () => {
            store.commit('logout');
        };
        return {
            logout,
        }
    }
}
</script>


<style scoped>
.container * {
    color: rgb(162, 207, 245);
}
</style>