<template>
    <header>
        <div class="navElem">
            <button class="navBtn" @click="$router.push('/')">Home</button>
        </div>

        <div class="navElem">
            <input class="navInput" v-model="blockNumberHash" placeholder="Enter Block Number">
            <button class="navBtn" @click="$router.push(`/block/${this.blockNumberHash}`)">Open</button>
        </div>

        <div class="navElem">
            <input class="navInput" v-model="transHash" placeholder="Enter Transaction Hash">
            <button class="navBtn" @click="$router.push(`/transaction/${this.transHash}`)">Open</button>
        </div>
    </header>
</template>

<script>
export default {
    name:"NavBar",
    data(){
        return{
            blockNumberHash:"",
            transHash:"",
        }
    }
}
</script>

<style scoped>
header{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    padding: 10px;
}
.navElem {
    margin-right: 10px;
    padding-right: 4px;
    border-right: 2px solid black;
}

.navInput {
    margin-right: 4px;
    padding: 4px;
    font-size: 18px;
    border: 2px solid teal;
    border-radius: 4px;
}

.navBtn {
    padding: 4px;
    font-size: 18px;
    background: none;
    border: 2px solid teal;
    border-radius: 4px;
}
</style>