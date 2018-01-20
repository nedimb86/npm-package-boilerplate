import { greetings } from "../index";

test('greet person', () => (
  expect(greetings('Master')).toBe('Hello Master!')
));
