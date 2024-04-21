
import { classNames } from "@/utils"


const email = <svg  width="16"  height="12"  viewBox="0 0 16 12"  xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 0H1.5C0.671562 0 0 0.671562 0 1.5V10.5C0 11.3284 0.671562 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671562 15.3284 0 14.5 0ZM14.5 1.5V2.77516C13.7993 3.34575 12.6823 4.233 10.2942 6.10297C9.76787 6.51694 8.72538 7.51147 8 7.49988C7.27475 7.51159 6.23191 6.51678 5.70584 6.10297C3.31813 4.23328 2.20078 3.34584 1.5 2.77516V1.5H14.5ZM1.5 10.5V4.69994C2.21606 5.27028 3.23153 6.07063 4.77931 7.28263C5.46234 7.82028 6.6585 9.00719 8 8.99997C9.33491 9.00719 10.5159 7.8375 11.2204 7.28288C12.7682 6.07091 13.7839 5.27034 14.5 4.69997V10.5H1.5Z"></path>
</svg>

const gmailIcon = <svg
        width="16"
        height="16"
        viewBox="0 0 18 19"
        xmlns="http://www.w3.org/2000/svg" >
        <path
          d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
          fill="#3E82F1"
        ></path>
        <path
          d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
          fill="#32A753">
      </path>
      <path
      d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
      fill="#F9BB00"
      ></path>
      <path
      d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
      fill="#E74133"></path>
      </svg>


const facebookIcon = <svg
width="16"
height="16"
viewBox="0 0 12 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M3.492 19.854v-8.622H.25V7.806h3.242V5.107c0-2.933 2.012-4.529 4.95-4.529 1.408 0 2.617.094 2.967.136v3.064H9.372c-1.598 0-1.906.678-1.906 1.668v2.36h3.605l-.494 3.426H7.466v8.622"
fill="#1877F2"
></path>
</svg>

const AppleIcon = <svg
width="16"
height="16"
viewBox="0 0 16 18"
xmlns="http://www.w3.org/2000/svg"
fill="currentFill"
>
<path d="M12.644 9.51c-.008-1.474.66-2.587 2.01-3.407-.756-1.08-1.897-1.675-3.404-1.792-1.426-.112-2.985.832-3.556.832-.602 0-1.985-.792-3.07-.792C2.384 4.388 0 6.14 0 9.703c0 1.053.193 2.14.579 3.263.514 1.474 2.37 5.09 4.307 5.03 1.012-.024 1.727-.72 3.045-.72 1.278 0 1.94.72 3.07.72 1.953-.028 3.632-3.315 4.122-4.793-2.62-1.234-2.479-3.616-2.479-3.693ZM10.37 2.913c1.097-1.302.997-2.487.964-2.913-.968.056-2.089.659-2.728 1.402-.703.796-1.117 1.78-1.028 2.89 1.048.08 2.005-.459 2.792-1.379Z"></path>
</svg>
// export const Icon = ({...children}) => {
//   return  <span
//             class="glAQDp5 provider-icon"
//             aria-hidden="true"
//             style={{ width: '20px', height: '20px' }}>
//               {children}
//           </span>
//   }




const tagMag = {
google:'google',
facebook:'facebook',
email: 'email',
post: 'sky',
put: 'amber',
update: 'amber',
delete: 'rose',
get: 'emerald',
update: 'amber',
write: 'sky',
deploy: 'sky',
edit: 'amber',
add: 'emerald',
post: 'sky',
put: 'amber',
comment: 'zinc',
rate: 'amber',
like: 'sky',
share: 'sky',
}

const iconSizes ={
small: "10px",
medium: "20px",
large: "30px",

}


const boutiqueIcon  = 
<span className="StylableButton2545352419__icon wixui-button__icon"
               aria-hidden="true"  data-testid="stylablebutton-icon" >
         <div>
         <svg
             data-bbox="0.953 0.702 20.401 18"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 22 19"
             height={19}
             width={22}
             data-type="color"
         >
             <g>
     <path
         fill="#ffffff"
         d="M2.597.702h17.171a.6.6 0 0 1 .593.509l.992 5.491a2.939 2.939 0 0 1-2.4 2.944v6.656a2.4 2.4 0 0 1-2.4 2.4h-10.8a2.4 2.4 0 0 1-2.4-2.4v-6.66a2.988 2.988 0 0 1-2.4-2.94c0-.056 1.066-5.56 1.066-5.56a.6.6 0 0 1 .578-.44Zm.018 7.338a1.624 1.624 0 0 0 1.338.462c1.306 0 2.4-1.8 2.4-1.8a2.46 2.46 0 0 0 2.393 1.8 2.495 2.495 0 0 0 2.407-1.8 2.928 2.928 0 0 0 2.4 1.8 2.928 2.928 0 0 0 2.4-1.8s1.2 1.8 2.4 1.8a1.678 1.678 0 0 0 1.8-1.8l-.9-4.8h-16.2l-.9 4.8c-.06.493.11.987.462 1.338Zm12.738 7.062h-8.4v-5.93a3.431 3.431 0 0 1-.6-.67 3.038 3.038 0 0 1-1.8 1.139v6.661a1.2 1.2 0 0 0 1.2 1.2h10.8a1.2 1.2 0 0 0 1.2-1.2v-6.67a3.158 3.158 0 0 1-1.8-1.13c-.167.253-.368.48-.6.676v5.924Zm-4.2-6.6a2.777 2.777 0 0 1-3 1.08v4.32h6v-4.32a2.769 2.769 0 0 1-3-1.08Z"
         clipRule="evenodd"
         fillRule="evenodd"
         data-color={1}
     />
   </g>
</svg>
</div>
</span> 


const portfolio =   <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>

<svg
data-bbox="0.195 0.695 20.575 18.003"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 21 19"
height={19}
width={21}
data-type="color"
>
<g>
<path
fill="#ffffff"
d="M14.34 10.982a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M5.339 4.552V3.266A2.572 2.572 0 0 1 7.911.695h5.144a2.572 2.572 0 0 1 2.571 2.571v1.286h3.858c.71 0 1.286.576 1.286 1.286v11.574c0 .71-.576 1.286-1.286 1.286H1.481c-.71 0-1.286-.576-1.286-1.286V5.838c0-.71.576-1.286 1.286-1.286H5.34Zm2.572-2.571c-.71 0-1.286.575-1.286 1.285v1.286h7.716V3.266c0-.71-.576-1.286-1.286-1.286H7.91ZM1.48 5.838v9.259l4.455-5.569A.9.9 0 0 1 7.3 9.48l7.322 7.932h4.862V5.838H1.481Zm0 11.574h11.39l-6.211-6.73-5.179 6.473v.257Z"
data-color={1}
/>
</g>
</svg>
</div>
</span>

