export const data = {
    name: ""
}

export const setData = (id, value) => {
    localStorage.setItem(id, value);
}

export const getData = (id) => 
    localStorage.getItem(id);
