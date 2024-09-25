import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dyeprprox',
    api_key: '178932538415966',
    api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;