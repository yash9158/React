import { useState , useCallback, useEffect , useRef } from 'react'

function App() {
  
  const [len, setLen] = useState(8);
  const [numAllowed,setNumallowed] = useState(false);
  const [charAllowed,setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(fn,[len,numAllowed,charAllowed,password,setPassword]);

  // Ref
  const passwordRef = useRef(null); 

  function fn(){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if( numAllowed ) str += "0123456789";
    if( charAllowed ) str += "@!#${}";

    for( let i = 1; i <= len ; i++ ){
      let pos = Math.floor(Math.random() * str.length);
      pass += (str.charAt(pos));
    }
    setPassword(pass);
  }

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0,3);  //  for range select
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{ passGen() } , [len,numAllowed,charAllowed] );

  return (
    <>
      <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700" > 
        <div className = "shadow rounded-lg overflow-hidden mb-4 text-center"> Password Generator
          <div className='flex'>
          <input 
            type="text" 
            value = {password} 
            className = "outline-none w-full py-1 px-3 rounded-lg "
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />

          <button 
            className='bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'
            onClick={copyPasswordToClipboard}
          >
            copy

          </button>
          </div>
        </div>  
        <div className="flex text-sm gap-x-2">
          <div className='flex item-center gap-x-1'>
            <input
              type = "range"
              min = {8}
              max = {100}
              value = {len}
              className='cursor-pointer'
              onChange = {(e) => setLen(e.target.value)}
            />
            <label> Length: {len} </label>
            <div className='flex items-center gap-x-1 ml-5'>
              <input
                    type = "checkbox"
                    defaultChecked={numAllowed}
                    id="numberInput"
                    onChange={ () => {
                      setNumallowed(!numAllowed);
                      // console.log(numAllowed);
                    }}
              />
              <label> Number </label>
            </div>
            <div className='flex items-center gap-x-1 ml-5'>
              <input
                    type = "checkbox"
                    defaultChecked={charAllowed}
                    id="charInput"
                    onChange={ () => {
                      setCharallowed(!charAllowed);
                      // console.log(charAllowed);
                    }}
              />
              <label> Character </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
