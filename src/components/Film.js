
const Film = ({name, url}) => {
    return (
        <>
        <ul>
        <li><h2><a href={url}>{name}</a></h2></li>
        </ul>
        </>
    )
}

export default Film;