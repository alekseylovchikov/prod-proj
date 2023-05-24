import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'someClass';

    expect(classNames('someClass')).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods class', () => {
    const expected = 'someClass class1 class2 hovered active';

    expect(classNames('someClass', { hovered: true, active: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods false class', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, active: false }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods undefined class', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, active: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
