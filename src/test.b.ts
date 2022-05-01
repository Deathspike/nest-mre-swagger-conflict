import * as nst from '@nestjs/common';
import * as swg from '@nestjs/swagger';

export class Entry {
  @swg.ApiProperty()
  readonly valueOfB = '';
}

@nst.Controller('b')
export class Controller {
  @nst.Get()
  @swg.ApiResponse({status: 200, type: Entry})
  action() {
    return new Entry();
  }
}