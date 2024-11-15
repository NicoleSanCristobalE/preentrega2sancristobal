export default function ButtonComponent({texto,clase}){
    return(
        <button className={clase}>{texto}</button>
    );
}