<template>
    <div class="container">
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
                <span>11</span><span class="gray-text"> following</span>
                <span>{{ user.followerCount }}</span><span class="gray-text"> fans</span>
                <span>88.7w</span><span class="gray-text"> likes</span>

            </div>
            <button class="btn-box" @click="follow" v-if="!user.is_followed">Follow</button>
            <button class="btn-box" @click="unfollow" v-if="user.is_followed">Unfollow</button>
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

.user-card .btn-box {
    width: 22%;
    height: 11%;
    /* position: relative; */
    background-color: #f6f8ec;
    border-color: lightgray;
    border-radius: 5px;
    border: #6D757A solid 1px;
    color: #41525c;
    margin-top: 10px;
}

.user-info {
    margin-top: 15px;
    width: 85%;
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

.id-info .sex {
    position: relative;
    left: 30px;
    top: 4px;
}

.user-card .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-top: 10px;
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
    position: relative;
    left: 60px;
    top: 5px;
}




.gray-text {
    color: #9499A0;
    margin-right: 8px;
}

/* .btn-box>button {
    margin: 20px 100px 0px -20px;
    width: 100px;
    height: 28px;
    border-radius: 5px;
    border: #6D757A solid 1px;
    position: relative;
} */

button:hover {
    box-shadow: 1px 1px 1px rgb(223, 240, 212);
}

button {
    font: "Times New Roman";
    font-size: 13px;
}
</style>


