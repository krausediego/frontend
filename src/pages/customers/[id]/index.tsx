import { EditCustomerPageFactory } from '@/main/factories/pages/customer';
import { GetServerSideProps } from 'next';

type Props = {
  params: {
    id: string;
  };
};

const createCustomerRoute = ({ params }: Props) => {
  const { id } = params;

  return <EditCustomerPageFactory id={id} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

export default createCustomerRoute;
