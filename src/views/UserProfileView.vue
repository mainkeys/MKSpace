<template>
    <ContentBase>
        <div class="row">
            <div class="col-4 container">
                <UserProfileInfo @follow123="follow" @unfollow123="unfollow" :user="user" />
                <UserProfileWrite @submmit_a_post="submmit_a_post" />
            </div>
            <div class="col-8">
                <UserProfilePosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase';
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';
import UserProfileWrite from '../components/UserProfileWrite'
import $ from 'jquery'
import { useStore } from 'vuex';


import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vuex';
// @ is an alias to /src

export default {
    name: 'UserList',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },
    // ref比reactive慢， ref能赋值
    setup() {
        const store = useStore();
        const route = useRoute();
        const userId = parseInt(route.params.userId);
        const user = reactive({});
        const posts = reactive({});

        $.ajax({

            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                user.id = resp.id;
                user.name = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        });

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;
            }
        });


        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        };

        const submmit_a_post = (content) => {
            posts.count++;
            posts.posts.unshift({
                id: posts.count,
                userid: 1,
                content: content,
            })
        };

        return {
            user,
            follow,
            unfollow,
            posts,
            submmit_a_post,
            // userId,
        };
    }


}
</script>
  
  
<style scoped></style>