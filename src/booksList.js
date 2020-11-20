export const BooksLists = (props) => {
    const {image,title,author,category} = props
    return( 
             <article className="app__books">
                <div className="books__image">
                    <img src={image}  alt={title}/>
                </div>
                <div className="books_heading">
                    <h4>{title}</h4>
                </div>
                <div className="books__author">
                    <h6>{author}</h6>
                </div>
                <div className="books__category">
                    <p>{category}</p>
                </div>
                <div className="books__button">
                    <button className="button" onClick={ () => checkEvent(author) }>Just Checking</button>
                </div>
                {/* <div className="books_ratings"></div> */}
            </article>
    )
}
const checkEvent = (author) => {
    console.log( author );
}