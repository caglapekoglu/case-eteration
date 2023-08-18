export const itemParser =(data)=>{
    let newData = {...data};
    const price = newData.price;
    delete newData.price;
    return{
        ...newData,
        price: parseFloat(price).toFixed(2)
    }
}

export const itemListParser =(arr)=>{
    let newArr =[];
    for(let i=0; i<arr.length; i++){
        newArr.push(itemParser(arr[i]))
    }
    return newArr;
}