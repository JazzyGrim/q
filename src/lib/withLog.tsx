import { ComponentType } from 'react';

export function withLog<T>(Component: ComponentType<T>) {
  return (props: Omit<T, 'propMessage'>) => {
    return <Component {...(props as T)} propMessage='Hello from ' />;
  };
}
