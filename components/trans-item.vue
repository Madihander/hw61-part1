<template>
    <div>
        <ul>
            <li class="blockInfo">
                <h4>Transaction Hash:</h4>
                <p>{{ trans.hash }}</p>
            </li>

            <li class="blockInfo">
                <h4>Block Number:</h4>
                <p>{{ trans.blockNumber }}</p>
            </li>

            <li class="blockInfo">
                <h4>From:</h4>
                <p>{{ trans.from }}</p>
            </li>

            <li class="blockInfo">
                <h4>To:</h4>
                <p>{{ trans.to }}</p>
            </li>

            <li class="blockInfo">
                <h4>Value:</h4>
                <p>{{ trans.value }}</p>
            </li>


            <li class="blockInfo">
                <h4>Gas Price:</h4>
                <p>{{ trans.gasPrice }}</p>
            </li>

            <li class="blockInfo">
                <h4>Gas Limit:</h4>
                <p>{{ trans.gasLimit }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    name:"trans-item",
    data(){
        return{
            trans: {},
        }
    },

    props:{
        transHash:{
            type: String,
            required: true,
        }
    },

    methods:{
        ...mapActions({
            getTransaction: "getTransaction"
        })
    },

    async mounted(){
        console.log("TRANSITEM")
        console.log(this.transHash)
        this.trans = await this.getTransaction(this.transHash)
    },
    // watch:{
    //     async transHash() {
    //         this.trans = await this.getTransaction(this.transHash);
    //     }
    // }

}
</script>

<style scoped>

</style>