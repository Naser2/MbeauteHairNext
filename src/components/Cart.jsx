import CartSVG from '../assets/images/basket-icon-bold.svg'


const Cart =({addItemCount}) =>{
    return (
        <div onClick={addItemCount}
        htmlFor="mobile-navigation"
        className="menu-togglee ring-1 rounded-full ring-black h-8 w-8 mt-4"
        id="menu-togglee">
         <a className=" empty" href="/cart" title="Commander">
             <span class="header-link-icon pb-8 justify-center flex">
             {/* <CartSVG/> */}
          <svg width="21" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="justify-center pt-2">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07602 6C7.45086 3.59883 9.15419 2 10.9998 2C12.8453 2 14.5487 3.59883 14.9235 6H7.07602ZM5.06076 6C5.46053 2.73932 7.78975 0 10.9998 0C14.2098 0 16.539 2.73932 16.9388 6H19.8469C21.064 6 21.999 7.07797 21.8268 8.28284L20.1126 20.2828C19.9718 21.2681 19.128 22 18.1327 22H3.86725C2.87195 22 2.02811 21.2681 1.88735 20.2828L0.173065 8.28284C0.000941053 7.07798 0.935863 6 2.15296 6H5.06076ZM2.15296 8H19.8469L18.1327 20H3.86725L2.15296 8Z" fill="#595959"/>
            </svg>

              <span class="header-link-quantity-wrap">
             <span class="header-link-quantity">    
            </span>
          </span>
         </span>
        </a>
        </div>)

}
export default Cart