const hewan = ['kodok', 'ular', 'harimau'], tambahan = 
['buaya', 'beruang',{  obj: 'rusa' }]
const arrayPush = async () => {
    await tambahan.pop();
    await tambahan.map(res => hewan.push(res));

    console.log(hewan);
}

arrayPush();