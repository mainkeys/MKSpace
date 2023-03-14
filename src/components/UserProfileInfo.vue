<template>
    <div class="user-card">
        <div class="info-bg">
            <img src="../assets/3.jpg" alt="">
        </div>
        <img class="avatar" src="../assets/logo2.png" alt="">
        <div class="user-info">
            <div class="id-info">
                <a class="id" href="">{{ fullName }}</a>
                <img class="sex"
                    src="https://s1.hdslb.com/bfs/seed/jinkela/commentpc/static/img/ic_tag_man_border.89ca61d.png@.webp"
                    alt="">
            </div>
            <span>11</span><span class="gray-text">关注</span>
            <span>{{ user.followerCount }}</span><span class="gray-text">粉丝</span>
            <span>88.7万</span><span class="gray-text">获赞</span>
            <div class="btn-box">
                <button @click="follow" v-if="!user.is_followed">+关注</button>
                <button @click="unfollow" v-if="user.is_followed">取消关注</button>

            </div>
        </div>



    </div>
</template>




<script>
import { computed } from 'vue';
export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },

    },
    setup(props, context) {
        let fullName = computed(() => props.user.lastName + ' ' + props.user.firstName);
        const follow = () => {
            context.emit('follow123');
        };
        const unfollow = () => {
            context.emit('unfollow123');
        };


        return {
            fullName,
            follow,
            unfollow,
        }
    }
}
</script>







<style scoped>
.user-card {
    width: 100%;
    height: 231px;
    /* padding: 95px 20px 16px 70px; */
    box-sizing: border-box;
    margin: auto;
    /* margin-top: 100px; */
    box-shadow: 1px 1px 1px lightgray;
    border-radius: 5%;
    display: inline-block;
}

.sex {
    height: 16px;
    width: 16px;

}

.btn-box {
    width: 100%;
    height: 44px;
    /* position: relative; */
    top: 15px;
    left: 80px;
}

.user-info {
    width: 80%;
    padding: 10px 20px 16px 70px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info-bg>img {
    width: 100%;
    height: 85px;
    background-size: contain;
}

.id-info {
    margin: auto;
    line-height: 13px;
}

.user-card .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
}

.user-info>span {
    font-size: 12px;
}

.user-info a {
    font-weight: bold;
    text-decoration: none;
    color: #FB7299;
    display: block;
    float: left;
}

.gray-text {
    color: #9499A0;
    margin-right: 20px;
}

.btn-box>button {
    margin: 20px 100px 0px -20px;
    width: 100px;
    height: 28px;
    border-radius: 5px;
    border: #6D757A solid 1px;
    position: relative;
}

button:hover {
    box-shadow: 1px 1px 1px rgb(223, 240, 212);
}

.btn-box>button:nth-child(1) {
    background-color: #f2f7de;
    border-color: lightgray;
}
</style>


