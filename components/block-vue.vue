<template>
    <div class="block">
        <div class="blockInfo">
            <h4>Block Number:</h4>
            <p>{{ block.number }}</p>
        </div>

        <div class="blockInfo">
            <h4>Block Hash:</h4>
            <p>{{ block.hash }}</p>
        </div>

        <button class="blockBtn" @click="$router.push(`/block/${block.number}`)">Open Block Page</button>
    </div>
</template>

<script>
export default {
    name:"block-vue",
    props:{
        block:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
.block {
    border-top: 2px solid teal;
    border-bottom: 2px solid teal;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
}
.blockInfo {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}
.blockInfo h4 {
    margin-right: 4px;
}
.blockInfo p,a {
    border-bottom: 2px solid teal;
}

.blockInfo a {
    transition: 0.7s;
}

.blockInfo a:hover {
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 10px 100px 0.5px teal;
}

.blockBtn {
    padding: 4px;
    font-size: 18px;
    font-weight: 700;
    background: none;
    border: 2px solid teal;
    border-radius: 4px;
}
</style>