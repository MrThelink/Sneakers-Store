function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40"> 
        <div className='d-flex align-center '>
           <img width={40} height={40} src='/img/logo.png' />
           <div>
               <h3 className="text-uppercase">Online Sneakers Store</h3>
               <p className="opacity-5">The best sneakers store</p>
           </div>
         </div>
             <ul className="d-flex">
               <li onClick={props.onClickCard} className="mr-30 cu-p">
                 <img width={18} height={18} src='/img/cart.svg' />
                 <span>84,55 €</span>
               </li>
               <li>
                 <img width={18} height={18} src='/img/user.svg' />
               </li>
             </ul>
         </header>
    );
}

export default Header;