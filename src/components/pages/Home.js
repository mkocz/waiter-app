import { useDispatch } from "react-redux";
import { fetchTables } from "../../redux/tablesRedux";
import { useEffect } from "react";
import Tables from "../features/Tables";

const Home = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log('wtf')
    //     dispatch(fetchTables())
    // }, [dispatch])
    return (
        <>
            <h1 className="mt-5 mb-3">All Tables</h1>
            <Tables />
        </>
    );
};

export default Home;