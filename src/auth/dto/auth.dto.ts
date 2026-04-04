import { IsEmail, IsString, MinLength } from "class-validator";
export class AuthDto {
    @IsEmail({}, {message: 'Некорректный формат почты'})
    email: string;

    @IsString()
    @MinLength(6, {message: 'Пароль должен быть не менее 6 символов'})
    password: string;
}