// NOTE(2023-03-30 16:16:23 谭人杰): 类型推导
declare type Filter = {
    formatStr<T>(str:T): T
}
declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $F: Filter
    }
}
export function formatStr<T>(v: T) {
    return `${v}-谭仁杰`
}

