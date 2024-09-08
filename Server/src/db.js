import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool =new Pool({
    user:'postgres',
    password:'Campsie123',
    host:'localhost',
    port:'5432',
    database:'contact'
})

// module.exports = pool       

export default pool