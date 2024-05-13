/* eslint-disable react/prop-types */
const Header = (props) => {
    const tasks = props.tasks;
    return (
        <div className="bg-red-900 rounded-full h-36 w-36 flex items-center justify-center mx-auto mb-9 mt-5 border">
        <h1 className="text-7xl font-bold">{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
        </div>
    )
}

export default Header