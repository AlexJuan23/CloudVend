const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    item: '',
    amount: '',
    nonce: '',
    transaction: '',
    disabled: 1,
    letter: '',
    number: '',
    open_tray: '',
    show_can: false,
}
export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_FIRST_NAME':
            form.first_name = action.data;
            break;
        case 'SET_LAST_NAME':
            form.last_name = action.data;
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
        case 'SET_ITEM':
            form.item = action.data;
            break;
        case 'SET_AMOUNT':
            form.amount = action.data;
            break;
        case 'SET_NONCE':
            form.nonce = action.data;
            break;
        case 'SET_TRANSACTION':
            form.transaction = action.data;
            break;
        case 'SET_DISABLED':
            form.disabled = action.data;
            break;
        case 'SET_LETTER':
            form.letter = action.data;
            break;
        case 'SET_NUMBER':
            form.number = action.data;
            break;
        case 'SET_OPEN_TRAY':
            form.open_tray = action.data;
            break;
        case 'SET_SHOW_CAN':
            form.show_can = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}
