function List(props) {

   const {list=[]}=props; //лист приравнивается к пустому массиву на случай если его нет
    return (
        <div>
            {list.map(el => <li>
                    {el.name} {" "}
                    <button onClick={()=>props.doneTodo(el.id)} type="button" className="btn btn-primary btn-sm"> Update</button>
                    {" "}
                    <button onClick={()=>props.deleteTodo(el.id)} type="button" className="btn btn-primary btn-sm"> Delete</button>
                    {" "}
                </li>
            )}
        </div>
    )
}

export default List