import { useEffect } from "react";

function WithLoggin(Component) {
  const ComponentWithLoggin = () => {
    useEffect(() => {
      console.log("cargado");
    }, []);
    
    return <Component></Component>;
  };
  return ComponentWithLoggin;
}

export default WithLoggin;
