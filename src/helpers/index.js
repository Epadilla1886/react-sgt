export function randomString(length = 8){
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890';
    let output = '';

    for( let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* characters.length);

        output += characters[randomIndex];
    }

    return output;
}