import { TFacility } from "./facility.interface";
import { facilituModel } from "./facility.model";

const createFacilityIntoDb = async(payload:TFacility)=>{
    const result = await facilituModel.create(payload)
    return result ;
}


export const facilityServices = {
    createFacilityIntoDb
}