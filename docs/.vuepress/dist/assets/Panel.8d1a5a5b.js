import{_ as f,f as b,I as l,a1 as g,r,o as d,q as v,w as i,b as C,h as D,a2 as F,e as y}from"./app.89067f19.js";const B=y("\u6E05 \u9664"),E=b({setup(x){const p={breadcrumb:{separator:">>>",navigations:[{name:"\u7CFB\u7EDF\u7BA1\u7406"},{name:"\u89D2\u8272\u7BA1\u7406"}]},search:{setting:{searchItems:{name:{label:"\u59D3\u540D",type:"input",isTrim:!0,clearable:!1,placeholder:"\u8F93\u5165"},age:{label:"\u5E74\u9F84",type:"input"}}}},table:{setting:{columns:[{type:"selection"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6210\u7EE9",children:[{label:"\u6570\u5B66",prop:"math"},{label:"\u8BED\u8A00",children:[{label:"\u4E2D\u6587",prop:"chinese",slotName:"chinese"},{label:"\u82F1\u6587",prop:"english"}]}]}]}},pagination:{}},o=l({name:"\u5C0F\u660E",age:12}),e=g({page:1,pageSize:10}),s=l(),t=l([]);function c({combine:u}){console.log(u),t.value=[],window.setTimeout(()=>{t.value=[{name:"\u5C0F\u660E",english:90,chinese:60,math:71},{name:"\u5C0F\u738B",english:93,chinese:20,math:78},{name:"\u5C0F\u521A",english:92,chinese:40,math:98},{name:"\u5C0F\u767D",english:91,chinese:60,math:88}]},300)}function m(){s.value.table.clearSelection()}return(u,a)=>{const _=r("el-button"),h=r("ez-panel");return d(),v(h,{"panel-json":p,search:o.value,"onUpdate:search":a[0]||(a[0]=n=>o.value=n),pagination:D(e),"onUpdate:pagination":a[1]||(a[1]=n=>F(e)?e.value=n:e=n),tableTotal:1e3,tableData:t.value,containerColor:"#f3f3f3",ref_key:"rolePanel",ref:s,onRefreshTable:c},{tableBottom:i(()=>[C(_,{type:"primary",onClick:m,style:{"margin-top":"10px"}},{default:i(()=>[B]),_:1})]),_:1},8,["search","pagination","tableData"])}}});var T=f(E,[["__scopeId","data-v-6f1f41e8"],["__file","Panel.vue"]]);export{T as default};
