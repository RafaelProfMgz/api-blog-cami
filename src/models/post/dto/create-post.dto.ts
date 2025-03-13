import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsUrl,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Título do post',
    type: String,
    example: 'Como criar uma API com NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Descrição do post',
    type: String,
    example: 'Aprenda a criar uma API com NestJS em poucos passos...',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'URL da imagem do post',
    type: String,
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  image?: string;

  @ApiProperty({
    description: 'Conteúdo do post',
    type: String,
    example: 'Neste post, você aprenderá como criar uma API com NestJS...',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    description: 'Post publicado ou não',
    type: Boolean,
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @ApiProperty({
    description: 'ID do autor do post',
    type: Number,
    example: 1,
  })
  @IsDefined()
  authorId?: number;
}
