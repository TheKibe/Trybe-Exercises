import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ValidEmail from './Components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Não exibir a mensagem caso o email ainda não tenha sido enviado', () => {
  render(<ValidEmail email="" />)
  const isValid = screen.queryByTestId('valid-email');
  expect(isValid).not.toBeInTheDocument();
});

test('Mude a cor do texto para verde caso o email seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />)
  const isValid = screen.queryByTestId('valid-email');
  expect(isValid).toHaveStyle({color: 'green'})
});

test('Mude a cor do texto para vermelho caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />)
  const isValid = screen.queryByTestId('valid-email');
  expect(isValid).toHaveStyle({color: 'red'})
});