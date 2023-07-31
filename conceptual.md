### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a popular JavaScript library for building interactive user interfaces (UIs). It uses a component-based architecture and a virtual DOM for efficient updates. You'd use React when creating complex UIs, building single-page applications (SPAs), or needing reusable components with high performance. It's widely used and well-suited for modern web development.

- What is Babel?
    Babel is a JavaScript compiler that translates modern code into an older version for wider browser support. It allows developers to use the latest JavaScript features while ensuring compatibility with older environments.

- What is JSX?
    JSX is a syntax extension used with React that lets you write HTML-like code directly in JavaScript for creating user interface components. It simplifies the process of building React components and makes the code more readable.

- How is a Component created in React?
    In React, you can create a component using either a function or a class. Functional components are simpler and use JavaScript functions that return JSX elements. Class components extend the React.Component class and provide additional features like state and lifecycle methods.

- What are some difference between state and props?
    State:
        Managed within the component.
        Mutable using setState().
        Local to the component.
        Used for dynamic data that can change.

    Props:
        Passed from parent to child components.
        Immutable, read-only.
        Used for static data or configuration.
        Enables data sharing between components.

- What does "downward data flow" refer to in React?
    In React, "downward data flow" refers to the one-way flow of data from parent components to their child components through props. Parent components pass data to their children, and child components cannot directly modify the data; they can only notify changes through callbacks. This pattern provides a clear and predictable data flow in the application, leading to better maintainability and structure.

- What is a controlled component?
    In React, a "controlled component" is a form element whose value is controlled by the component's state. The state serves as the single source of truth for the element's value, and any changes to the element are managed by updating the state. This pattern ensures that form elements and state are always in sync, making it easier to handle user input and form submissions.

- What is an uncontrolled component?
    In React, an "uncontrolled component" is a form element whose value is not directly managed by React state. Instead, it relies on the DOM to handle its state. The initial value is set using defaultValue or defaultChecked, but changes to the element's value are not synced with React state. Uncontrolled components are simpler to implement but have limitations compared to controlled components

- What is the purpose of the `key` prop when rendering a list of components?
    The key prop in React is used when rendering a list of components. It helps React efficiently track and update individual components in the list. It should be a unique value and remain consistent between renders to optimize performance.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a key prop when rendering a list of components is discouraged because it can lead to issues like poor performance, key collisions, and incorrect component updates. It's better to use unique and stable identifiers from the data as key props to avoid these problems.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a React hook used to manage side effects in functional components. It runs after each render and is used for data fetching, DOM manipulation, timers, and subscriptions. You can specify dependencies to control when the effect runs. Common use cases include fetching data from APIs and subscribing/unsubscribing to events.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a React hook that creates a mutable reference that persists across renders. Changing the value of a ref does not cause the component to re-render. It is commonly used to interact with DOM elements directly.

- When would you use a ref? When wouldn't you use one?
    Use a ref in React when you need to interact with the DOM, manage focus, or work with third-party libraries. Common use cases include handling focus, direct DOM manipulation, and accessing form values.

    However, avoid using refs as a replacement for state and props. Refs should not be used to directly manipulate the DOM in most cases, as React encourages declarative UI management. Use them judiciously to prevent performance issues and anti-patterns.

- What is a custom hook in React? When would you want to write one?
    Custom hooks in React are reusable functions that encapsulate stateful logic or side-effects, making it easier to share complex logic between components. You might write a custom hook when you need to reuse certain logic across multiple components, improve code organization, and create shareable logic.
