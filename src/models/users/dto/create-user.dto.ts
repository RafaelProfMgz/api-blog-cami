import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    required: true,
    example: 'casa@teste.com',
  })
  @IsEmail({}, { message: 'O email informado não é válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  email: string;

  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    required: true,
    example: 'Casa',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    required: true,
    example: '12345678',
  })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;
}
