import renderer from 'react-test-renderer';
import { Board } from '../components/Board';

it('???', () => {
    const component = renderer.create(
        <Board boxes={[Array(9).fill(null)]} onClick={() => {}} style="board"/>);
    expect(component).toMatchSnapshot();
  });