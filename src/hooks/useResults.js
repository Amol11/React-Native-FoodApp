import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const SearchApi = async(searchTerm) => {
       try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMsg('Something went wrong');
        }
    };

    useEffect(() => {
        SearchApi('caviar');
    }, []);

    return [SearchApi, results, errorMsg];
};