import { IMateriasPrimas } from '@/domain/useCases';

export type TableMateriasPrimasProps = {
  materiasPrimasService: IMateriasPrimas;
};

export type BodyTableMateriasPrimasProps = {
  materiaPrima: IMateriasPrimas.Data;
};