const blog =  <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="0.285 0.819 11.911 17.736"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 13 19"
height={19}
width={13}
data-type="ugc"
>
<g>
<path
strokeWidth=".24"
stroke="#ffffff"
fill="#ffffff"
d="m11.226 9.776-3.998 7.6a.457.457 0 0 1-.404.245h-.125v-6.133a1.86 1.86 0 0 0 1.374-1.8c0-1.03-.821-1.868-1.832-1.868-1.01 0-1.833.838-1.833 1.867 0 .867.586 1.592 1.375 1.8v6.134h-.126a.455.455 0 0 1-.404-.245l-3.998-7.6a.475.475 0 0 1-.014-.414l2.152-4.809h5.695l2.151 4.81a.473.473 0 0 1-.013.413Zm-4.985.845a.925.925 0 0 1-.916-.934c0-.514.41-.933.916-.933.505 0 .916.419.916.933a.926.926 0 0 1-.916.934ZM2.117 3.385v-1.4c0-.128.103-.233.23-.233h7.788c.126 0 .23.105.23.233v1.4a.232.232 0 0 1-.23.234H2.347a.231.231 0 0 1-.23-.234Zm9.956 5.59-1.977-4.423h.04c.63 0 1.145-.522 1.145-1.167v-1.4c0-.643-.514-1.166-1.146-1.166H2.347A1.159 1.159 0 0 0 1.2 1.986v1.4c0 .645.513 1.167 1.146 1.167h.039L.409 8.975c-.178.394-.163.859.038 1.242l3.999 7.6c.239.456.704.738 1.211.738h1.167a1.37 1.37 0 0 0 1.212-.739l3.998-7.599a1.43 1.43 0 0 0 .04-1.241Z"
clipRule="evenodd"
fillRule="evenodd"
/>
</g>
</svg>
</div>
</span>

const consultant =  <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="0.862 0.212 20.547 17.977"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 22 19"
height={19}
width={22}
data-type="color"
>
<g>
<path
fill="#ffffff"
d="M6 4.064V2.78A2.568 2.568 0 0 1 8.568.212h5.136a2.568 2.568 0 0 1 2.568 2.568v1.284h3.853c.709 0 1.284.575 1.284 1.284v11.557c0 .71-.575 1.284-1.284 1.284H2.146a1.284 1.284 0 0 1-1.284-1.284V5.348c0-.709.575-1.284 1.284-1.284H6Zm1.284 0h7.704V2.78c0-.71-.575-1.284-1.284-1.284H8.568c-.71 0-1.284.575-1.284 1.284v1.284Zm12.84 1.284H2.148V9.2H6V7.916h1.284V9.2h7.704V7.916h1.284V9.2h3.853V5.348ZM2.148 10.485v6.42h17.978v-6.42h-3.853v1.284h-1.284v-1.284H7.284v1.284H6v-1.284H2.147Z"
clipRule="evenodd"
fillRule="evenodd"
data-color={1}
/>
</g>
</svg>
</div>
</span>

const closeIcon =  <svg className="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z" fill="black"></path>
<path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z" fill="black"></path>
</svg>
const service = <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="4.281 4 16 16"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 25 24"
height={24}
width={25}
data-type="color"
>
<g>
<path
fill="#ffffff"
d="M15.281 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M11.281 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M9.281 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M14.281 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M12.281 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
data-color={1}
/>
<path
fill="#ffffff"
d="M19.281 5h-2V4h-1v1h-8V4h-1v1h-2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-2 1h2v3h-14V6h2v1h1V6h8v1h1V6Zm-12 4h14v9h-14v-9Z"
data-color={1}
/>
</g>
</svg>
</div>
</span>



const restaurant =     <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="0.07 0.3 13.133 17.909"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 14 19"
height={19}
width={14}
data-type="color"
>
<g>
<path
fill="#ffffff"
d="M4.846 3.882V.3H6.04v7.164c0 .659-.535 1.194-1.194 1.194v8.357c0 .66-.535 1.194-1.194 1.194H2.458c-.66 0-1.194-.535-1.194-1.194V8.658C.604 8.658.07 8.123.07 7.464V.3h1.194v3.582h1.194V.3h1.194v3.582h1.194Zm0 1.194H1.264v2.388h1.194v9.55h1.194v-9.55h1.194V5.076Zm4.775 7.172c-.02-.717-.175-1.181-.426-1.417-.522-.49-.767-1.227-.767-2.173v-5.97A2.388 2.388 0 0 1 10.815.3h1.194c.66 0 1.194.535 1.194 1.194v15.52c0 .66-.534 1.195-1.194 1.195h-1.194a1.195 1.195 0 0 1-1.194-1.194v-4.768Zm1.194 4.767h1.194V1.495h-1.194c-.659 0-1.194.534-1.194 1.193v5.97c0 .645.142 1.068.392 1.303.521.49.775 1.277.802 2.287v4.767Z"
data-color={1}
/>
</g>
</svg>
</div>
</span>

const event =  <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="1 0.603 18.308 18.11"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
height={20}
width={20}
data-type="ugc"
>
<g>
<path
fill="#ffffff"
d="m17.852 5.934-.152.042a2.914 2.914 0 0 1-3.554-3.703l.049-.15-1.456-1.52L1 11.866l1.456 1.517.152-.042a2.914 2.914 0 0 1 3.554 3.704l-.049.15 1.456 1.518L19.308 7.452l-1.456-1.518Zm-11.14 11.12a3.444 3.444 0 0 0-4.09-4.263l-.871-.91 7.394-7.094.955.995.383-.367-.955-.995 3.195-3.066.873.91a3.444 3.444 0 0 0 4.09 4.263l.872.91-3.195 3.065-.954-.995-.383.367.954.995-7.394 7.094-.873-.91Z"
/>
<path
fill="#ffffff"
d="m11.778 6.805-.383.367 1.224 1.275.383-.367-1.224-1.275Z"
/>
<path
strokeWidth=".589"
stroke="#ffffff"
d="m17.852 5.934-.152.042a2.914 2.914 0 0 1-3.554-3.703l.049-.15-1.456-1.52L1 11.866l1.456 1.517.152-.042a2.914 2.914 0 0 1 3.554 3.704l-.049.15 1.456 1.518L19.308 7.452l-1.456-1.518Zm-11.14 11.12a3.444 3.444 0 0 0-4.09-4.263l-.871-.91 7.394-7.094.955.995.383-.367-.955-.995 3.195-3.066.873.91a3.444 3.444 0 0 0 4.09 4.263l.872.91-3.195 3.065-.954-.995-.383.367.954.995-7.394 7.094-.873-.91Z"
fill="none"
/>
<path
strokeWidth=".589"
stroke="#ffffff"
d="m11.778 6.805-.383.367 1.224 1.275.383-.367-1.224-1.275Z"
fill="none"
/>
</g>
</svg>
</div>
</span>

