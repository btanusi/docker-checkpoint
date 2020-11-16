const Pool = require('pg').Pool
const pool = new Pool({
//   user: 'me',
  host: 'localhost',
  database: 'sdi_databases_checkpoint',
//   password: 'password',
  port: 5432,
})




const getEmails = (req,res) => {
    pool.query('SELECT * FROM emails ORDER BY id', (err, results) => {
        if(err){
            throw err;
        }
        res.status(200).json(results.rows)
    })
}

const sendEmail = ( req, res) => {
    
}



// app.get('/emails/:id', (req, res) => res.send(emails[req.params.id]))

// app.get('/search',(req,res) => {
//     const query = decodeURIComponent(req.query.query)
//     const filteredEmails = emails.filter(email => email.subject.includes(query))
    
//     res.send(filteredEmails)
// });

// app.post('/send',function(req,res){
//     let result;
//     const emailSender = req.body;
//     if(emailSender.sender && emailSender.recipient && emailSender.subject && emailSender.message){
//         emails.push({ sender: emailSender.sender, recipient: emailSender.recipient, subject: emailSender.subject, email: emailSender.message, })

//         result = {
//             "status": "success",
//             "message": "The message was successfully sent"
//         }
//     }else{ 
//         result = {
//             "status": "failed",
//             "message": "The message was not sent"
//         }
//         res.status(400);
//     }

//     res.json(result);
// });







module.exports = {
    getEmails,
  }