import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7CcmKK14ZC23jrec_q5U8uLDuHsycNMCHeQOaDGPjy6nldHB1Xw7sDdl70FK2dmC6RT09VBbCKDefhwhWRKTOHDfizNstmMKCZtB5KxcorRxCu41rwB5EgVixivCXnYx'
    }
});