const other = <span
className="StylableButton2545352419__icon wixui-button__icon"
aria-hidden="true"
data-testid="stylablebutton-icon"
>
<div>
{/*?xml version="1.0" encoding="UTF-8"?*/}
<svg
data-bbox="0.883 0.359 15.508 3.877"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 17 5"
height={5}
width={17}
data-type="color"
>
<g>
<path
fill="#ffffff"
d="M2.821.359a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm5.816 0a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm5.815 0a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm-11.63.97a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Zm5.815 0a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Zm5.815 0a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Z"
data-color={1}
/>
</g>
</svg>
</div>
</span>


const suitcase = <span class="StylableButton2545352419__icon wixui-button__icon" aria-hidden="true" data-testid="stylablebutton-icon"><div><svg data-bbox="0.862 0.212 20.547 17.977" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" height="19" width="22" data-type="color"><g><path fill="#ffffff" d="M6 4.064V2.78A2.568 2.568 0 0 1 8.568.212h5.136a2.568 2.568 0 0 1 2.568 2.568v1.284h3.853c.709 0 1.284.575 1.284 1.284v11.557c0 .71-.575 1.284-1.284 1.284H2.146a1.284 1.284 0 0 1-1.284-1.284V5.348c0-.709.575-1.284 1.284-1.284H6Zm1.284 0h7.704V2.78c0-.71-.575-1.284-1.284-1.284H8.568c-.71 0-1.284.575-1.284 1.284v1.284Zm12.84 1.284H2.148V9.2H6V7.916h1.284V9.2h7.704V7.916h1.284V9.2h3.853V5.348ZM2.148 10.485v6.42h17.978v-6.42h-3.853v1.284h-1.284v-1.284H7.284v1.284H6v-1.284H2.147Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path></g></svg></div></span>
const cartIcon  =
<svg
className="svg-inline basket-icon color-red"
xmlns="http://www.w3.org/2000/svg"
width={22}
height={18}
viewBox="0 0 22 18"
>
<path d="M0.7 5.5L4.4 17.2 18.2 17.2 21.3 5.5 0.7 5.5Z" />
<path d="M6.5 5.9C7 2.5 8.5 0.9 11.1 0.9 13.8 0.9 15.2 2.5 15.5 5.9" />
</svg>

const returns =  <svg
width={21}
height={20}
viewBox="0 0 21 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M20.3333 7.66663H7.66667C7.02467 7.66663 6.5 8.1913 6.5 8.8333V12.1666C6.5 12.8086 7.02467 13.3333 7.66667 13.3333H20.3333C20.9753 13.3333 21.5 12.8086 21.5 12.1666V8.8333C21.5 8.1913 20.9753 7.66663 20.3333 7.66663ZM2.16667 16.5C1.18133 16.5 0.375 17.3063 0.375 18.2916C0.375 19.2769 1.18133 20.0833 2.16667 20.0833H18.8333C19.8187 20.0833 20.625 19.2769 20.625 18.2916C20.625 17.3063 19.8187 16.5 18.8333 16.5H2.16667ZM13.8333 0.75H7.16667C6.52317 0.75 6 1.27317 6 1.91663V4.66663H14V1.91663C14 1.27317 13.4768 0.75 13.8333 0.75Z"
fill="#222B45"
/>
</svg>

const  defaultUserIcon =  <svg
className="svg-inline account-icon color-red"
xmlns="http://www.w3.org/2000/svg"
width={21}
height={22}
viewBox="0 0 21 22"
>
<path d="M9.9 10.5C6.2 10.5 2.8 12.7 1.4 16.2L0.7 18.1C0.6 18.4 0.5 18.7 0.5 19 0.5 20.4 1.6 21.5 3 21.5L18 21.5C18.3 21.5 18.6 21.4 18.9 21.3 20.2 20.8 20.8 19.3 20.3 18.1L19.6 16.2C18.2 12.7 14.8 10.5 11.1 10.5L9.9 10.5ZM10.2 0.5C8.3 0.5 6.7 2.1 6.7 4L6.7 4.4C6.7 6.3 8.3 7.9 10.2 7.9L10.7 7.9C12.6 7.9 14.2 6.3 14.2 4.4L14.2 4C14.2 2.1 12.6 0.5 10.7 0.5L10.2 0.5Z" />
</svg>


const  defaultUserIcon2 = <svg
width={17}
height={21}
viewBox="0 0 20 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
fillRule="evenodd"
clipRule="evenodd"
d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z"
fill="black"
/>
<path
fillRule="evenodd"
clipRule="evenodd"
d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
fill="black"
/>
</svg>



