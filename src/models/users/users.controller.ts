import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetOneUserDto } from './dto/get-one-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('Users')
@Controller('users')
@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({
    type: CreateUserDto,
    description: 'Objeto contendo os dados do usuário',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiBody({
    type: PaginationDto,
    description: 'Objeto contendo os dados de paginação',
  })
  @ApiQuery({
    name: 'page',
  }) 
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    const { page, limit, skip, sort } = paginationDto;

    return this.usersService.findAll({
      skip,
      take: limit,
      sort,
    });
  }

  @ApiBody({
    type: GetOneUserDto,
    description: 'Objeto contendo os dados do usuário',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID do usuário',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @ApiBody({
    type: UpdateUserDto,
    description: 'Objeto contendo os dados do usuário',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID do usuário',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiBody({
    type: DeleteUserDto,
    description: 'Objeto contendo os dados do usuário',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID do usuário',
  })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
