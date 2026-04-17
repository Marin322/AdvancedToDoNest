import { IsNumber, MinLength } from "class-validator";

export class SubTaskDto {
    @MinLength(4)
    name: string

    @IsNumber()
    mainTaskId: number
}