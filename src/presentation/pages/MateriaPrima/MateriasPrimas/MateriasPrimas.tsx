import { Content } from '@/presentation/components';
import { CoreLayout } from '@/presentation/layouts';
import { TableMateriasPrimas } from './components';
import { MateriasPrimasProps } from './types';

export const MateriasPrimasPage = ({
  materiasPrimasService,
}: MateriasPrimasProps) => {
  return (
    <CoreLayout title="Matérias primas">
      <Content>
        <TableMateriasPrimas materiasPrimasService={materiasPrimasService} />
      </Content>
    </CoreLayout>
  );
};