const offersIcon =  <svg
width={22}
height={21}
viewBox="0 0 22 21"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>    <path d="M0.375 0.75C0.375 0.336579 0.711579 0 1.125 0H20.875C21.2884 0 21.625 0.336579 21.625 0.75V8.25H20.125V1.5H1.875V8.25H0.375V0.75ZM0.375 9.75C0.375 9.33658 0.711579 9 1.125 9H3V18.75H0.375C0.336579 18.75 0.3125 18.7322 0.296572 18.7121C0.280644 18.6921 0.272949 18.6714 0.27511 18.6504L0.703583 10.9004C0.711595 10.8551 0.732838 10.8128 0.764618 10.7786C0.796398 10.7445 0.836203 10.7206 0.879024 10.7092C0.921845 10.6978 0.966204 10.6995 1.00773 10.7142C1.04926 10.7289 1.08673 10.7566 1.11658 10.7945C1.14642 10.8324 1.16769 10.8792 1.17757 10.9304L1.60411 18.6804C1.61213 18.7257 1.63281 18.768 1.66467 18.8021C1.69653 18.8362 1.73639 18.8601 1.77921 18.8715C1.82203 18.8829 1.8668 18.8819 1.90937 18.8685C1.95195 18.8551 1.99117 18.8297 2.02442 18.7944C2.05767 18.759 2.08378 18.7147 2.10011 18.6652C2.11644 18.6157 2.12249 18.5634 2.11856 18.5111L1.69158 10.7611H20.125V9.75H13.625V11.25H10.375V9.75H3.375V11.25H0.375V9.75ZM21.625 19.5H0.375C0.336579 19.5 0.3125 19.5178 0.296572 19.5379C0.280644 19.558 0.272949 19.5786 0.27511 19.5996L0.703583 27.3496C0.711595 27.3949 0.732838 27.4372 0.764618 27.4714C0.796398 27.5055 0.836203 27.5294 0.879024 27.5408C0.921845 27.5522 0.966204 27.5505 1.00773 27.5358C1.04926 27.5211 1.08673 27.4934 1.11658 27.4555C1.14642 27.4176 1.16769 27.3708 1.17757 27.3196L1.60411 19.5696C1.61213 19.5243 1.63281 19.482 1.66467 19.4479C1.69653 19.4138 1.73639 19.3899 1.77921 19.3785C1.82203 19.3671 1.8668 19.3681 1.90937 19.3815C1.95195 19.3949 1.99117 19.4203 2.02442 19.4556C2.05767 19.491 2.08378 19.5353 2.10011 19.5848C2.11644 19.6343 2.12249 19.6866 2.11856 19.7389L1.69158 27.4889C1.69158 27.6925 1.78864 27.8919 1.96212 28.0632C2.13561 28.2345 2.37599 28.3676 2.63225 28.4436C2.88852 28.5195 3.15021 28.5354 3.40945 28.4899C3.66868 28.4444 3.91653 28.3398 4.13508 28.1866C4.35363 28.0335 4.53717 27.8363 4.67206 27.6087C4.80695 27.3812 4.88867 27.1285 4.91158 26.8666L5.33856 19.1166H20.625L21.054 26.8666C21.077 27.1285 21.1587 27.3812 21.2936 27.6087C21.4285 27.8363 21.612 28.0335 21.8305 28.1866C22.049 28.3398 22.2968 28.4444 22.556 28.4899C22.8153 28.5354 23.077 28.5195 23.3333 28.4436C23.5896 28.3676 23.8301 28.2345 24.0036 28.0632C24.1771 27.8919 24.2742 27.6925 24.2742 27.4889L23.8472 19.7389C23.8432 19.6866 23.8493 19.6343 23.8657 19.5848C23.882 19.5353 23.9081 19.491 23.9413 19.4556C23.9745 19.4203 24.0137 19.3949 24.0563 19.3815C24.0988 19.3681 24.1436 19.3671 24.1864 19.3785C24.2292 19.3899 24.269 19.4138 24.3009 19.4479C24.3328 19.482 24.3535 19.5243 24.3615 19.5696L24.788 27.3196C24.7979 27.3708 24.8192 27.4176 24.849 27.4555C24.8789 27.4934 24.9164 27.5211 24.9579 27.5358C24.9994 27.5505 25.0438 27.5522 25.0866 27.5408C25.1294 27.5294 25.1692 27.5055 25.201 27.4714C25.2328 27.4372 25.254 27.3949 25.262 27.3496L25.6895 19.5996C25.6927 19.5786 25.6849 19.558 25.6691 19.5379C25.6532 19.5178 25.6291 19.5 25.5917 19.5H21.625Z" fill="#222B45" />
   </svg>

const trackOrderIcon =  <svg
   width={22}
   height={20}
   viewBox="0 0 22 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path
     d="M15.2097 19.25C15.2097 19.8491 15.7005 20.3333 16.3097 20.3333C16.9189 20.3333 17.4097 19.8491 17.4097 19.25H15.2097ZM15.2097 15.25C15.2097 15.8491 15.7005 16.3333 16.3097 16.3333C16.9189 16.3333 17.4097 15.8491 17.4097 15.25H15.2097ZM5.20972 3.25V1.91667C5.20972 1.27367 5.73439 0.75 6.37639 0.75H19.0431C19.6851 0.75 20.2097 1.27367 20.2097 1.91667V3.25H21.7097V1.91667C21.7097 0.86075 20.849 0 19.7931 0H6.37639C5.32047 0 4.45972 0.86075 4.45972 1.91667V3.25H5.20972ZM1.66699 7.91667C1.66699 6.30117 2.96899 4.99917 4.58449 4.99917C5.31557 4.99917 6.00165 5.34974 6.48917 5.91767C6.97669 5.34974 7.66277 4.99917 8.39385 4.99917C10.0094 4.99917 11.3114 6.30117 11.3114 7.91667C11.3114 8.93717 10.8838 9.86025 10.1242 10.4134L5.20972 15.8333V19.25H1.66699V7.91667ZM10.1669 7.91667C10.1669 6.86525 9.31881 5.99917 8.24515 5.99917C7.17149 5.99917 6.3234 6.86525 6.3234 7.91667C6.3234 8.96809 7.17149 9.83333 8.24515 9.83333C9.31881 9.83333 10.1669 8.96809 10.1669 7.91667ZM17.5997 15.25C17.5997 16.3014 18.4478 17.1667 19.5215 17.1667C20.5951 17.1667 21.4432 16.3014 21.4432 15.25C21.4432 14.1986 20.5951 13.3333 19.5215 13.3333C18.4478 13.3333 17.5997 14.1986 17.5997 15.25Z"
     fill="#222B45"
   />
 </svg>

 const helpIcon =  <svg
 xmlns="http://www.w3.org/2000/svg"
 width="19"
 height="19"
 viewBox="0 0 19 19"
>
 <path d="M9.5 19C4.3 19 0 14.7 0 9.5 0 4.3 4.3 0 9.5 0 14.7 0 19 4.3 19 9.5 19 14.7 14.7 19 9.5 19ZM9.5 18C14.2 18 18 14.2 18 9.5 18 4.8 14.2 1 9.5 1 4.8 1 1 4.8 1 9.5 1 14.2 4.8 18 9.5 18ZM9 12L10.1 12C10.1 11.2 10.3 10.5 10.8 10 11.7 9.2 12.2 8.7 12.2 7.8 12.2 6.2 11 5.1 9.5 5.1 8.6 5.1 7.7 5.5 7.2 6.2 6.8 6.7 6.6 7.2 6.6 8L7.7 8C7.7 7.5 7.8 7.3 7.9 7.1 8.2 6.7 8.9 6.2 9.5 6.2 10.3 6.2 11 6.9 11 7.8 11 8.2 10.8 8.5 10.2 9.1 9.6 9.7 9.4 10 9.4 10.3L9.3 10C9 10.1 9 10.2 9 10.3 9 10.6 9 11 9.5 11 9.8 11 10 11 10 11L11 11C11 11 11 11 11 11.1 11 11.3 11 11.4 10.9 11.5 10.7 11.7 10.5 11.9 10.2 12 10 12 9.7 12 9.5 12 9ZM8.5 15.4C8.5 15.7 8.3 15.9 8 15.9 7.7 15.9 7.5 15.7 7.5 15.4 7.5 15.1 7.7 14.9 8 14.9 8.3 14.9 8.5 15.1 8.5 15.4Z" />
</svg>

const communicationIcon =  <svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="16"
viewBox="0 0 24 16"
>
<path d="M2 1A1 1 0 0 0 1 2v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.783 7.374l-.57.822-9.476-6.57.57-.822 9.476 6.57zm7.53-6.575l.61.792-8.581 6.61-.61-.792 8.581-6.61z" />
</svg>

