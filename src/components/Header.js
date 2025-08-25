import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Gerador de Fichas Técnicas de Produtos</h1>
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Criar Nova</NavLink>
        <NavLink to="/salvas" className={({ isActive }) => (isActive ? 'active' : '')}>Fichas Salvas</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
};
export default Header;