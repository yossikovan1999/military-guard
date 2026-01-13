import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(username: string, password: string): Promise<{ access_token: string }> {
    
    const user = await this.usersService.getByUsername(username);

    if (!user || !user.password) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username, role: user.role };

    return {
      // Here the JWT secret key that's used for signing the payload
      // is the key that was passsed in the JwtModule
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
