# React Hooks Guide for Your E-Commerce Project

## Hooks You Currently Use ✅
- **useEffect** - Fetch API, side effects
- **useContext** - Access cart data globally  
- **useState** - Manage local state (form data, products, etc.)

---

## 🎯 Additional Hooks You CAN Use

### 1. **useRef** - Keep reference without re-render
**Use Cases:**
- Focus on input fields
- Store timer IDs for cleanup
- Access DOM elements directly

**Where to use:**
- LoginSignup.jsx - Auto-focus on name field
- PlaceOrder.jsx - Focus on first empty field after validation error
- Success.jsx - Store timeout ID for cleanup

**Example for LoginSignup.jsx:**
```jsx
import { useRef } from 'react';

const LoginSignup = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !isLogin) {
      nameInputRef.current.focus();  // Auto-focus name input
    }
    if (!formData.email) {
      emailInputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={nameInputRef} type='text' />
      <input ref={emailInputRef} type='email' />
    </>
  );
};
```

---

### 2. **useCallback** - Memoize functions to prevent re-renders
**Use Cases:**
- Prevent child components from unnecessary re-renders
- Pass stable function references to optimized children

**Where to use:**
- Navbar.jsx - Wrap cart calculation function
- MensCollection.jsx & WomensCollection.jsx - Wrap addToCart function
- Cart.jsx - Wrap button handlers

**Why it matters:**
Without useCallback:
```jsx
// Every render creates NEW addToCart function
onClick={() => addToCart(product)}  // ❌ New function each time

// With useCallback
const memoizedAddToCart = useCallback((product) => {
  addToCart(product);
}, []);  // ✅ Same function reference, no unnecessary re-renders
```

**Example for MensCollection.jsx:**
```jsx
import { useCallback } from 'react';

const Menscollection = () => {
  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, [addToCart]);

  return (
    <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
  );
};
```

---

### 3. **useMemo** - Cache expensive calculations
**Use Cases:**
- Calculate filtered/sorted products
- Expensive computations (total price, discounts)
- Prevent recalculating same data

**Where to use:**
- Cart.jsx - Calculate total price
- MensCollection.jsx - Filter products by price
- Navbar.jsx - Calculate total items count

**Example for Cart.jsx:**
```jsx
import { useMemo } from 'react';

const Cart = () => {
  // WITHOUT useMemo - recalculates on EVERY render
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // WITH useMemo - only recalculates when cart CHANGES
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);  // Only recalculate if cart changes

  return <h2>Total: ₹{total}</h2>;
};
```

---

### 4. **useReducer** - Complex state logic
**Use Cases:**
- Cart operations (CartContext could use this!)
- Multiple related state updates
- Complex form validation

**Where to use:**
- CartContex.jsx - Replace manually managed cart logic
- LoginSignup.jsx - Manage form state + validation errors

**Example for CartContex.jsx (BETTER APPROACH):**
```jsx
import { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const exists = state.find(item => item.id === action.payload.id);
      return exists 
        ? state.map(item => item.id === action.payload.id 
            ? { ...item, qty: item.qty + 1 }
            : item)
        : [...state, { ...action.payload, qty: 1 }];
    
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    
    case 'INCREASE_QTY':
      return state.map(item => item.id === action.payload
        ? { ...item, qty: item.qty + 1 }
        : item);
    
    case 'DECREASE_QTY':
      return state.map(item => item.id === action.payload && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item);
    
    case 'CLEAR_CART':
      return [];
    
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // ... other functions similarly
};
```

---

### 5. **useLocalStorage** (Custom Hook) - Persist cart data
**Use Cases:**
- Save cart even after page refresh
- Remember user preferences
- Persist login status

**Where to use:**
- CartContex.jsx - Keep cart items after refresh
- LoginSignup.jsx - Remember login preference

**Custom Hook to Create:**
```jsx
// Create: src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
```

**Use it in CartContex.jsx:**
```jsx
const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);
  // Now cart persists even after browser closes!
};
```

---

### 6. **useLayoutEffect** - Run BEFORE DOM paints
**Use Cases:**
- Measure DOM elements (get height/width)
- Run code before visual updates

**Where to use:**
- Navbar.jsx - Measure navbar height for offset
- Hero.jsx - Set image dimensions before render

**Difference:**
```jsx
useEffect()          // Runs AFTER render ✅ Usually use this
useLayoutEffect()    // Runs BEFORE render (synchronous) ⚠️ Use rarely
```

---

### 7. **useId** - Generate unique IDs
**Use Cases:**
- Generate unique form input IDs
- Associate labels with inputs

**Where to use:**
- LoginSignup.jsx - Create unique IDs for inputs

**Example:**
```jsx
import { useId } from 'react';

const LoginSignup = () => {
  const nameId = useId();
  const emailId = useId();

  return (
    <>
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} type='text' />
      
      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} type='email' />
    </>
  );
};
```

---

### 8. **useTransition** - Non-blocking updates (React 18+)
**Use Cases:**
- Keep UI responsive during slow updates
- Show loading state while updating

**Where to use:**
- MensCollection.jsx - Fetch data without blocking UI
- Filter products without freezing

**Example:**
```jsx
import { useTransition } from 'react';

const Menscollection = () => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
      {isPending ? <p>Loading...</p> : <ProductList />}
    </>
  );
};
```

---

### 9. **useDeferredValue** - Defer expensive updates (React 18+)
**Use Cases:**
- Responsive search/filter input
- Update filtered results without freezing UI

**Where to use:**
- Search functionality (if you add it)

**Example:**
```jsx
import { useDeferredValue } from 'react';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.title.includes(deferredSearchTerm)
    );
  }, [deferredSearchTerm]);

  return (
    <>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList products={filteredProducts} />
    </>
  );
};
```

---

### 10. **Custom Hooks** - Reusable logic
**Create hooks for:**
- Form validation
- Fetch data
- Local storage
- Authentication

**Example - useFormValidation Hook:**
```jsx
// Create: src/hooks/useFormValidation.js
import { useState } from 'react';

export const useFormValidation = (initialValues, onSubmit, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return { formData, setFormData, errors, handleChange, handleSubmit };
};
```

**Use it:**
```jsx
// In LoginSignup.jsx
import { useFormValidation } from '../hooks/useFormValidation';

const LoginSignup = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    { name: '', email: '', password: '', agree: false },
    (data) => console.log('Submit:', data),
    (data) => {
      let errors = {};
      if (!data.name) errors.name = "Name required";
      return errors;
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={formData.name} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}
    </form>
  );
};
```

---

## 📊 Hooks Priority for Your Project

| Priority | Hook | Where | Why |
|----------|------|-------|-----|
| 🔴 HIGH | useCallback | MensCollection, Cart | Prevent re-renders |
| 🔴 HIGH | useMemo | Cart (total), Navbar | Expensive calculations |
| 🔴 HIGH | useRef | LoginSignup, PlaceOrder | Form focus, cleanup |
| 🔴 HIGH | useLocalStorage | CartContex | Persist cart data |
| 🟡 MEDIUM | useReducer | CartContex | Cleaner state logic |
| 🟡 MEDIUM | Custom Hooks | useFormValidation | Reusable form logic |
| 🟢 LOW | useId | LoginSignup | Accessibility |
| 🟢 LOW | useTransition | MensCollection | Non-blocking updates |

---

## 🚀 Quick Wins (Implement These First!)

1. **useLocalStorage in CartContex** - Cart persists after refresh
2. **useMemo in Cart.jsx** - Faster total calculation
3. **useRef in LoginSignup** - Better UX with auto-focus
4. **useFormValidation Custom Hook** - Remove validation logic from components

