import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {email, password});
}


const getAllUssers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user',{ data: {id: userId }})
}

const editUserService = (inputdata) => {
    return axios.put('/api/edit-user', inputdata)
}


export {handleLoginApi, getAllUssers,createNewUserService, deleteUserService, editUserService}