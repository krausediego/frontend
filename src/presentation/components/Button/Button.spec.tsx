import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';

const setup = () => {
  const functionClick = jest.fn();
  const utils = render(<Button onClick={functionClick}>test</Button>);
  const button = utils.findByTestId('button-component');
  return {
    button,
    functionClick,
    ...utils,
  };
};

describe('<Button /> Component', () => {
  it('Should render button component', async () => {
    const { button } = setup();
    expect(await button).toBeTruthy();
  });

  it('Should call onClick button component', async () => {
    const { button, functionClick } = setup();
    fireEvent.click(await button);
    expect(functionClick).toBeCalled();
  });
});
