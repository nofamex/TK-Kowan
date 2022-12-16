import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'src/auth/auth.dto';
import { CreateAccomodationDto } from './accomodation.dto';
import { AccomodationService } from './accomodation.service';

@Controller('accomodation')
export class AccomodationController {
  @Inject(AccomodationService)
  private readonly service: AccomodationService;

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  public async create(
    @Body() body: CreateAccomodationDto,
    @Req() req: any,
  ): Promise<Response> {
    return await this.service.createAccomodation(body, req.user);
  }

  @Get('/user-accom')
  @UseGuards(AuthGuard('jwt'))
  public async userAccom(@Req() req: any): Promise<Response> {
    return await this.service.getAllUserAccom(req.user);
  }

  @Get('/all')
  public async allAccom(): Promise<Response> {
    return await this.service.getAllAccom();
  }
}
