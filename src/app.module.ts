import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReclutamientoModule } from './reclutamiento/reclutamiento.module';

@Module({
  imports: [ReclutamientoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