const bookAppointmentIcon =  <svg
xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 20 20"
>
<path d="M14 3L16 5H4L6 3H4L3 2V18H17V2L16 3H14ZM14 14V16H12V14H10V16H8V14H6V12H14V14ZM14 10V12H6V10H14ZM8 7V9H6V7H8Z" />
</svg>

const fidelityIcon =  <svg
xmlns="http://www.w3.org/2000/svg"
width="19"
height="14"
viewBox="0 0 19 14"
>
<path d="M16.4 14L3.1 14C1.5 14 0 12.7 0 11.2L0 2.6C0 1.2 1.5 0 3.1 0L16.4 0C17.9 0 19 1.2 19 2.6L19 11.2C19 12.7 17.9 14 16.4 14ZM16.4 13C17.3 13 18 12.3 18 11.4L18 2.6C18 1.7 17.3 1 16.4 1L2.8 1C1.9 1 1 1.7 1 2.6L1 11.4C1 12.3 1.9 13 2.8 13L16.4 13ZM9.2 7C8.9 6.1 8.8 4.7 11 3C10.4 3.7 10 4.7 10.9 7C11.5 8.7 10 10.3 9 11C9.4 10.5 10.1 9.6 9.2 7Z" />
</svg>

const settingsIcon = <svg
className="filter-icon color-red"
xmlns="http://www.w3.org/2000/svg"
width={20}
height={20}
>
<path
fill="#000"
d="M18.4 11.9l-.7-.5-.1-.2V8.8l.1-.2.7-.5c.7-.5.9-1.3.4-2l-1.3-2.2c-.4-.7-1.2-.9-1.9-.6a3 3 0 0 0-.8.4h-.2c-.6-.5-1.3-.9-2-1.2a.2.2 0 0 1-.2-.2l-.1-.9C12.2.6 11.6 0 10.8 0H8.1c-.7 0-1.2.5-1.4 1.2l-.1 1-.1.2c-.7.3-1.4.7-2 1.2-.1.1-.2.1-.2 0l-.9-.3-.5-.2c-.7 0-1.1.3-1.4.7L.2 6.1c-.4.7-.2 1.5.4 2l.7.5.1.2v2.4l-.1.2-.6.4c-.7.5-.9 1.3-.5 2L1.5 16c.4.7 1.2 1 1.9.6l.7-.3h.3c.6.5 1.3.9 2 1.2l.2.2.1.9c.1.7.7 1.3 1.4 1.3h2.7c.7 0 1.3-.5 1.4-1.2l.1-1 .1-.2c.7-.3 1.4-.7 2-1.2.1-.1.1-.1.2 0l.9.4c.7.3 1.4 0 1.8-.6l1.3-2.3c.6-.7.4-1.5-.2-1.9zm-.5 1.5l-1.2 2.2c-.2.4-.4.4-.8.3l-1.3-.6h-.2a7 7 0 0 1-2.8 1.6l-.1.2-.1 1.2v.3c0 .3-.2.4-.5.4H8.1c-.3 0-.5-.2-.5-.5L7.5 17c0-.1 0-.2-.2-.2-1-.3-1.9-.9-2.7-1.6h-.3l-1.3.6c-.3.1-.6.1-.7-.2L1 13.4c-.2-.3-.1-.5.2-.7l1.2-.8.1-.2a8.6 8.6 0 0 1 0-3.2l-.1-.2-1.2-1c-.3-.2-.3-.4-.1-.7l1.3-2.2c.1-.3.4-.4.7-.3l1.4.6.7-.5c.7-.5 1.4-.9 2.2-1.1l.2-.2.1-1.4c0-.3.2-.5.5-.5h2.6c.3 0 .5.2.5.5l.1 1.5.2.2c1 .3 1.9.9 2.7 1.6h.3l1.3-.6c.3-.1.6-.1.7.2l1.3 2.3c.2.3.1.5-.2.7l-1.2.8-.1.2c.2 1.1.2 2.1 0 3.2l.1.2 1.2.8c.3.2.4.5.2.8zM9.5 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c.1-2.2-1.8-4-4-4zm0 7.1A3.1 3.1 0 0 1 6.4 10c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"
/>
</svg>
const addIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path></svg>



export const bellIcon =  <div
className="header-item header-layer header-item-minicart"
id="header-item-minicart"
>
<div className="header-link-wrapper">
  <input id="cart-quantity" type="hidden" defaultValue={0.0} />
  <a
    className="header-link empty"
    href="https://www.sephora.fr/panier/"
    title="Commander"
  >
    <span className="header-link-icon">
      <img
        className="basket-icon"
        src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwf63e629f/images/svg-icons/basket-icon-bold.svg"
      />
      <span className="header-link-quantity-wrap">
        <span className="header-link-quantity"></span>
      </span>
    </span>
  </a>
  <div className="arrow" />
