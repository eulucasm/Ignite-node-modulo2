import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
   CreateCourseService.execute({
      name:"Node.js",
      educator: "Lucas",
      duration: 20,
   })
   CreateCourseService.execute({
      name:"Vue.js",
      educator: "João",
   })
   return response.send()
}