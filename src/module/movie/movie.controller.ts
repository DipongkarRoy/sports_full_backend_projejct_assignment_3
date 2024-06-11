import { Request, Response } from 'express';
import { allMovieServices } from './movie.service';

const createMovie = async (req: Request, res: Response) => {
  try {
    const {movies} = req.body
    const result = await allMovieServices.createMovieDb(movies);

    res.status(200).json({
      success: true,
      massage: 'movie create sucessfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMovie = async( req:Request ,res:Response)=>{
   try{
    const result = await allMovieServices.getMovieDb()
    res.status(200).json({
        success: true,
        massage: 'movie all get sucessfully',
        data: result,
      });
   }catch(error){
    console.log(error);
   }

}


export const movieController ={
    createMovie ,
    getMovie
}
