export function BlogPost( {title, body} ){
    return(
        <div className="post">
        <h1 className="title">{title}</h1>
        <p>{body}</p>
        <img className="pic" src="gfp_sun_behind_clouds.jpeg"/>
        </div>
    )
}