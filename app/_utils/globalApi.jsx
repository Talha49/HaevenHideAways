const { default: axios } = require('axios');

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers:{
        'Authorization' : `Bearer ${API_KEY}`
    }
});

const getCategory = () => axiosClient.get('/categories?populate=*');

const getAppartment = () => axiosClient.get('/appartments?populate=*');

const getAppartmentListbyName = (category) => axiosClient.get('appartments?filters[categories][Name][$in]='+category+'&populate=*')

const BookRooms = (data) => axiosClient.post('/bookings/', data)

const sendEmail = (data) => axios.post('/api/SendEmail', data)

const contactPage = (data) => axiosClient.post('/contacts/', data)

const getAppartmentById = (id) => axiosClient.get('/appartments/'+ id + '?populate=*') ;


const BookHistories = (userEmail) => axiosClient.get('/bookings?[filters][Email][$eq]=' +userEmail+'&populate[appartment][populate][Image][populate][0]=url&populate=*' )

const deleteBooking = (id) => axiosClient.delete("/bookings/" + id)

export default {
    getCategory,
    getAppartment,
    getAppartmentListbyName,
    getAppartmentById,
    BookRooms,
    sendEmail,
    contactPage,
    BookHistories,
    deleteBooking
};
