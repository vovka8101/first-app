import StatusInfo from "../components/Profile/ProfileInfo/StatusInfo/StatusInfo";
import { create } from "react-test-renderer";

describe('Profile status component', () => {
  it('checks if we get profile status from props', () => {
    const component = create(<StatusInfo status='my status' />);
    const instance = component.getInstance();
    expect(instance.state.statusText).toBe('my status');
  });

  test('input should not be displayed', () => {
    const component = create(<StatusInfo status='test status' />);
    const root = component.root;
    expect(() => {
      const input = root.findByType('input');
    }).toThrow();    
  });

  test('status should be N/A', () => {
    const component = create(<StatusInfo status='test' />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('test');
  });

  it('should display input after button pressing', () => {
    const component = create(<StatusInfo status='button pressing' />);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onClick();
    const input = root.findByType('input');
    expect(input.props.value).toBe('button pressing');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<StatusInfo status='test' updateProfileStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.onStatusUpdate();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});
