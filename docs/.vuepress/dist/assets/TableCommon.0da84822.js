import{_ as g,f as b,I as C,r as l,o as y,a as f,b as u,w as o,e as r,t as c,d as p,F,$ as D,a0 as B}from"./app.89067f19.js";const E=e=>(D("data-v-6a3c32c4"),e=e(),B(),e),v=E(()=>p("span",null,"\u8BED\u6587\uFF08\u5934\u90E8\u63D2\u69FD\uFF09",-1)),S={style:{"margin-top":"20px"}},x=r("\u9009\u4E2D\u7B2C\u4E00\u884C"),w=b({setup(e){const n=C(),t=[{name:"\u5C0F\u7EA2",english:90,math:78,chinese:69,geography:91},{name:"\u5C0F\u738B",english:60,math:98,chinese:67,geography:92},{name:"\u5C0F\u5F20",english:54,math:58,chinese:45,geography:93},{name:"\u5C0F\u674E",english:87,math:56,chinese:89,geography:94}],h={columns:[{type:"selection"},{prop:"name",label:"\u59D3\u540D"},{label:"\u5206\u6570",children:[{label:"\u8BED\u8A00\u7C7B",children:[{label:"\u82F1\u8BED",prop:"english",align:"center"},{label:"\u8BED\u6587",prop:"chinese",slotName:"chinese",headerSlot:"chineseHeader"}]},{label:"\u6570\u5B66",prop:"math",show:!0},{label:"\u5730\u7406",prop:"geography",show:!1}]}]};function i(s){console.log(s)}function _(){n.value.ezTable.toggleRowSelection(t[0])}return(s,T)=>{const m=l("ez-table"),d=l("ez-button");return y(),f(F,null,[u(m,{border:"",ref_key:"myTable",ref:n,"table-json":h,data:t,onSelectionChange:i},{chineseHeader:o(a=>[v]),chinese:o(a=>[r(c(a.$index)+"\u3001"+c(a.row.chinese>=60?"\u5408\u683C":"\u4E0D\u5408\u683C"),1)]),_:1},512),p("div",S,[u(d,{onClick:_,type:"primary"},{default:o(()=>[x]),_:1})])],64)}}});var I=g(w,[["__scopeId","data-v-6a3c32c4"],["__file","TableCommon.vue"]]);export{I as default};