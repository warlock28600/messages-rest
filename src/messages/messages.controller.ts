import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { CreateMessageDto } from './Dtos/craete-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    this.messageService = new MessagesService();
  }

  @Get()
  listMessages() {
  return  this.messageService.findAll();
  }

  @Get('/:id')
  getMessageWithId(@Param('id') id: any) {
    console.log(id)
    return this.messageService.findOne(id)
  }

  @Post()
  craeteMessages(@Body() body: CreateMessageDto) {
    this.messageService.create(body.content)
  }
}
