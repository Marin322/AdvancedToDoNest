import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() dto: AuthDto) {
        return this.authService.register(dto);
    };

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        return this.authService.login(dto);
    };
}
