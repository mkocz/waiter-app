//selectors
export const getTables = state => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const GET_TABLES = createActionName('GET_TABLES')
const UPDATE_TABLE = createActionName('UPDATE_TABLE')

export const updateTables = payload => ({ type: GET_TABLES, payload })
export const updateTable = payload => ({ type: UPDATE_TABLE, payload })

export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => {
                dispatch(updateTables(tables))
            })
    }
}

export const updateTableRequest = (table) => {
    return async (dispatch) => {


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 5,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        const options1 = {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 5,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(table)
            }
            const response = await fetch('https://waiter-app-server-302bded180f5.herokuapp.com/api/tables/' + table.id, options)
            // const response = await fetch('https://jsonplaceholder.typicode.com/posts', options1)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            dispatch(updateTable(data))

        } catch (error) {
            console.log(error)
        }
    }
}

// action creators
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLE:
            return statePart.map(item =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );
        case GET_TABLES:
            return [...action.payload]
        default:
            return statePart;
    };
};
export default tablesReducer;
