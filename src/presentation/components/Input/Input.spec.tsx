import { render, fireEvent } from '@testing-library/react';

import { Input } from './Input';

describe('<Input /> Component', () => {
  it('Should render form control component', async () => {
    const input = render(<Input label="test" />);
    expect(await input.findByTestId('form-control')).toBeTruthy();
  });

  it('Should render input component', async () => {
    const input = render(<Input label="test" />);
    expect(await input.findByTestId('input-component')).toBeTruthy();
  });

  it('Should render input error message', async () => {
    const input = render(<Input label="test" errorMessage="test" />);
    expect(await input.findByTestId('input-error-message')).toBeTruthy();
  });

  it('Should render input error icon', async () => {
    const input = render(<Input label="test" errorMessage="test" />);
    expect(await input.findByTestId('input-error-icon')).toBeTruthy();
  });

  it('Should get correct value when call `onChange`', () => {
    const onChangeSpy = jest.fn();
    const component = render(<Input label="test" onChange={onChangeSpy} />);
    const inputEl = component.getByTestId(
      'input-component',
    ) as HTMLInputElement;
    fireEvent.change(inputEl, { target: { value: 'my change text' } });
    expect(onChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ target: inputEl }),
    );
    expect(inputEl.value).toEqual('my change text');
  });
});
