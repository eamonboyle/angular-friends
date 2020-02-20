import { PasswordEqualValidator } from './password-equal-validator.directive';

describe('PasswordEqualValidator', () => {
  it('should create an instance', () => {
    const directive = new PasswordEqualValidator('Test');
    expect(directive).toBeTruthy();
  });
});
