export default function Card(item,index){
    console.log(index)
    const it=item.item
    return(
        
        <div className="card" key={index}>
              <p className="num-text">{it.id}</p>
              <div>
                <p className="title">{it.name}</p>
                <p className="description">
                {it.size}{it.unit}
                </p>
              </div>
            </div>
    )
}