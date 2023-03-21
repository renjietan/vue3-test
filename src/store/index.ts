
import { defineStore } from 'pinia'
export const userStore = defineStore('userStore', {
    // 相当于data
    state: () => {
        return {
            userInfo: <object>{
                name: "1231"
            }
        }
    },
    // 相当于计算属性
    getters: {
        doubleCount: (state) => {
            return state.userInfo
        },
    },
    
    actions: {
        increment(v: object) {
            this.userInfo = v
        },
    },
})