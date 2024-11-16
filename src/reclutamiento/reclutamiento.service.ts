import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ReclutamientoService {
  validateAndNormalize(data: any) {
    // Normalizar nombre y apellido
    data.name = this.capitalizeWords(data.name);
    data.suraname = this.capitalizeWords(data.suraname);

    // Validar fecha
    this.validateBirthday(data.birthday);

    // Validar edad
    if (!Number.isInteger(data.age)) {
      throw new BadRequestException('El campo age debe ser un número entero.');
    }

    // Validar tipo de documento
    const validDocumentTypes = ['CUIT', 'DNI'];
    if (!validDocumentTypes.includes(data.documentType)) {
      throw new BadRequestException('El campo documentType debe ser CUIT o DNI.');
    }

    return data;
  }

  capitalizeWords(str: string) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  validateBirthday(birthday: string) {
    const date = new Date(birthday);
    const today = new Date();
    const minDate = new Date('1900-01-01');

    if (isNaN(date.getTime()) || date < minDate || date > today) {
      throw new BadRequestException('El campo birthday debe tener un formato válido (YYYY/MM/DD) y estar en el rango permitido.');
    }
  }

  async sendData(data: any) {
    const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';
    const response = await axios.post(url, data);
    return response.data;
  }

  async findAll() {
    const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';
    const response = await axios.get(url);
    return response.data;
  }
}