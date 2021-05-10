const { siteService } = require('../services');

const siteController = {
  async postSiteArgs(req,res, next){
    try{
      const siteArgs = await siteService.postSiteArgs(req);
      res.json(siteArgs);
    }catch(error){
        next(error);
    }
},
async getSiteArgs(req,res, next){
  try{
    const siteArgs = await siteService.getSiteArgs(req);
    res.json(siteArgs);
  }catch(error){
      next(error);
  }
},
async updateSiteArgs(req,res, next){
  try{
    const siteArgs = await siteService.updateSiteArgs(req);
    res.json(siteArgs);
  }catch(error){
      next(error);
  }
},
}

module.exports = siteController;