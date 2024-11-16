import { Controller, Post, Body, Get } from '@nestjs/common';
import { ReclutamientoService } from './reclutamiento.service';

@Controller('reclutamiento')
export class ReclutamientoController {
  constructor(private readonly reclutamientoService: ReclutamientoService) {}

  @Get()
  async findAll() {
    console.log('Petición GET recibida en /reclutamiento');
    const allData = await this.reclutamientoService.findAll();
    return allData;
  }

  @Post()
  async create(@Body() body: any) {
    console.log('Petición POST recibida en /reclutamiento con datos:', body);
    
    // Validar y normalizar los datos
    const normalizedData = this.reclutamientoService.validateAndNormalize(body);
    
    // Hacer la petición al servicio externo
    const response = await this.reclutamientoService.sendData(normalizedData);
    
    // Realizar otra petición hacia el servicio web de reclutamiento
    const externalResponse = await this.reclutamientoService.sendData(normalizedData);
    
    return {
      message: 'Datos enviados correctamente',
      externalResponse: externalResponse,
    };
  }
}