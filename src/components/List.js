
const List = ({items, setItems, deleteItem}) => {
  return (
    <>
    {/* Only render the list when there is an item otherwise leave*/}
        {items.length !==0 && <article>
          <ul className="bg-gray-700 mx-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
            {items.map(({id, title}) => (
              <ul className="flex items-center justify-between px-5 border-b border-gray-600">
              <li key={id} className="task-tracker text-white py-3 tracking-wider">{title}</li>
              {/*Delete Button*/}
              <button className="text-xl text-red-400" onClick={() => deleteItem(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

              </button>
            </ul>
            ))}
            <ul className="flex items-center  justify-between px-5 py-3">
              <li>
                <p className="text-sm text-gray-400">{items.length} items left</p>
              </li>
              <li><button className="text-sm text-gray-400" onClick={() => setItems([])}>Clear List</button></li>
            </ul>
          </ul>
        </article>}
    </>
  )
}

export default List