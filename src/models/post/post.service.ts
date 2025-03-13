import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const postCreated = await this.prisma.post.create({
      data: createPostDto,
    });
    return postCreated;
  }

  async findAll() {
    const posts = this.prisma.post.findMany();
    return posts;
  }

  async findOne(id: number) {
    const post = this.prisma.post.findUnique({
      where: { id },
    });
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const postUpdated = this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
    return postUpdated;
  }

  async remove(id: number) {
    const postDeleted = this.prisma.post.delete({
      where: { id },
    });
    return postDeleted;
  }
}
