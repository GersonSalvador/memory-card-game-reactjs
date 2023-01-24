import { render, act } from '@testing-library/react';

import Dashboard from './';
import ErrorBoundary from '../../components/ErrorBoundary';

describe('Dashboard Page', () => {

  function makeSut() {
    return render(
      <ErrorBoundary >
        <Dashboard />
      </ErrorBoundary>
    );
  }

  it('renders on screen ', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('dashboard');
    expect(component).toBeInTheDocument();
  });

  it('should render Header', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('header');
    expect(component).toBeInTheDocument();
  })

  it('should have 4 levels', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('levels')
    expect(component).toBeInTheDocument();
    expect(component.childNodes.length).toEqual(4);
  })

  it('should have 1 counter', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('counter')
    expect(component).toBeInTheDocument();
  })

  it('should have 1 Counter', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('counter')
    expect(component).toBeInTheDocument();
  })

  it('should have 1 Board if isStarted is true', () => {
    const {queryByTestId, getByTestId} = makeSut();
    const startBtn = getByTestId('start-btn')
    expect(queryByTestId('board')).not.toBeInTheDocument();
    act(() => {
      startBtn.click()
    })
    expect(queryByTestId('board')).toBeInTheDocument();
    act(() => {
      startBtn.click()
    })
    expect(queryByTestId('board')).not.toBeInTheDocument();
  })

  it('should have 1 MessageDisplay if isFinished is true', async () => {
    const {queryByTestId, getByTestId} = makeSut();
    expect(queryByTestId('message-container')).not.toBeInTheDocument();
    const startBtn = getByTestId('start-btn')
    act(() => {
      startBtn.click()
    })
    expect(queryByTestId('message-container')).not.toBeInTheDocument();
    act(() => {
      startBtn.click()
    })
    expect(queryByTestId('message-container')).toBeInTheDocument();
  })
})
