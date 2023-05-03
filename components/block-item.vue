<template>
    <div>
        <ul>
            <li class="blockInfo">
                <h4>Block Number:</h4>
                <p>{{ block.number }}</p>
            </li>
            <li class="blockInfo">
                <h4>Block Hash:</h4>
                <p>{{ block.hash }}</p>
            </li>
            <li class="blockInfo">
                <h4>Gas Used:</h4>
                <p>{{ block.gasUsed }}</p>
            </li>

            <li>
                <h4>List of Transaction:</h4>
                <p>
                    <trans-vue
                            v-for="trans in block.transactions"
                            :trans="trans" :key="trans.id"
                    />
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    name:"block-item",
    data(){
        return{
            block: {},
        }
    },

    props:{
        blockNumberHash:{
            type: String,
            required: true,
        }
    },

    methods:{
        ...mapActions({
            getBlock: "getBlock"
        })
    },

    async mounted(){
        this.block = await this.getBlock(this.blockNumberHash)
    },
    watch:{
        async blockNumberHash() {
            this.block = this.block = await this.getBlock(this.blockNumberHash);
        }
    }

}
</script>

<style scoped>

</style>