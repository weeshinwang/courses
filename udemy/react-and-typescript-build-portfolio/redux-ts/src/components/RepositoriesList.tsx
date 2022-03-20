import * as React from "react";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");

    const { searchRepositories } = useActions();

    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={handleChange} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((d) => <h3>{d}</h3>)}
        </div>
    );
};

export default RepositoriesList;
