import { Model, OneToMany } from "sequelize";
import { Column, Table } from "sequelize-typescript";

@Table
export class Assignment extends Model {

    
    @OneToMany(type => Photo, photo => photo.user)
    photos: Photo[];
    

}
