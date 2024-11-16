import { Module } from '@nestjs/common';
import { ReclutamientoController } from './reclutamiento.controller';
import { ReclutamientoService } from './reclutamiento.service';

@Module({
  controllers: [ReclutamientoController],
  providers: [ReclutamientoService]
})
export class ReclutamientoModule {}
