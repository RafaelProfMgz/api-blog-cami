import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetOnePostDto {
  @ApiProperty({
    description: 'ID do post a ser retornado',
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  id: string;
}
