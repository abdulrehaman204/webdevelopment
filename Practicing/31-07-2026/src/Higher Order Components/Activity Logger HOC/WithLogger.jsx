import { useEffect } from "react";

function WithLogger(Component) {
  return function Logger(props) {
    useEffect(() => {
      console.log(
        `${Component.name} mounted`
      );

      return () => {
        console.log(
          `${Component.name} unmounted`
        );
      };
    }, []);

    useEffect(() => {
      console.log("Props Updated:", props);
    }, [props]);

    return <Component {...props} />;
  };
}

export default WithLogger;