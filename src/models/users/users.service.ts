import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from 'bcryptjs';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const encryptedPassword = await hash(createUserDto.password, 10);

    const userCreated = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: encryptedPassword,
      },
    });

    return userCreated;
  }

  async findAll(paginationParams: {
    skip: number;
    take: number;
    sort?: string;
  }) {
    const { skip, take, sort } = paginationParams;

    const users = await this.prisma.user.findMany({
      skip, 
      take, 
      orderBy: sort ? { [sort]: 'asc' } : undefined,
    });

    return users;
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let dataToUpdate = { ...updateUserDto };

    // If password is being updated, encrypt it
    if (updateUserDto.password) {
      dataToUpdate.password = await hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
