<template>
    <div class="block">
        <div class="blockInfo">
            <h4>Trans:</h4>
            <a @click="$router.push(`/transaction/${trans}`)"> {{ trans }}</a>
            <!-- <button class="blockBtn" @click="$router.push(`/transaction/${trans}`)">Open Transaction Page</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"trans-vue",
    props:{
        trans:{
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.block {
    border-left: 2px solid teal;
    border-bottom: 2px solid teal;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 5px;
}
</style>