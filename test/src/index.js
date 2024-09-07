

import express from  'express'
import { status } from './API/status.js'
import { contact } from './API/contact.js'


const main = async () =>{
    const app = express()
    const port= 8080
    console.log("hi world")


    app.use(express.json())
    app.use(status)
    app.use(contact)

    app.listen(port, () => {
        console.log(`listening at port ${port}`);
      });
    
}
main()