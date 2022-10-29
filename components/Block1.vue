<template>
<section id="containerBlock1">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-center align-items-center" v-if="loadingCurrency">
                    <LoadSpin/>
                </div>
                <div class="row" v-if="!errorOnLoad">
                    <div class="col-12 col-md-6">
                        <b-input-group class="mt-3">
                            <template #prepend>
                                <b-form-select @change="calcCurrency(true,'select')" v-model="curFrom" :options="currency"></b-form-select>
                            </template>
                            <b-form-input @keyup="calcCurrency(false,'from')" v-model="fromVal" :type="'number'"></b-form-input>
                        </b-input-group>
                    </div>
                    <div class="col-12 col-md-6">
                        <b-input-group class="mt-3">
                            <template #prepend>
                                <b-form-select @change="calcCurrency(true,'select')" v-model="curTo" :options="currency"></b-form-select>
                            </template>
                            <b-form-input @keyup="calcCurrency(false,'to')" v-model="toVal" :type="'number'"></b-form-input>
                        </b-input-group>
                    </div>
                    <div class="col-12 d-flex flex-column align-items-center justify-content-center mt-5">
                        <p class="text-white" v-if="currency.length>0">
                            {{`${fromVal ?? '0'} ${currency.find(c=>c.value==curFrom) ? currency.find(c=>c.value==curFrom).curencyName ?? '' : ''} (${curFrom}) is equal ${toVal ?? '0'} ${currency.find(c=>c.value==curTo) ? currency.find(c=>c.value==curTo).curencyName ?? '' : ''} (${curTo})`}}
                        </p>

                        <button class="btn btn-primary" @click="resetConverter">
                            Reset
                        </button>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col d-flex flex-column align-items-center justify-content-center">
                        <p class="text-white">An error has occurred, please try again!</p>
                        <button class="btn btn-primary" @click="resetConverter">
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { api } from '~/services';
import { mapState } from 'vuex'
export default {
name: "Block1",
data() {
    return {
        loadingCurrency: false,
        curFrom: 'USD',
        curTo: 'BRL',
        fromVal: 0,
        toVal: 0,
        bid: 0,
        errorOnLoad: false
    }
},
methods: {
    async createCurrencyArray(currency) {
        let currencyArr = []
        Object.keys(currency).forEach(function(key, index) {
            let newCurrencyObj = {
                text: `${key}`,
                value: `${key}`,
                curencyName: `${currency[key]}`
            }
            currencyArr.push(newCurrencyObj)
        });
        this.$store.commit('SET_CURRENCY',currencyArr)
        this.loadingCurrency = false
        if(currencyArr.length==0) {
            this.errorOnLoad = true
        }
    },
    async loadCurrency() {
        this.loadingCurrency = true
        await api.loadCurrency().then(async (res) => {
            await this.createCurrencyArray(res.data)
        }).catch(err=> {
            this.errorOnLoad = true
            this.loadingCurrency = false
        })
        await api.convertCurrency(this.curFrom,this.curTo).then(res=> [
            this.bid = res.data[`${this.curFrom}${this.curTo}`].bid
        ]).catch(err=> {
            this.errorOnLoad = true
        })
    },
    async calcCurrency(changed, source) {
        if(changed) {
            await api.convertCurrency(this.curFrom,this.curTo).then(res=> [
                this.bid = res.data[`${this.curFrom}${this.curTo}`].bid
            ]).catch(err=> {
                this.errorOnLoad = true
            })
        }

        if(source=='from') {
            this.toVal = Math.floor((this.fromVal * this.bid) * 100) / 100
        }else if(source=='to') {
            this.fromVal = Math.floor((this.toVal / this.bid) * 100) / 100
        }else {
            let oldFrom = this.fromVal
            let oldTo = this.toVal

            this.toVal = Math.floor((oldFrom * this.bid) * 100 )/ 100
            this.fromVal = Math.floor((oldTo / this.bid) * 100) / 100
        }
    },
    async resetConverter() {
        this.loadingCurrency = false,
        this.curFrom = 'USD',
        this.curTo = 'BRL',
        this.fromVal = 0,
        this.toVal = 0,
        this.bid = 0,
        this.errorOnLoad = false
        this.$store.commit('SET_CURRENCY',[])
        this.loadCurrency()
    }
},
mounted() {
    this.loadCurrency()
},
computed: {
    ...mapState(['currency'])
}
}
</script>

<style lang="scss" scoped>
#containerBlock1 {
    padding: 50px 0;
}
</style>