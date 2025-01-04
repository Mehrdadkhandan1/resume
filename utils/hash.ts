
const bcrypt = require('bcrypt');


export const hash = async (password: String | undefined) => {
    if (password) {
        const hashed = await bcrypt.hash(password, 10)
        return hashed
    }
    else {
        return false
    }
}


export const compareTextWithHash = async (text: String | undefined, hash: String | undefined) => {
    console.log(text);
    console.log(hash);
    const check = await bcrypt.compare(text, hash)
    console.log(check);
    return check
}