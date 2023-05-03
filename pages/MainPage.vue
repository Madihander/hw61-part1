<template>
    <div>
        Hello Its Main page
        <block-vue
                v-for="block in $store.state.blocks"
                :key="block.number"
                :block="block"/>
    </div>
</template>

<script>
import { mapActions,mapGetters,mapMutations } from 'vuex';
export default {
    methods:{
        ...mapActions({
            newBlockHeaders: "newBlockHeaders",
        }),
        ...mapGetters({
            getBlocks: "getBlocks"
        }),
        ...mapMutations({

        })
    },
    mounted(){
        this.newBlockHeaders()
    }
}
</script>

<style scoped>
</style>