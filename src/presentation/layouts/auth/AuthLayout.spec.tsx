import { render } from '@testing-library/react';
import { AuthLayout } from './AuthLayout';

describe('<AuthLayout /> Component', () => {
  it('Should render auth layout', async () => {
    const authLayout = render(
      <AuthLayout>
        <div />
      </AuthLayout>,
    );
    expect(await authLayout.findByTestId('auth-layout')).toBeTruthy();
  });

  it('Should render auth layout children', async () => {
    const authLayout = render(
      <AuthLayout>
        <div data-testid="children" />
      </AuthLayout>,
    );
    expect(await authLayout.findByTestId('children')).toBeTruthy();
  });
});
