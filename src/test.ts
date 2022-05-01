import * as a from './test.a';
import * as b from './test.b';
import * as nst from '@nestjs/common';
import * as swg from '@nestjs/swagger';
import {NestFactory} from '@nestjs/core';

@nst.Module({controllers: [a.Controller, b.Controller]})
class Module {}

(async function() {
  const app = await NestFactory.create(Module);
  const builder = new swg.DocumentBuilder();
  swg.SwaggerModule.setup('', app, swg.SwaggerModule.createDocument(app, builder.build()));
  await app.listen(3000);
})();
