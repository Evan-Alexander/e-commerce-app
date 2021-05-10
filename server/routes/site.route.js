const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site.controller');
const auth = require('../middleware/auth');

router.route('/')
  .get(siteController.getSiteArgs)
  .post(auth('createAny', 'site'), siteController.postSiteArgs)
  .patch(auth('updateAny', 'site'), siteController.updateSiteArgs)
module.exports = router;