import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,
        private jwt: JwtService
    ) {}

    async register(dto: AuthDto) {
        const existUser = await this.prisma.user.findUnique({
            where: { email: dto.email }
        });
        if (existUser) throw new BadRequestException('Пользователь уже существует');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(dto.password, salt);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: hashedPassword
            },
        });

        const token = this.issueToken(user.id, user.email);
        return {user: { id: user.id, email: user.email}, token, message: "Успешная авторизация"};
    }

    async login(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {email: dto.email}
        });
        if(!user) throw new BadRequestException('Неверный логин или пароль');
        const isValidPassword = await bcrypt.compare(dto.password, user.password);
        if(!isValidPassword) throw new BadRequestException('Неверный логин или пароль');
        const token = this.issueToken(user.id, user.email);
        return {user: {id: user.id, email: user.email}, token, message: 'Успешная авторизация'};
    }

    private issueToken(userId: number, email: string) {
        const payload = {id: userId, email};
        return this.jwt.sign(payload);
    };
}
