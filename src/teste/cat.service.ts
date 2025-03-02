import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cat } from "../schemas/fileteste.schema";
import { Model } from "mongoose";
import { CreateCatDto } from "./dto/createCat.dto";

@Injectable()
export class CatService{
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>){}

async create(createCatDto: CreateCatDto): Promise<Cat> {
  const createdCat = new this.catModel(createCatDto);
  return createdCat.save();
}

async findAll(){
  return this.catModel.find().exec();
}
}
