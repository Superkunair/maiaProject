require('dotenv').config();
export const baseUrl= process.env.SERVER_PATH;
export const endPoints = {
    "mail": process.env.MAIL_ENDPOINT
}