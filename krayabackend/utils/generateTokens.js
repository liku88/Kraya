import jwt from 'jsonwebtoken';


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_TOKENKEY, { expiresIn: '30d' })
}

export default generateToken;