</div>
<div className="mini-cart-notification" data-show-time={3.0}>
  <div className="header">
    <div className="icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={26}
        className="svg-inline check-icon"
      >
        <path
          fill="#6dcf63"
          d="M3.9 15.5c-.1-.1-.1 0-.1 0zm-.5.1c-.1 0-.1 0 0 0zm.4 0l.3.2-.3-.3zm.4 1l.1.2.2.2v-.3l-.3-.2zm.1.4v.1zm.5.3l-.1-.2v-.2l-.1.3.2.1zm-.1.1a.4.4 0 0 0-.1-.1V17.4zm.2.3l-.1-.2a.2.2 0 0 0 0 .1v.1zm0 0v.1zm.4.1v.1c-.1 0-.2-.1-.1-.2 0-.1 0-.2-.2-.3l.1.5.3.4c0-.1.1-.3 0-.4h-.1zm0 .7zm-2.2.7zm2.7-.1h-.1zm.2-.4h-.2a.7.7 0 0 1 0-.2h-.2v-.2-.2c-.1.3 0 .5.1.7.2.1.3.3.3.5h.2a.9.9 0 0 1-.2-.6zm.5.9c-.1 0-.1 0 0 0zm.7 1c.1 0 .1 0 0 0zm-3 1.5h.1zm.5 1.7s0 .1.1 0zm8.5-5.1c0-.1 0-.1 0 0-.1 0 0 0 0 0zm0 .1H13zm-4.3 5.7l-1-3.4a74.6 74.6 0 0 0 1 3.4zm3.9-5v0zm-.8.7l-.1.1v-.1zm.4.5v-.1zm-.2.3l-.1-.1v.1s.1 0 0 0zm-.2.3c-.1 0-.1 0 0 0 0 .1 0 0 0 0zm-.1.3v-.2l-.1-.1-.1.1v.1h.1v.1zm-.2.3zm-.4.3V22l.1.1zm0 .1zm.2 0v.1zm-.2 0v.1zm0 .2zm0 0zm0 .1zm-.4.1zm.1.4V23h.1v.1zm-.4 0l-.1-.1v.1s0 .1 0 0zm.2.3v-.1h.1v.1zm-.5.2c.2 0 .2 0 .1-.2l-.1.2zm-.2 0v.1h.1v-.1-.2a.8.8 0 0 1 .2-.2v-.1-.2c0-.1 0-.2.2-.3l.1.1a.5.5 0 0 1 0 .1l-.2.1h.2l.1-.2v-.2h-.1c-.1 0 0 0 0-.2l.2-.2v-.2a.6.6 0 0 0-.3.4.4.4 0 0 1-.3.3l-.2.2a.8.8 0 0 0 0 .3h-.2a.2.2 0 0 1-.2.1v.2l.1.2v-.2c.2 0 .3 0 .2.1 0 .1 0 0 0 0s.1 0 0 .1zm-.3.4zm.7-.2v.1zm-.5.2zm-.3 0v.1zm0 0zm0 .3v-.1zm-1.1.4h-.1.2c0-.1-.1 0-.1 0zm1.4-.2zm-1.3.3c-.1 0-.1 0 0 0zm.3 0zm.7 0v-.1h.1v.1zm-1 .2h-.2zm1-.1zm-4.1.6zM9 25zm-.2 0l.1.1zm.6.1zm-1.6.3v.1zm1.4 0v-.1h.1zm-2 .2zm1.7 0v-.2H9v.1zm-.2.2c0-.1 0-.1.1 0zm1-8.5l.2-.2V17v-.1a.4.4 0 0 0 .2-.5c0-.1 0-.3.2-.3 0-.2 0-.4.2-.4v-.5l.3-.4v-.2l.1-.3.1-.4c.2-.1.2-.3.2-.5a.9.9 0 0 0 .2-.6c0-.2.1-.4.3-.5 0-.3 0-.5.2-.7l.3-.6a83.4 83.4 0 0 1 2-6.3h.2c0-.4 0-.7.3-1v-.4c.2-.1.2-.3.2-.5l.2-.1-.1-.1.4-1.2c0-.3.2-.7.5-1l-.2-.1c0-.2 0-.3.3-.2l.4-.1c.1.2.3.2.5 0l1 .2 1.3.2v.1l-.1.2.4.2h.2c.2 0 .3.2.3.2-.1 0-.2 0-.2.2a.3.3 0 0 1-.1.1v.3h.1l.1-.1-.1.3a.8.8 0 0 1-.2.3v.2h-.1L19 3.5l-.5 1.3-2.3 6.2-.2.6v.4h-.1v.1h-.2l-.2.7-.3.6a28 28 0 0 1-.8 2.3 37 37 0 0 0-.8 2.2h-.1v.2l-.2.3v-.1V18.6a.4.4 0 0 0 0 .3H13v.4l-.2.4h-.2v.3a.9.9 0 0 1-.2.4v-.1c0 .1 0 .2-.2.3v.3l-.2.5-.1.3h-.1v.1c-.1 0-.1 0 0-.1l-.2-.1v.2c-.1 0-.1.1 0 .2h-.2v.1-.5a.7.7 0 0 0-.4.3l-.4.5.1.1.2.1v-.2l.2-.2a.3.3 0 0 0 0 .2v.2h.1a.8.8 0 0 0 0 .2l-.1.2h-.3c-.2.2-.2.4 0 .5h-.2-.1l-.3.3V24H10a.4.4 0 0 0-.1.3c-.1 0-.1 0 0 0l-.1-.2a.4.4 0 0 0 0 .2v.1h-.3v.3a1 1 0 0 1-.6.4l-.6.3a.4.4 0 0 1-.1 0l-.2.2h.3a.4.4 0 0 1 .2-.2c0 .1 0 .1 0 0H9a3 3 0 0 1-.5.3l-.5.1-.2-.1a.3.3 0 0 1-.2 0H7l-.2.1h-.1l-.3-.1h-.1l-.2.2H6h-.2v-.1h-.1c0-.1 0-.1-.1 0h-.2a.4.4 0 0 1-.2-.2H5h-.2a.3.3 0 0 1-.1-.2v-.3c-.1 0-.2-.1-.2-.3-.1 0-.2-.1-.2-.3a.9.9 0 0 0-.1-.5.7.7 0 0 1-.1-.4c0-.2 0-.3-.2-.4v-.1a16 16 0 0 1-.4-2.3c0-.5 1.2 3.9 1 3.4a5.8 5.8 0 0 1-.1-1.4 2 2 0 0 1-.1-.8h-.1l-.4-.6a1.8 1.8 0 0 1-.2-.6 1 1 0 0 1-.4-1v-.1l-.2-.3H3v-.1a1 1 0 0 1-.3-.2v-.1-.3a.1.1 0 0 0-.1 0h-.1v-.2a.4.4 0 0 1 0-.3c-.2 0-.3-.2-.3-.4 0-.1 0-.3-.3-.4V17.8c-.1 0-.1 0 0-.1a.6.6 0 0 1 0-.3 1.7 1.7 0 0 0-.2-.2l-.1-.3h-.1l-.7-.8c-.2-.3-.3-.6-.3-1l-.1-.3-.1-.1h.1c.1 0 0 .2.2.2l-.1-.2-.1-.2v-.2l-.2-.6A.9.9 0 0 0 0 13h.8c.3 0 .5 0 .8.2h-.4L1 13s-.1 0 0 .1l.3.2h.3c0 .1.1.2 0 .2.3 0 .4.2.5.3.1.2.3.3.5.3 0 .2.2.3.5.4 0 .2 0 .3.2.3.1 0 .2 0 .2.2s.1 0 .2 0v.2a2.2 2.2 0 0 1 .7 1l.4.5c0 .2.2.4.3.5v.2l.2.1v.2h.1l.2.5.3.3.3.5c.2.1.3.3.3.5l.3.4.3.3v.3l.5 1 .2-.5-.1-.7.2.6 1-2 .2-.4c0-.2 0-.3.2-.4l.2-.5c.1-.2.1-.3 0-.4zm-1.8 4.6l.5 1.4.2.8-.7-3-.2.5.2.3zm-.1-1.2a17 17 0 0 1-.2-.9l.2.9zm.3.3l.4-1-.5 1zm.8 3.5zM7.6 26h.2c0 .1 0 .1 0 0s0 0-.1 0zm.5 0h.2zm.3 0c.1 0 .1 0 0 0 0 0-.1 0 0 0zm.2 0z"
        />
      </svg>
    </div>
    <div className="message-wrapper">
      <div className="heading">C’est ajouté !</div>
    </div>
  </div>
  <div className="product" data-canaddmore="null"></div>
  <div className="actions">
    <a
      className="mini-cart-button"
      href="https://www.sephora.fr/panier/"
    >
      <button className="button button-revamp">
        Voir mon panier
      </button>
    </a>
    <button
      className="button mini-cart-button secondary-button-revamp"
      data-close=""
    >
      Continuer mon shopping
    </button>
  </div>
