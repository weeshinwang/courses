import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            Color: {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return (
        <div>
            Color: {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};

ChildAsFC.displayName = "HEYA";
