type $bus = {
    $on: (name: string, callback: Function) => void,
    $emit: (name: string) => void
}
type ParamKey = string | number | symbol
type List = {
    [key: ParamKey]: Array<Function>
}


class Bus implements $bus {
    list: List
    constructor() {
        this.list = [] as unknown as List
    }
    $emit(name: string, ...args: Array<any>) {
        let events:Array<Function> = this.list[name] || []
        events.forEach(fn => {
            fn.apply(this, args)
        })
    }
    $on(name: string, callback: Function) {
        let fn:Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }
}

export default new Bus()