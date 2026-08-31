let subs: number | string = '1m' //can be 500(number)

let apiRequest: 'pending' | 'success' | 'error' = 'pending'

apiRequest = 'success' //allowed
// apiRequest = 'done' //not allowed

const api: string | undefined = ''
// here i can nitialize it as undefined
console.log(api);
