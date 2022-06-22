import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App'


  

test('add value in input', () => {
    render(<App />)        
    expect(screen.queryByDisplayValue('Купить молоко')).toBeNull()
    userEvent.type(screen.getByTestId('add-value'), 'Купить молоко')
    expect(screen.getByDisplayValue('Купить молоко')).toBeInTheDocument()
})
test('add todos', () => {        
    render(<App />)    
    const button = screen.getByTestId('btn-add')  
    userEvent.type(screen.getByTestId('add-value'), 'Купить молоко')      
    userEvent.click(button)         
    expect(screen.getByText('Купить молоко')).toBeInTheDocument()
    
})
