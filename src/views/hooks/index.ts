export default function(options: any) {
    const r = ref(0)
    return new Promise((resolve, reject) => {
        onMounted(() => {
            resolve(r)
        })
    },)
}