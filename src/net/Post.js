import axios from 'axios';

async function apiPost(name) {
    const URL = "https://zlkc4kh4q7.execute-api.us-east-1.amazonaws.com/dev/route";
    try {
        const response = await axios.post(URL, {
            country: name[0]
        });

        return response;

    } catch (e) {
        console.log(e);
        return {
            'status': 500
        };
    }
}

export default apiPost;