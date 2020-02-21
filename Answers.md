1. What problem does the context API help solve?

The context API solves the problem of prop drilling
that is, we no longer have to pass props  down from component to component

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - an action is simply an object with up to two properties - a type property and an optional payload property. 
Actions are “dispatched” to our reducer - aka, passed into the reducer function as an argument. When our reducer recieves an action, it will update the state according to the type and payload on the action.

reducers- A reducer is a function that determines changes to an application's state.
The reducer consolidates actions into a single object representing application state

store - Everything that changes within your application is represented by a single JavaScript Object known as the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

Component state should be use d when creating maybe like a formnor things that are used once
Ppplication state should be used on things that needs modifying often

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It's an interupting function. It lets us make 
asyncronus api calls

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like context because I don't have to bring in another library and I feel like it's easier to set up. 
