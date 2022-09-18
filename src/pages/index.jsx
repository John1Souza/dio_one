import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {
    const [name, setName] = useState('Johnatas');
  const [age, setAge] = useState(26);

  const handleChangeName = useCallback(() => {
    setName(prev => prev === 'Johnatas' ? 'Jose' : 'Johnatas');
  },[]);
  const handleChangeAge = useCallback(() => {
      const newAge = 10 * age;
      console.log('age atual', age, newAge);
    setAge(prev => prev === 26 ? 32 : 26);
  },[age]);
//   const calculo = useMemo(() => {
//     console.log('calculou', age)    
//     return 10 * age;
// //     }, [age]);

//   console.log('Renderizei');

  return (
    <div>
      <p>Idade: {age}</p>
      <br />
      <p>Nome: {name}</p>
      <br />
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar Idade</button>
    </div>
  );
};

export { Teste };