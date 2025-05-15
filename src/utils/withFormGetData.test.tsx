import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useFormGetData } from './withFormGetData';

describe('useFormGetData', () => {
  it('should initialize with default form values', () => {
    const { result } = renderHook(() => useFormGetData());

    expect(result.current.formdata).toEqual({ email: "", password: "" });
    expect(result.current.invalidEmail).toBe(false);
  });

  it('should update form data when handleChangeEvent is called', () => {
    const { result } = renderHook(() => useFormGetData());

    act(() => {
      result.current.handleChangeEvent({
        target: { name: 'email', value: 'test@example.com' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    act(() => {
        result.current.handleChangeEvent({
          target: { name: 'password', value: 'test@example.com' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

    expect(result.current.formdata.email).toBe('test@example.com');
    expect(result.current.formdata.password).toBe('test@example.com');
  });

  it('should allow setting invalidEmail state', () => {
    const { result } = renderHook(() => useFormGetData());

    act(() => {
      result.current.setInvalidEmail(true);
    });

    expect(result.current.invalidEmail).toBe(true);
  });
});