</div>
<div className="mini-cart-overlay" />
</div>
export const icons = {
  googleIcon: {
     small: '10px',
     medium: '20px',
     icon: gmailIcon,

   },
   facebookIcon: {
     small: '10px',
     medium:
       '20px',
      icon:  facebookIcon,
   },
   emailIcon: {
     small: '10px',
     medium: '20px',
       icon: email
   },
   appleIcon: {
    medium: '20px',
     small: '10px',
     icon: AppleIcon
   },
   zinc: {
     small: '10px',
     medium:
       'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
   },
   storeIcon:{
    small:'10px',
    medium:'20px',
      icon: boutiqueIcon

   },
   restaurantIcon:{
    small:'10px',
    medium:'20px',
      icon: restaurant

   },
   serviceIcon:{
    small:'10px',
    medium:'20px',
      icon: service

   },
   consultantIcon:{
    small:'10px',
    medium:'20px',
      icon: consultant

   },
   blogIcon:{
    small:'10px',
    medium:'20px',
      icon: blog

   },
   portfolioIcon:{
    small:'10px',
    medium:'20px',
      icon: portfolio

   },
   otherIcon:{
    small:'10px',
    medium:'20px',
      icon: other

   },
   eventIcon:{
    small:'10px',
    medium:'20px',
      icon: event

   },
   suitcaseIcon: {
    small:'10px',
    medium:'20px',
      icon: suitcase
 },
 cartIcon:{
  small:'10px',
  medium:'20px',
    icon: cartIcon
 },
 returnsIcon:{
  small:'10px',
  medium:'20px',
    icon: returns
 },
 defaultUserIcon:{
  small:'10px',
  medium:'20px',
    icon: defaultUserIcon
 },
 defaultUserIcon2:{
  small:'10px',
  medium:'20px',
    icon: defaultUserIcon
 },
 offersIcon:{
  small:'10px',
  medium:'20px',
    icon: offersIcon
 },
 trackOrderIcon:{
  small:'10px',
  medium:'20px',
    icon: trackOrderIcon
 },
 communicationIcon:{
  small:'10px',
  medium:'20px',
    icon: communicationIcon
 }, 
 helpIconn:{
  small:'10px',
  medium:'20px',
    icon: helpIcon
 },
 bookAppointmentIcon:{
  small:'10px',
  medium:'20px',
    icon: bookAppointmentIcon
 },
 fidelityIcon:{
  small:'10px',
  medium:'20px',
    icon: fidelityIcon
 },
  closeIcon:{
  small:'10px',
  medium:'20px',
    icon:  closeIcon
 },
 
 addIcon:{
  small:'10px',
  medium:'20px',
    icon:  addIcon
 },
 bellIcon:{
  small:'10px',
  medium:'20px',
    icon:  bellIcon
 },

}



