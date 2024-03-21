import { faker } from "@faker-js/faker";
const generateFakeUser = ()=>{
    return {
        categoryname:faker.commerce.department()
    }
}
export const fakeUser = (length) =>{
    const users = []
    Array.from({length:length}).forEach(()=>{
        users.push(generateFakeUser())
    })
    return users;
}