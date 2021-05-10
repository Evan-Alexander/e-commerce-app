const AccessControl = require('accesscontrol');

const allRights = {
    'create:any':['*'],
    'read:any':['*'],
    'update:any':['*'],
    'delete:any':['*']
}

let grantsObject = {
    admin:{
        profile: allRights,
        brand: allRights,
        product: allRights,
        site: allRights
    },
    user:{
        profile:{
            'read:own':['*','!password','!_id'],
            'update:own':['*','!password']
        },
        brand: { 'read:any': ['*'] },
        product: { 'read:any': ['*']}
    }
}

const roles = new AccessControl(grantsObject)

module.exports = { roles }