
import { defineStore } from 'pinia'
type TUser = {
    name?: string,
}
type TCount = number | null | undefined
export const userStore = defineStore('userStore', {
    // 相当于data
    state: () => {
        return {
            userInfo: <TUser>{
                name: ""
            },
            count: <TCount>0,
        }
    },
    // 相当于计算属性
    getters: {
        GET_USERINFO: (state) => {
            return state.userInfo
        },
        GET_COUNT: (state) => {
            return state.count
        }
    },

    actions: {
        SET_USERINFO<TUser>(v: TUser): Promise<TUser> {
            return new Promise((resolve, rejcet) => {
                setTimeout(() => {
                    this.userInfo = v ?? {}
                    //调用其他action
                    resolve(v)
                }, 1500)
            })
        },
        SET_COUNT(v: TCount) {
            this.count = v;
        }
    },
})