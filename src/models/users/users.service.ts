import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash, compare } from 'bcryptjs';
import { User } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Create a new user with encrypted password
  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const encryptedPassword = await hash(createUserDto.password, 10);

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const userCreated = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: encryptedPassword,
      },
    });

    return userCreated;
  }

  // Get a list of users with pagination
  async findAllUser(paginationParams: {
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

  // Find a user by ID
  findOneUser(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // Update user details, including password if provided
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    let dataToUpdate = { ...updateUserDto };

    if (updateUserDto.password) {
      dataToUpdate.password = await hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  // Delete a user by ID
  async removeUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // If the user exists, compare the password
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
