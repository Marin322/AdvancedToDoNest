import { MinLength } from "class-validator";

export class MainTaskDto {
    @MinLength(4, {message: 'Название должно содежать не менее 4-х символов'})
    name: string
}