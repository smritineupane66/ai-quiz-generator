import bcrypt, { hash } from 'bcrypt'

const hashed = async(password)=>{
    return await bcrypt.hash(password,10)
}
export default hashed;