import React, { useState } from 'react';

function App() {
const [selected, setSelected] = useState(undefined);
/**
 * type shapes = {
 *  id: number, (Date.now())
 *  type: string, ("rectangle", "circle", "textbox", "todo")
 *  x: number,
 *  y: number,
 *  width: number,
 *  height: number,
 *  backgroundColor: string,  ("transparent", "white", etc)
 *  borderColor: string,
 *  text: string
 * }
 */
const [shapes, setShapes] = useState([]);

return (
  <div>
    
  </div>
);
}
export default App;