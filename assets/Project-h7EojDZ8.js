import{S as ao,j as n,v as I,w as M,l as $,x as l,a as c,y as b,r as f,m as R,_ as j,u as eo,O as K,E as x,h as P,V as ro,W as to,X as lo,J as _,K as N,M as no}from"./index-zNtkLeFm.js";const io=ao(n.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function so(o){return M("MuiChip",o)}const t=I("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),co=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],po=o=>{const{classes:a,disabled:e,size:r,color:i,iconColor:u,onDelete:d,clickable:s,variant:p}=o,m={root:["root",p,e&&"disabled",`size${l(r)}`,`color${l(i)}`,s&&"clickable",s&&`clickableColor${l(i)}`,d&&"deletable",d&&`deletableColor${l(i)}`,`${p}${l(i)}`],label:["label",`label${l(r)}`],avatar:["avatar",`avatar${l(r)}`,`avatarColor${l(i)}`],icon:["icon",`icon${l(r)}`,`iconColor${l(u)}`],deleteIcon:["deleteIcon",`deleteIcon${l(r)}`,`deleteIconColor${l(i)}`,`deleteIcon${l(p)}Color${l(i)}`]};return P(m,so,a)},uo=$("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o,{color:r,iconColor:i,clickable:u,onDelete:d,size:s,variant:p}=e;return[{[`& .${t.avatar}`]:a.avatar},{[`& .${t.avatar}`]:a[`avatar${l(s)}`]},{[`& .${t.avatar}`]:a[`avatarColor${l(r)}`]},{[`& .${t.icon}`]:a.icon},{[`& .${t.icon}`]:a[`icon${l(s)}`]},{[`& .${t.icon}`]:a[`iconColor${l(i)}`]},{[`& .${t.deleteIcon}`]:a.deleteIcon},{[`& .${t.deleteIcon}`]:a[`deleteIcon${l(s)}`]},{[`& .${t.deleteIcon}`]:a[`deleteIconColor${l(r)}`]},{[`& .${t.deleteIcon}`]:a[`deleteIcon${l(p)}Color${l(r)}`]},a.root,a[`size${l(s)}`],a[`color${l(r)}`],u&&a.clickable,u&&r!=="default"&&a[`clickableColor${l(r)})`],d&&a.deletable,d&&r!=="default"&&a[`deletableColor${l(r)}`],a[p],a[`${p}${l(r)}`]]}})(({theme:o,ownerState:a})=>{const e=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return c({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${t.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${t.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:e,fontSize:o.typography.pxToRem(12)},[`& .${t.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${t.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${t.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${t.icon}`]:c({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&c({color:o.vars?o.vars.palette.Chip.defaultIconColor:e},a.color!=="default"&&{color:"inherit"})),[`& .${t.deleteIcon}`]:c({WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:b(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:b(o.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:o.vars?`rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)`:b(o.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(o.vars||o).palette[a.color].main,color:(o.vars||o).palette[a.color].contrastText},a.onDelete&&{[`&.${t.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:b(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${t.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}})},({theme:o,ownerState:a})=>c({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:b(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${t.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:b(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${t.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}}),({theme:o,ownerState:a})=>c({},a.variant==="outlined"&&{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${t.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${t.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${t.avatar}`]:{marginLeft:4},[`& .${t.avatarSmall}`]:{marginLeft:2},[`& .${t.icon}`]:{marginLeft:4},[`& .${t.iconSmall}`]:{marginLeft:2},[`& .${t.deleteIcon}`]:{marginRight:5},[`& .${t.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(o.vars||o).palette[a.color].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:b(o.palette[a.color].main,.7)}`,[`&.${t.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette[a.color].main,o.palette.action.hoverOpacity)},[`&.${t.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})`:b(o.palette[a.color].main,o.palette.action.focusOpacity)},[`& .${t.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:b(o.palette[a.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].main}}})),go=$("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,a)=>{const{ownerState:e}=o,{size:r}=e;return[a.label,a[`label${l(r)}`]]}})(({ownerState:o})=>c({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},o.variant==="outlined"&&{paddingLeft:11,paddingRight:11},o.size==="small"&&{paddingLeft:8,paddingRight:8},o.size==="small"&&o.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function w(o){return o.key==="Backspace"||o.key==="Delete"}const fo=f.forwardRef(function(a,e){const r=R({props:a,name:"MuiChip"}),{avatar:i,className:u,clickable:d,color:s="default",component:p,deleteIcon:m,disabled:h=!1,icon:C,label:D,onClick:k,onDelete:v,onKeyDown:V,onKeyUp:T,size:H="medium",variant:G="filled",tabIndex:q,skipFocusWhenDisabled:Y=!1}=r,J=j(r,co),O=f.useRef(null),X=eo(O,e),W=g=>{g.stopPropagation(),v&&v(g)},Q=g=>{g.currentTarget===g.target&&w(g)&&g.preventDefault(),V&&V(g)},Z=g=>{g.currentTarget===g.target&&(v&&w(g)?v(g):g.key==="Escape"&&O.current&&O.current.blur()),T&&T(g)},z=d!==!1&&k?!0:d,S=z||v?K:p||"div",E=c({},r,{component:S,disabled:h,size:H,color:s,iconColor:f.isValidElement(C)&&C.props.color||s,onDelete:!!v,clickable:z,variant:G}),y=po(E),oo=S===K?c({component:p||"div",focusVisibleClassName:y.focusVisible},v&&{disableRipple:!0}):{};let F=null;v&&(F=m&&f.isValidElement(m)?f.cloneElement(m,{className:x(m.props.className,y.deleteIcon),onClick:W}):n.jsx(io,{className:x(y.deleteIcon),onClick:W}));let U=null;i&&f.isValidElement(i)&&(U=f.cloneElement(i,{className:x(y.avatar,i.props.className)}));let A=null;return C&&f.isValidElement(C)&&(A=f.cloneElement(C,{className:x(y.icon,C.props.className)})),n.jsxs(uo,c({as:S,className:x(y.root,u),disabled:z&&h?!0:void 0,onClick:k,onKeyDown:Q,onKeyUp:Z,ref:X,tabIndex:Y&&h?-1:q,ownerState:E},oo,J,{children:[U||A,n.jsx(go,{className:x(y.label),ownerState:E,children:D}),F]}))});function Co(o){return M("MuiCard",o)}I("MuiCard",["root"]);const vo=["className","raised"],bo=o=>{const{classes:a}=o;return P({root:["root"]},Co,a)},xo=$(ro,{name:"MuiCard",slot:"Root",overridesResolver:(o,a)=>a.root})(()=>({overflow:"hidden"})),mo=f.forwardRef(function(a,e){const r=R({props:a,name:"MuiCard"}),{className:i,raised:u=!1}=r,d=j(r,vo),s=c({},r,{raised:u}),p=bo(s);return n.jsx(xo,c({className:x(p.root,i),elevation:u?8:void 0,ref:e,ownerState:s},d))});function yo(o){return M("MuiCardActions",o)}I("MuiCardActions",["root","spacing"]);const $o=["disableSpacing","className"],ho=o=>{const{classes:a,disableSpacing:e}=o;return P({root:["root",!e&&"spacing"]},yo,a)},ko=$("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,!e.disableSpacing&&a.spacing]}})(({ownerState:o})=>c({display:"flex",alignItems:"center",padding:8},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Io=f.forwardRef(function(a,e){const r=R({props:a,name:"MuiCardActions"}),{disableSpacing:i=!1,className:u}=r,d=j(r,$o),s=c({},r,{disableSpacing:i}),p=ho(s);return n.jsx(ko,c({className:x(p.root,u),ownerState:s,ref:e},d))});function Mo(o){return M("MuiCardContent",o)}I("MuiCardContent",["root"]);const Ro=["className","component"],jo=o=>{const{classes:a}=o;return P({root:["root"]},Mo,a)},Po=$("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),No=f.forwardRef(function(a,e){const r=R({props:a,name:"MuiCardContent"}),{className:i,component:u="div"}=r,d=j(r,Ro),s=c({},r,{component:u}),p=jo(s);return n.jsx(Po,c({as:u,className:x(p.root,i),ownerState:s,ref:e},d))});function Do(o){return M("MuiCardMedia",o)}I("MuiCardMedia",["root","media","img"]);const Oo=["children","className","component","image","src","style"],zo=o=>{const{classes:a,isMediaComponent:e,isImageComponent:r}=o;return P({root:["root",e&&"media",r&&"img"]},Do,a)},So=$("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o,{isMediaComponent:r,isImageComponent:i}=e;return[a.root,r&&a.media,i&&a.img]}})(({ownerState:o})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),Eo=["video","audio","picture","iframe","img"],_o=["picture","img"],Lo=f.forwardRef(function(a,e){const r=R({props:a,name:"MuiCardMedia"}),{children:i,className:u,component:d="div",image:s,src:p,style:m}=r,h=j(r,Oo),C=Eo.indexOf(d)!==-1,D=!C&&s?c({backgroundImage:`url("${s}")`},m):m,k=c({},r,{component:d,isMediaComponent:C,isImageComponent:_o.indexOf(d)!==-1}),v=zo(k);return n.jsx(So,c({className:x(v.root,u),as:d,role:!C&&s?"img":void 0,ref:e,style:D,ownerState:k,src:C?s||p:void 0},h,{children:i}))});var L={},Vo=lo;Object.defineProperty(L,"__esModule",{value:!0});var B=L.default=void 0,To=Vo(to()),Wo=n;B=L.default=(0,To.default)((0,Wo.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");function Uo(){const[o,a]=f.useState([]);return f.useEffect(()=>{fetch("/Portfolio/src/data/project.json").then(e=>e.json()).then(e=>{a(e.projects)}).catch(e=>{console.warn("Error fetching project data:")})},[]),n.jsx(_,{bgcolor:"#DDDDDD",minHeight:"50vh",sx:{minWidth:"20rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem",p:"3rem"},children:n.jsx(_,{minHeight:"auto",p:"1rem",sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",flexDirection:"column",gap:"2rem",maxWidth:"100%"},children:o.length===0?n.jsx(N,{variant:"h5",fontWeight:"600",color:"#2d2e32",sx:{fontFamily:"Poppins",textAlign:"center"},children:"New projects coming soon.. 🤠"}):n.jsxs(n.Fragment,{children:[n.jsx(N,{variant:"h3",fontWeight:"600",color:"#2d2e32",textAlign:"center",sx:{flexGrow:1,fontFamily:"Poppins"},children:"Projects"}),n.jsx(_,{display:"flex",gap:"2rem",flexWrap:"wrap",children:o.map(e=>n.jsxs(mo,{sx:{maxWidth:345,bgcolor:"#FFFACD",boxShadow:"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",borderRadius:"1rem",position:"relative",overflow:"hidden","&:hover":{transform:"translateY(-7px) scale(1.05)"},transition:"transform 0.3s"},children:[n.jsx(Lo,{sx:{height:140,position:"relative","&::after":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1,opacity:0,transition:"opacity 0.3s"},"&:hover::after":{opacity:1}},image:e.background_photo,title:e.title}),n.jsxs(No,{children:[n.jsx(N,{gutterBottom:!0,variant:"h5",fontWeight:"600",color:"#2d2e32",sx:{flexGrow:1,fontFamily:"Poppins"},children:e.name}),n.jsx(N,{variant:"body2",fontWeight:"400",color:"#2d2e32",sx:{flexGrow:1,fontFamily:"Poppins"},children:e.description})]}),n.jsxs(Io,{children:[n.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:n.jsx(B,{sx:{color:"#2d2e32","&:hover":{color:"secondary.light",transform:"translateY(-7px)"},transition:"transform 0.3s"}})}),n.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:n.jsx(no,{sx:{color:"#2d2e32","&:hover":{color:"primary.light",transform:"translateY(-7px)"},transition:"transform 0.3s"}})}),n.jsx(fo,{label:e.difficulty,color:"success"})]})]},e.id))})]})})})}export{Uo as default};