// export const cartIcon = function(()) =>{
//   <div
//   className="header-item header-layer header-item-minicart"
//   id="header-item-minicart"
//   >
//   <div className="header-link-wrapper">
//     <input id="cart-quantity" type="hidden" defaultValue={0.0} />
//     <a
//       className="header-link empty"
//       href="https://www.sephora.fr/panier/"
//       title="Commander"
//     >
//       <span className="header-link-icon">
//         <img
//           className="basket-icon"
//           src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwf63e629f/images/svg-icons/basket-icon-bold.svg"
//         />
//         <span className="header-link-quantity-wrap">
//           <span className="header-link-quantity"></span>
//         </span>
//       </span>
//     </a>
//     <div className="arrow" />
//   </div>
//   <div className="mini-cart-notification" data-show-time={3.0}>
//     <div className="header">
//       <div className="icon-wrapper">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={20}
//           height={26}
//           className="svg-inline check-icon"
//         >
//           <path
//             fill="#6dcf63"
//             d="M3.9 15.5c-.1-.1-.1 0-.1 0zm-.5.1c-.1 0-.1 0 0 0zm.4 0l.3.2-.3-.3zm.4 1l.1.2.2.2v-.3l-.3-.2zm.1.4v.1zm.5.3l-.1-.2v-.2l-.1.3.2.1zm-.1.1a.4.4 0 0 0-.1-.1V17.4zm.2.3l-.1-.2a.2.2 0 0 0 0 .1v.1zm0 0v.1zm.4.1v.1c-.1 0-.2-.1-.1-.2 0-.1 0-.2-.2-.3l.1.5.3.4c0-.1.1-.3 0-.4h-.1zm0 .7zm-2.2.7zm2.7-.1h-.1zm.2-.4h-.2a.7.7 0 0 1 0-.2h-.2v-.2-.2c-.1.3 0 .5.1.7.2.1.3.3.3.5h.2a.9.9 0 0 1-.2-.6zm.5.9c-.1 0-.1 0 0 0zm.7 1c.1 0 .1 0 0 0zm-3 1.5h.1zm.5 1.7s0 .1.1 0zm8.5-5.1c0-.1 0-.1 0 0-.1 0 0 0 0 0zm0 .1H13zm-4.3 5.7l-1-3.4a74.6 74.6 0 0 0 1 3.4zm3.9-5v0zm-.8.7l-.1.1v-.1zm.4.5v-.1zm-.2.3l-.1-.1v.1s.1 0 0 0zm-.2.3c-.1 0-.1 0 0 0 0 .1 0 0 0 0zm-.1.3v-.2l-.1-.1-.1.1v.1h.1v.1zm-.2.3zm-.4.3V22l.1.1zm0 .1zm.2 0v.1zm-.2 0v.1zm0 .2zm0 0zm0 .1zm-.4.1zm.1.4V23h.1v.1zm-.4 0l-.1-.1v.1s0 .1 0 0zm.2.3v-.1h.1v.1zm-.5.2c.2 0 .2 0 .1-.2l-.1.2zm-.2 0v.1h.1v-.1-.2a.8.8 0 0 1 .2-.2v-.1-.2c0-.1 0-.2.2-.3l.1.1a.5.5 0 0 1 0 .1l-.2.1h.2l.1-.2v-.2h-.1c-.1 0 0 0 0-.2l.2-.2v-.2a.6.6 0 0 0-.3.4.4.4 0 0 1-.3.3l-.2.2a.8.8 0 0 0 0 .3h-.2a.2.2 0 0 1-.2.1v.2l.1.2v-.2c.2 0 .3 0 .2.1 0 .1 0 0 0 0s.1 0 0 .1zm-.3.4zm.7-.2v.1zm-.5.2zm-.3 0v.1zm0 0zm0 .3v-.1zm-1.1.4h-.1.2c0-.1-.1 0-.1 0zm1.4-.2zm-1.3.3c-.1 0-.1 0 0 0zm.3 0zm.7 0v-.1h.1v.1zm-1 .2h-.2zm1-.1zm-4.1.6zM9 25zm-.2 0l.1.1zm.6.1zm-1.6.3v.1zm1.4 0v-.1h.1zm-2 .2zm1.7 0v-.2H9v.1zm-.2.2c0-.1 0-.1.1 0zm1-8.5l.2-.2V17v-.1a.4.4 0 0 0 .2-.5c0-.1 0-.3.2-.3 0-.2 0-.4.2-.4v-.5l.3-.4v-.2l.1-.3.1-.4c.2-.1.2-.3.2-.5a.9.9 0 0 0 .2-.6c0-.2.1-.4.3-.5 0-.3 0-.5.2-.7l.3-.6a83.4 83.4 0 0 1 2-6.3h.2c0-.4 0-.7.3-1v-.4c.2-.1.2-.3.2-.5l.2-.1-.1-.1.4-1.2c0-.3.2-.7.5-1l-.2-.1c0-.2 0-.3.3-.2l.4-.1c.1.2.3.2.5 0l1 .2 1.3.2v.1l-.1.2.4.2h.2c.2 0 .3.2.3.2-.1 0-.2 0-.2.2a.3.3 0 0 1-.1.1v.3h.1l.1-.1-.1.3a.8.8 0 0 1-.2.3v.2h-.1L19 3.5l-.5 1.3-2.3 6.2-.2.6v.4h-.1v.1h-.2l-.2.7-.3.6a28 28 0 0 1-.8 2.3 37 37 0 0 0-.8 2.2h-.1v.2l-.2.3v-.1V18.6a.4.4 0 0 0 0 .3H13v.4l-.2.4h-.2v.3a.9.9 0 0 1-.2.4v-.1c0 .1 0 .2-.2.3v.3l-.2.5-.1.3h-.1v.1c-.1 0-.1 0 0-.1l-.2-.1v.2c-.1 0-.1.1 0 .2h-.2v.1-.5a.7.7 0 0 0-.4.3l-.4.5.1.1.2.1v-.2l.2-.2a.3.3 0 0 0 0 .2v.2h.1a.8.8 0 0 0 0 .2l-.1.2h-.3c-.2.2-.2.4 0 .5h-.2-.1l-.3.3V24H10a.4.4 0 0 0-.1.3c-.1 0-.1 0 0 0l-.1-.2a.4.4 0 0 0 0 .2v.1h-.3v.3a1 1 0 0 1-.6.4l-.6.3a.4.4 0 0 1-.1 0l-.2.2h.3a.4.4 0 0 1 .2-.2c0 .1 0 .1 0 0H9a3 3 0 0 1-.5.3l-.5.1-.2-.1a.3.3 0 0 1-.2 0H7l-.2.1h-.1l-.3-.1h-.1l-.2.2H6h-.2v-.1h-.1c0-.1 0-.1-.1 0h-.2a.4.4 0 0 1-.2-.2H5h-.2a.3.3 0 0 1-.1-.2v-.3c-.1 0-.2-.1-.2-.3-.1 0-.2-.1-.2-.3a.9.9 0 0 0-.1-.5.7.7 0 0 1-.1-.4c0-.2 0-.3-.2-.4v-.1a16 16 0 0 1-.4-2.3c0-.5 1.2 3.9 1 3.4a5.8 5.8 0 0 1-.1-1.4 2 2 0 0 1-.1-.8h-.1l-.4-.6a1.8 1.8 0 0 1-.2-.6 1 1 0 0 1-.4-1v-.1l-.2-.3H3v-.1a1 1 0 0 1-.3-.2v-.1-.3a.1.1 0 0 0-.1 0h-.1v-.2a.4.4 0 0 1 0-.3c-.2 0-.3-.2-.3-.4 0-.1 0-.3-.3-.4V17.8c-.1 0-.1 0 0-.1a.6.6 0 0 1 0-.3 1.7 1.7 0 0 0-.2-.2l-.1-.3h-.1l-.7-.8c-.2-.3-.3-.6-.3-1l-.1-.3-.1-.1h.1c.1 0 0 .2.2.2l-.1-.2-.1-.2v-.2l-.2-.6A.9.9 0 0 0 0 13h.8c.3 0 .5 0 .8.2h-.4L1 13s-.1 0 0 .1l.3.2h.3c0 .1.1.2 0 .2.3 0 .4.2.5.3.1.2.3.3.5.3 0 .2.2.3.5.4 0 .2 0 .3.2.3.1 0 .2 0 .2.2s.1 0 .2 0v.2a2.2 2.2 0 0 1 .7 1l.4.5c0 .2.2.4.3.5v.2l.2.1v.2h.1l.2.5.3.3.3.5c.2.1.3.3.3.5l.3.4.3.3v.3l.5 1 .2-.5-.1-.7.2.6 1-2 .2-.4c0-.2 0-.3.2-.4l.2-.5c.1-.2.1-.3 0-.4zm-1.8 4.6l.5 1.4.2.8-.7-3-.2.5.2.3zm-.1-1.2a17 17 0 0 1-.2-.9l.2.9zm.3.3l.4-1-.5 1zm.8 3.5zM7.6 26h.2c0 .1 0 .1 0 0s0 0-.1 0zm.5 0h.2zm.3 0c.1 0 .1 0 0 0 0 0-.1 0 0 0zm.2 0z"
//           />
//         </svg>
//       </div>
//       <div className="message-wrapper">
//         <div className="heading">C’est ajouté !</div>
//       </div>
//     </div>
//     <div className="product" data-canaddmore="null"></div>
//     <div className="actions">
//       <a
//         className="mini-cart-button"
//         href="https://www.sephora.fr/panier/"
//       >
//         <button className="button button-revamp">
//           Voir mon panier
//         </button>
//       </a>
//       <button
//         className="button mini-cart-button secondary-button-revamp"
//         data-close=""
//       >
//         Continuer mon shopping
//       </button>
//     </div>
//   </div>
//   <div className="mini-cart-overlay" />
//   </div>
    

// } 
  
  
  export default function Icon({children,  size,  bg, iconName, customClass}) {   

     let icon = icons[iconName]
    console.log("ICON-NAME", icons[iconName])
    console.log("ICON", icon)

    return (  <span className={classNames(customClass)}
        >
       {icon ? icon.icon  : 'no-icon'} 
    </span> 
  
    )
  }
  
  
  
      
  