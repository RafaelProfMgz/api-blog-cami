import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @ApiProperty({
    description: 'ID do usuário a ser deletado',
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID('4', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'ID é obrigatório' })
  id: string;
    
}
