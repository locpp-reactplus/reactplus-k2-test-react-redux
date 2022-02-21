export const handleAdd = (data, callback) => {
    let api = 'https://61b75f1864e4a10017d18ada.mockapi.io/api/products';
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(api, options)
        .then(function (response) {
            response.json();
        })
        .then(callback)
        .catch((error) => {
            console.error('Error:', error);
        });
}
export const handleDelete = () => {

}
export const handleUpdate = () => {

}