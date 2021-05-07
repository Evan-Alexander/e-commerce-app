const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addProductValidator = [
    check('model')
        .trim().not().isEmpty().withMessage('You need to add a model').bail()
        .isLength({ min: 3 }).withMessage('Minimum of 3 characters required!').bail(),
    check('brand')
        .trim().not().isEmpty().withMessage('You need to add a brand'),
    check('frets')
        .not().isEmpty().withMessage('Please add the number of frets.'),
    check('woodtype')
        .trim().not().isEmpty().withMessage('Wood type is required').bail()
        .isLength({ min: 3 }).withMessage('Minimum of 3 characters required!').bail(),
    check('description')
        .trim().not().isEmpty().withMessage('A description is required').bail()
        .isLength({ min: 10 }).withMessage('Minimum of 10 characters required!').bail(),
    check('price')
        .not().isEmpty().withMessage('You must enter a price.'),
    check('available')
        .not().isEmpty().withMessage('You must enter a amount available.'),
    check('itemSold')
        .not().isEmpty().withMessage('You must enter a # of items sold.'),
    check('shipping')
        .isBoolean().not().isEmpty().withMessage('You must enter a # of items sold.').bail(),
        
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatus.BAD_REQUEST).json({
                errors: errors.array()
            })
        }
        next();
    }
];

module.exports = {
    addProductValidator
}