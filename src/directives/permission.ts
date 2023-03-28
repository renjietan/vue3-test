import { Directive, DirectiveBinding } from "vue"
import { userStore } from "../store/index"
type val = {
    value: string
}
type bg = {
    display: string
}
// NOTE(2023-03-28 20:05:37 谭人杰): 利用interface重名合并的特性，添加style.display的类型推导
interface HTMLElement {
    style: bg
}
// NOTE(2023-03-28 19:29:16 谭人杰): 
export const vPermission: Directive<HTMLElement, val> = (el, binding) => {
    const user = userStore()
    if (Number(user.userInfo.name) > 100) {
        el.style.display = "none"
    }
}

export const vTest: Directive = {
    created() { },
    beforeMount() { },
    // NOTE(2023-03-28 20:01:47 谭人杰): bg 添加background 类型推导
    mounted(el:HTMLElement, binding: DirectiveBinding<val>, vNode, preVnode) {
        // NOTE(2023-03-28 19:48:34 谭人杰): el => DOM元素
        // NOTE(2023-03-28 19:48:34 谭人杰): binding.arg => v-test:1111后面的1111
        // NOTE(2023-03-28 19:48:34 谭人杰): binding.value => v-test="red"中的red
        // NOTE(2023-03-28 19:48:34 谭人杰): binding.oldValue => 旧的值
        // NOTE(2023-03-28 19:48:34 谭人杰): binding.instance => 当前组件的实例
        // NOTE(2023-03-28 19:48:34 谭人杰): binding.modifiers => v-test.TRJ 返回{ TRJ: true } 
        // NOTE(2023-03-28 19:48:34 谭人杰): vNode => 虚拟DOM元素
        // NOTE(2023-03-28 19:48:34 谭人杰): preVnode => 上一个虚拟DOM
    },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { },
}