export const data = {
    name: ""
}

export const setData = (id, value) => {
    localStorage.setItem(id, JSON.stringify(value));
}

export const getData = (id) => {
    const res = localStorage.getItem(id)
    try {
        return JSON.parse(res);
    } catch(err) {
        return res;
    }
    
}
    
