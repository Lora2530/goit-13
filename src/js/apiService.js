import axios from "axios";
import imagesFoulder from "./imagesFoulder";

const requestsHendler = {
    rootUrl: 'https://pixabay.com/api/',
    imageType: 'photo',
    orientation: 'horizontal',
    page: 1,
    perPage: 12,
    key: '19889535-35e467ac6563851000db8f1fd',
    fetchImages: async (query, page) => {
        const {data} = await axios.get(
            `${requestsHendler.rootUrl}?image_type=${requestsHendler.imageType}
            &orientation=${requestsHendler.orientation}&q=${query}&page=${page}
            &per_page=${requestsHendler.perPage}&key=${requestsHendler.key}`
        )
        
        return imagesFoulder.getImgArray(data);
    }
};

export default requestsHendler;