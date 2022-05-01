import * as nst from '@nestjs/common';
import * as swg from '@nestjs/swagger';

export class Entry {
  @swg.ApiProperty()
  readonly valueOfA = '';
}

@nst.Controller('a')
export class Controller {
  @nst.Get()
  @swg.ApiResponse({status: 200, type: Entry})
  action() {
    return new Entry();
  }
}
