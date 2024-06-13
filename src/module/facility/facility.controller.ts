import catchAsyne from "../../utils/catchAsyne";
import { facilityServices } from "./facility.service";

const createFacility = catchAsyne(async(req ,res)=>{
    const result = await facilityServices.createFacilityIntoDb(req.body)
    res.status(200).json({
        success:true ,
        massage:'Facility added successfully',
        data:result
    })
})


export const facilityControllers = {
    createFacility
}