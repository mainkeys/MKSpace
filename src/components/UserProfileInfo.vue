<template>
    <div class="container">
        <div class="user-card">
            <div class="info-bg">
                <img src="../assets/3.jpg" alt="">
            </div>
            <div class="user-info">
                <img class="avatar" :src="user.photo" alt="">
                <div class="id-info">
                    <div style="margin: auto; width: 100px; height: 40px; color: aqua; font-size: 12px;">
                        {{ user.username }}
                    </div>
                </div>
                <span>11</span><span class="gray-text"> following</span>
                <span>{{ user.followerCount }}</span><span class="gray-text"> fans</span>

            </div>
            <button class="btn-box" @click="follow" v-if="!user.is_followed">Follow</button>
            <button class="btn-box" @click="unfollow" v-if="user.is_followed">Unfollow</button>
        </div>
    </div>
</template>




<script>
export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },

    },
    setup(props, context) {
        const follow = () => {
            context.emit('follow123');
        };
        const unfollow = () => {
            context.emit('unfollow123');
        };

        return {
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
    width: 30%;
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


