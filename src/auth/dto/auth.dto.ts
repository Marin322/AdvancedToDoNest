import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";
export class AuthDto {
    @ApiProperty({example: 'test@example.com', description: 'Электронная почта'})
    @IsEmail({}, {message: 'Некорректный формат почты'})
    email: string;

    @ApiProperty({example: '123456', description: 'Пароль >= 6 символов'})
    @IsString()
    @MinLength(6, {message: 'Пароль должен быть не менее 6 символов'})
    password: string;
}