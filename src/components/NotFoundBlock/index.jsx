import './NotFoundBlock.scss'

function NotFoundBlock (){

      
    return (
        <>
            <div className="notfound">
                <span className="notfound__smile">😕</span>
                <br />
                <h1>
                    Ничего не найдено 
                </h1>
                <span>К сожалению данная страница отсутствует в нашем интернет магазине</span>
            </div>
        </>
    )
}

  export default NotFoundBlock;