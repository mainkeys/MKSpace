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

import { reactive } from 'vue'
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
        const user = reactive({
            id: 1,
            userName: "Mainkeys",
            lastName: "Main",
            firstName: "keys",
            followerCount: 0,
            is_followed: false,
        });

        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userid: 1,
                    content: "今天吃了瓦香鸡，开心",
                },
                {
                    id: 1,
                    userid: 1,
                    content: "明天吃什么呢，开心",
                },
                {
                    id: 1,
                    userid: 1,
                    content: "今天还锻炼了，开心",
                },
            ]
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
        }

        return {
            user,
            follow,
            unfollow,
            posts,
            submmit_a_post,
        };
    }


}
</script>
  
  
<style scoped></style>