const url = 'http://rem-rest-api.herokuapp.com/api/users';

export const getUsers = async() => {
    let res = await fetch(url);
    let data = await res.json();
    return data.data;
}
