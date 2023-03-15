<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                        <img class="img-fluid" :src="user.photo" alt="">
                    </div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="follower-count">{{ user.followerCount }}</div>
                    </div>
                </div>

            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase'
import $ from 'jquery';
import { ref } from 'vue';
import router from '@/router/index';
import { useStore } from 'vuex';
// @ is an alias to /src

export default {
    name: 'UserList',
    components: {
        ContentBase,
    },

    setup() {
        const store = useStore();
        let users = ref([

        ]);
        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: 'get',
            success(resp) {
                users.value = resp;
            }
        });

        const open_user_profile = userId => {
            console.log(store.state.user.is_login);
            if (store.state.user.is_login) {
                router.push({
                    name: "userprofile",
                    params: {
                        userId,
                    }
                })
            } else {
                router.push({
                    name: "login"
                });
            }
        }


        return {
            users,
            open_user_profile
        };
    }
}

</script>
  
  
<style scoped>
img {
    border-radius: 50%;
    float: left;
}

.username {
    font-weight: bold;
    float: left;
}

.follower-count {
    font-weight: 12px;
    color: gray;
    float: left;
    clear: left;
}

.card {
    margin-bottom: 10px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 2px 2px 10px lightblue;
    transition: 500ms;
}
</style>