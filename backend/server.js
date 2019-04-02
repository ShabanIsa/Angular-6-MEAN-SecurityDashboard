import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Company from './models/Company';

const app = express();
const router = express.Router();
//var corsOptions = {
//    origin: '*',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//  }

app.use(cors(/*corsOptions*/));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/companies');
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Mongo CONNECTED! ');
});


router.route('/companies').get((req, res) =>{
    Company.find((err, companies) => {
        if (err) {
            console.log(err);
        }
        else
        {
            res.json(companies);
        }
    });
});
router.route('/companies/:id').get((req, res) =>{
    Company.findById(req.params.id, (err, company) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(company)
        }
    });
});

router.route('/companies/add').post((req, res) =>{
    let company = new Company(req.body);
    company.save()
    .then(company => {
        res.status(200).json({'company': 'Added! '});
    })
    .catch(err => {
        res.status(400).send('Failed to create company!');
    });
});

router.route('/companies/update/:id').post((req, res) =>{
    Company.findById(req.params.id, (err, company) =>{
        if(err)
        {
            res.status(500).json(err);
        }
        else
        {
            company.companyName = req.body.companyName;
            company.securityIndicator1 = req.body.securityIndicator1;
            company.securityIndicator2 = req.body.securityIndicator2;
            company.securityIndicator3 = req.body.securityIndicator3;
            company.securityIndicator4 = req.body.securityIndicator4;

            company.save().then(company => {
                res.status(200).json(company);
            })
            .catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });

    // Company.findById(req.param.id, (err, company) =>{
    //     console.log(company);
    //     if(!company){
    //         return res.status(500).end();//next(new Error('Could not load Document'));
    //     }else{
    //         company.companyName = req.body.companyName;
    //         company.securityIndicator1 = req.body.securityIndicator1;
    //         company.securityIndicator2 = req.body.securityIndicator2;
    //         company.securityIndicator3 = req.body.securityIndicator3;
    //         company.securityIndicator4 = req.body.securityIndicator4;

    //         company.save().then(company => {
    //             res.json('Updated');
    //         })
    //         .catch(err => {
    //             res.status(400).send('Update failed');
    //         });
    //     }
    // });
});

router.route('/companies/delete/:id').get((req, res) => {
    Company.findByIdAndDelete({_id: req.params.id}, (err, company) => {
        if (err)
        {
            res.json(err);
        }else{
            res.json('Removed!');
        }
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));