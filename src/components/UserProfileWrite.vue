<template>
    <div>
        <div class="card edit-field">
            <div class="card-body">
                <label for="edit-post" class="form-label">Write Here</label>
                <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button @click="submmit_a_post" type="button" class="btn btn-outline-info btn-sm">Post</button>

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "UserProfileWrite",
    setup(props, context) {
        let content = ref('');

        const submmit_a_post = () => {
            if (content.value)
                context.emit('submmit_a_post', content.value);
            content.value = '';
        }

        return {
            content: content,
            submmit_a_post,
        }
    }
}
</script>



<style>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>