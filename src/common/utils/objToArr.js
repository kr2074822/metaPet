export function objToArr(item) {
    let temp = [];
    for (let objKey in item) {
        if (item.hasOwnProperty(objKey)) {
            temp.push(item[objKey]);
        }
    }
    return temp;
}

export function followerArrFn(item) {
    let temp = item;
    for (let i = 0; i < item.length; i++) {
        if (Array.isArray(item[i])) {
            item[i].follower = objToArr(item[i].follower)
        }
    }
    return temp;
}

export function arrToObj(item){
    let temp = {};
    item.forEach((e, i) => {
        temp[e] = e;
      });
      return temp;
}
