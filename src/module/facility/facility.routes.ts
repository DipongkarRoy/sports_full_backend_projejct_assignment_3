import express from 'express';
import validRequst from '../../utils/validRequst';
import { facilityValided } from './facility.validation';
import { facilityControllers } from './facility.controller';

const router = express.Router();

router.post('/create-facility',validRequst(facilityValided.FacilitySchemaValidation),
  facilityControllers.createFacility,
);



export const facilityRouter = router ;