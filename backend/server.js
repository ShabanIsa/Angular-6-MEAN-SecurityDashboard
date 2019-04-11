import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Company from './models/Company';
import CompanyInfo from './models/CompanyInfo';

const app = express();
const router = express.Router();

app.use(cors());
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

router.route('/companyInfo/:id').get((req, res) =>{
    CompanyInfo.findById(req.params.id, (err, companyInfo) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(companyInfo)
        }
    });
});

router.route('/companyInfo/add').post((req, res) =>{
    console.log("Express /companyInfo/add")
    let companyInfo = new CompanyInfo(req.body);
    companyInfo.save()
    .then(companyInfo => {
        res.status(200).json({'companyInfo': 'Added! '});
    })
    .catch(err => {
        res.status(400).send('Failed to create companyInfo!');
    });
});

router.route('/companies/update/:id').post((req, res) =>{
    console.log('/companies/update/:id');
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
});

router.route('/companyInfo/update/:id').post((req, res) => {
    console.log("express companyInfo UPDATE");
    CompanyInfo.findById(req.params.id, (err, companyinfo) => {
        if(err){
            res.status(500).json(err);
        }else{
            companyinfo.UserName = req.body.UserName;
            companyinfo.Email = req.body.Email;
            companyinfo.FirstName = req.body.FirstName;
            companyinfo.LastName = req.body.LastName;
            companyinfo.Adress = req.body.Adress;
            companyinfo.City = req.body.City;
            companyinfo.Country = req.body.Country;
            companyinfo.PostalCode = req.body.PostalCode;
            
            companyinfo.save().then(companyinfo => {
                res.status(200).json(companyinfo);
            })
            .catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
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

router.route('/companyInfo/delete/:id').get((req, res) => {
    CompanyInfo.findByIdAndDelete({_id: req.params.id}, (err, companyInfo) => {
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