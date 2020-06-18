(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var l=a(1),n=a(9),o=(a(0),a(213)),b=a(214),r=a(219),i=a(222),c=(a(118),{id:"workflow",title:"The ValQ Workflow",sidebar_label:"The ValQ Workflow"}),s={id:"intro/workflow",title:"The ValQ Workflow",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/intro/workflow.mdx",permalink:"/docs/intro/workflow",sidebar_label:"The ValQ Workflow",sidebar:"sideBar",previous:{title:"Understanding Nodes in ValQ",permalink:"/docs/intro/node"},next:{title:"Model Tab",permalink:"/docs/model/model_tab"}},d=[{value:"Model Tab",id:"model-tab",children:[]},{value:"Plan Tab",id:"plan-tab",children:[]},{value:"Simulate Tab",id:"simulate-tab",children:[]},{value:"Analyze Tab",id:"analyze-tab",children:[]}],u={rightToc:d};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("p",null,"The ValQ workflow consists of four steps - Model, Plan, Simulate and Analyze \u2013 all of which are shown in a tab at the top. ")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow1.png")})))," ",Object(o.b)("br",null),"At a very high level, these are used for the following: ",Object(o.b)("br",null)," ",Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(l.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"TAB"),Object(o.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"PURPOSE"),Object(o.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"ACCESSIBLE TO*"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(o.b)(r.a,{to:Object(b.a)("docs/model/model_tab"),mdxType:"Link"}," Model ")),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Build advanced models and leverage models by using formulae and functions"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Creator only")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(o.b)(r.a,{to:Object(b.a)("docs/planning/plan_tab"),mdxType:"Link"}," Plan ")),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Levergae intelligent planning grid to perform budgeting, allocations and time-series forecasting"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Creator & Consumer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(o.b)(r.a,{to:Object(b.a)("docs/simulation/simulation"),mdxType:"Link"}," Simulate ")),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Perform simulations & scenario comparisons; Build models directly from data"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Creator & Consumer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"4"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(o.b)(r.a,{to:Object(b.a)("docs/analysis/variance_analysis"),mdxType:"Link"}," Analyze ")),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Perform in-depth variance analysis"),Object(o.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Creator & Consumer")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Creator"),": One who builds or designs models \u2013 this can be an analyst or planner (or anyone in the organization who is comfortable with Excel)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Consumer"),": One who consumes ValQ models built by Creator \u2013 this can be executives, decision makers, and even other analysts and planners in the organization. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null),"\nA Creator can also build models for self-consumption.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null),"\nThere is no specific sequence to be followed in the above workflow. ",Object(o.b)("br",null)," For example, not everyone may need to utilize\nPlan & Analyze tabs, ValQ models can also be built on-the-fly directly from the Simulate tab without having to utilize any Model tab capabilities.")),Object(o.b)("p",null,"What follows is a preview of these workflow items, and we would explore them in-depth later."),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("h2",{id:"model-tab"},"Model Tab"),Object(o.b)("p",null,"The ",Object(o.b)(r.a,{to:Object(b.a)("docs/model/model_tab"),mdxType:"Link"}," Model ")," tab helps the designer bring data model to life and build complex visuals without writing a single line of code. This tab is available only during edit mode (in Power BI) and not in the reading view \u2013 and can be thus accessible only by Creators and not Consumers.")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow2.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"While modeling, the user can leverage the Fields, Visualizations & Filters pane in Power BI to connect to a data and configure the visual."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow3.png"),width:410,height:425})))," ",Object(o.b)("br",null),Object(o.b)("h2",{id:"plan-tab"},"Plan Tab"),Object(o.b)("p",null,"The ",Object(o.b)(r.a,{to:Object(b.a)("docs/planning/plan_tab"),mdxType:"Link"}," Plan ")," tab is used to create new plans and budgets for business cycles, perform top-down and bottom-up analyses, apply different allocation methods, perform time series forecasting, and more."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow4.png"),width:700,height:400})))," ",Object(o.b)("br",null),Object(o.b)("h2",{id:"simulate-tab"},"Simulate Tab"),Object(o.b)("p",null,"In the ",Object(o.b)(r.a,{to:Object(b.a)("docs/simulation/simulation"),mdxType:"Link"}," Simulate ")," tab, you would be able to visualize the KPIs and their relationships arranged in a tree-like fashion. From this tab, you can run simulations, create scenarios and compare scenarios."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow5.png"),width:700,height:400})))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null),"\nConsumers would typically see the Simulate tab first while opening ValQ.")),Object(o.b)("h2",{id:"analyze-tab"},"Analyze Tab"),Object(o.b)("p",null,"The ",Object(o.b)(r.a,{to:Object(b.a)("docs/analysis/variance_analysis"),mdxType:"Link"}," Analyze ")," tab allows the user to run advanced analyses such as variance analysis. While consuming from Power BI server or service, you would be able to also download the results of such analyses in a spreadsheet."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(i.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(b.a)("/doc-images/workflow/workflow7.png")}))))}m.isMDXComponent=!0}}]);