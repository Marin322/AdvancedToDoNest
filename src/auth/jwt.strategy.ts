import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  // Если токен валидный, NestJS вызовет этот метод. 
  // То, что мы тут вернем, попадет в объект request.user
  async validate(payload: { id: number; email: string }) {
    return { id: payload.id, email: payload.email };
  }
}