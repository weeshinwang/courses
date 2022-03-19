import { Child, ChildAsFC } from "./Child";

const Parent = () => {
    return (
        <>
            {/* <Child color='red' onClick={() => console.log('CLICKED')}>
                dsfdsf
            </Child> */}
            <ChildAsFC color="red" onClick={() => console.log("CLICKED")}>
                dsf
            </ChildAsFC>
        </>
    );
};

export default Parent;
