import { createSearchParams, useNavigate } from "react-router-dom";
import React  from "react";
export const useNavigateParams = () => {
    const navigate = useNavigate();
  
    return React.useCallback((pathname, params) => {
      const path = {
        pathname,
        search: createSearchParams(params).toString()
      };
      navigate(path);
    },[navigate]);
};