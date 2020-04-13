import axios from 'axios';

async function apiPost(name, distance) {
    const URL = "https://zlkc4kh4q7.execute-api.us-east-1.amazonaws.com/dev/route";
    try {
        const response = await axios({
            method: 'post',
            url: URL,
            headers: {
                'x-api-key': 'jVm7QylRgl3GDDDq9fcTpahuStxSnAKg15Kj1znm'
            },
            data: {
                country: name[0],
                distance: distance*1.852,
            },
        });

        return response;

    } catch (e) {
        console.log(e.response);
        return e.response;
    }
}

export default apiPost;