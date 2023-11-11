import ReactDOM from 'react-dom';

test('renders root element', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  ReactDOM.createRoot(root);
  expect(root).toBeInTheDocument();
});