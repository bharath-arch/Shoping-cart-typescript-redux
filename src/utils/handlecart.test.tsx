import { renderHook, act } from '@testing-library/react';
import { useHandleAddCart, useHandleRemoveCart } from './handlecart';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';

// Mock the Redux store
const mockStore = configureStore([]);

// Mock the Redux actions
vi.mock('../Redux/sclice/cart', () => ({
  pushToCart: vi.fn((payload) => ({ type: 'cart/pushToCart', payload })),
  removefromcart: vi.fn((payload) => ({ type: 'cart/removefromcart', payload }))
}));

describe('Cart Hook Tests', () => {
  let store: any;
  
  // Set up a fresh store before each test
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = vi.fn();
  });

  describe('useHandleAddCart', () => {
    it('should create cart item and dispatch pushToCart action', () => {
      // Create a wrapper with the Redux Provider
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      // Test data
      const id = 1;
      const name = 'Test Product';
      const image = 'test-image.jpg';
      const price = 19.99;

      // Render the hook
      const { result } = renderHook(
        () => useHandleAddCart(id, name, image, price),
        { wrapper }
      );

      // Execute the returned handler function
      act(() => {
        result.current();
      });

      // Assert dispatch was called
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      
      // Check if the correct action was dispatched with the right payload
      const action = store.dispatch.mock.calls[0][0];
      expect(action).toEqual({
        type: 'cart/pushToCart',
        payload: {
          id: 1,
          name: 'Test Product',
          quantity: 1,
          image: 'test-image.jpg',
          price: 19.99
        }
      });
    });

    it('should handle undefined image and price', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(
        () => useHandleAddCart(2, 'Product Name', undefined, undefined),
        { wrapper }
      );

      act(() => {
        result.current();
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      const action = store.dispatch.mock.calls[0][0];
      expect(action.payload).toEqual({
        id: 2,
        name: 'Product Name',
        quantity: 1,
        image: undefined,
        price: undefined
      });
    });
  });

  describe('useHandleRemoveCart', () => {
    it('should dispatch removefromcart action with correct payload', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(
        () => useHandleRemoveCart(1, 'Product', 'image.jpg'),
        { wrapper }
      );

      act(() => {
        result.current();
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      const action = store.dispatch.mock.calls[0][0];
      expect(action).toEqual({
        type: 'cart/removefromcart',
        payload: {
          id: 1,
          name: 'Product',
          quantity: 1,
          image: 'image.jpg'
        }
      });
    });

    it('should handle undefined image', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(
        () => useHandleRemoveCart(3, 'Product Three', undefined),
        { wrapper }
      );

      act(() => {
        result.current();
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      const action = store.dispatch.mock.calls[0][0];
      expect(action.payload).toEqual({
        id: 3,
        name: 'Product Three',
        quantity: 1,
        image: undefined
      });
    });
  });
});