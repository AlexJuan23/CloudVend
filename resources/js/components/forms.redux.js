const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zipcode: ''
}

export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_FIRST_NAME':
            form.first_name = action.data;
            break;
        case 'SET_LAST_NAME':
            form.las_name = action.data;
            break;
        case 'SET_EMAIL':
            form.email = action.data;
            break;
        case 'SET_ADDRESS':
            form.address = action.data;
            break;
        case 'SET_STATE':
            form.state = action.data;
            break;
        case 'SET_CITY':
            form.city = action.data;
            break;
        case 'SET_ZIPCODE':
            form.zipcode = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}
