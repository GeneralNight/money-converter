export const state = () => ({
    currency: []
})

export const mutations = {
    SET_CURRENCY(state, payload) {
        state.currency = payload
    }
}

export const actions = {}