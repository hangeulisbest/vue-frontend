export const state={
    memberName : null
}

export const mutations={
    setMemberName(state,memberName){
        state.memberName = memberName;
    },
}

export const actions = {
    setMemberName({commit},memberName){
        commit('setMemberName',memberName);
    }
}

export const getters = {
    isLoggedIn(state){
        return !!state.memberName
    },
}