import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const authMiddleware = (Component) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const verifyAuth = async () => {
      // add your code here
    };

    useEffect(() => {
      verifyAuth();
    }, []);

    if (loading) {
      return null;
    }

    if (!authenticated) {
      return <Navigate to="/signin" replace />;
    }
    return <Component {...props} />;
  };
};

export default authMiddleware;
