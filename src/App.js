import './App.css';

function App() {
  return (
    <div className="">
      <div className='mt-20 grow'>
        <h1 class="text-3xl mb-8">
          ANKIT'S Todo App
        </h1>

        <label htmlFor="input" className
        text-xs>Write a Todo</label> <br /> 
        <input type="text" id="input" className='border outline-none w-[300px]'/>
      </div>
    </div>
  );
}

export default App;
