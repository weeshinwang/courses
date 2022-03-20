import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
    // 返回一个对象 {searchRepositories: dispatch(searchRepositories)}
};
