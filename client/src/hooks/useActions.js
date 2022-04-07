import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { preloaderActions } from "../store/slice/preloader.slice";

const allActions = {
  ...preloaderActions,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
