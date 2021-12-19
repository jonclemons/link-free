import { darken } from 'polished'
import styled from 'styled-components'

type ButtonProps = {
  labelColor?: string
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string
  size?: 'small' | 'medium'
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  labelColor: props.labelColor || '#f8fafc',
  backgroundColor: props.backgroundColor || '#e11d48',
  borderColor: props.borderColor || '#e11d48',
  borderRadius: props.borderRadius || 8,
  size: props.size || 'medium'
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  color: ${({ labelColor }) => labelColor};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: 2.5px;
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ backgroundColor }) => darken(0.1, backgroundColor!)};
    border-color: ${({ borderColor }) => darken(0.1, borderColor!)};
    transform: translateY(-0.15rem);
  }

  &:active {
    background: ${({ backgroundColor }) => darken(0.2, backgroundColor!)};
    border-color: ${({ borderColor }) => darken(0.2, borderColor!)};
  }

  ${({ size }) =>
    size === 'small' &&
    `
    height: 2rem;
    font-size: 0.875rem;
  `}

  ${({ size }) =>
    size === 'medium' &&
    `
    height: 3rem;
    font-size: 1rem;
  `}
`
