* useEffect takes in a function
* every time the component is rendered or re-rendered, useEffect is called
* console.log inside of useEffect
* clean up after render has happened
* second argument - array, values.password - only the values that have changed that you want to call useEffect - dependency array - all values your effect depends on
* shallow comparison of the values?
* componentDidMount/componentWillUnmount
* often see it with an empty array as the second argument because you only want it to run once for your first render (initial fetch/GET)
* return a function to add cleanup logic (what kind of cleanup logic?)
* good place to add and remove event listeners

* you can have more than 1 useEffect and they will fire off in ourder 





https://www.youtube.com/watch?v=j1ZRyw7OtZs
https://michalzalecki.com/versatility-and-use-cases-of-react-use-effect-hook/