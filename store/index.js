import { createStore } from 'vuex'
const ethers =require('ethers')
const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/dWTnjn6p6IhhGk7COKqh5iiiw2aaGTQn')

//
// const Web3 = require('web3')
// const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/dWTnjn6p6IhhGk7COKqh5iiiw2aaGTQn')

export default createStore({
    state: {
        blocks:[],
        block:{},
        trans:{},
    },
    getters: {

        getBlocks(state){
            return state.blocks
        },

    },
    mutations: {
        addBlock(state, newBlock) {
            state.blocks.unshift(newBlock)
            console.log(state.blocks)
        },

        setBlock(state,block) {
            state.block = block
        },
        setTrans(state,trans) {
            state.trans = trans
        }

    },
    actions: {
        async newBlockHeaders({commit}){

            provider.on("block", async blockNumber => {
                let block = await provider.getBlock(blockNumber)
                let newBlock = {
                    number: block.number,
                    hash: block.hash,
                }
                commit("addBlock", newBlock)
            })
        },

        async getBlock({commit},blockNumberHash) {
            if(! ethers.utils.isBytesLike(blockNumberHash)){
                blockNumberHash = Number(blockNumberHash)
            }
            const block = await provider.getBlock(blockNumberHash)
            commit("setBlock",block);
            return block;
        },

        async getTransaction({commit},transHash) {
            const trans = await provider.getTransaction(transHash)
            commit("setTrans", trans)
            return trans;
        }
    },
    modules: {
    }
})