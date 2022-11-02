import{_ as i,o as r,c as k,d as s,w as n,a,b as p,e as c,r as o}from"./app.a76928ef.js";const d={},m=a("h1",{id:"carousel",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#carousel","aria-hidden":"true"},"#"),p(" Carousel")],-1),g=a("h2",{id:"basic-usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),p(" Basic usage")],-1),v=a("p",null,[p("Note that one of the "),a("code",null,"b-carousel-slide"),p(" must be "),a("code",null,"active"),p(". Otherwise the carousel will not work.")],-1),h=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">active</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=11<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=12<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="carousel-options" tabindex="-1"><a class="header-anchor" href="#carousel-options" aria-hidden="true">#</a> Carousel options</h2>`,2),b=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel</span>
    <span class="token attr-name">:interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2000<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">controls</span>
    <span class="token attr-name">indicators</span>
    <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ababab<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">img-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1024<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">img-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>480<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-shadow</span><span class="token punctuation">:</span> 1px 1px 2px #333</span><span class="token punctuation">&quot;</span></span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>carousel-dark carousel-fade<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">active</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=21<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=22<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slide-options" tabindex="-1"><a class="header-anchor" href="#slide-options" aria-hidden="true">#</a> Slide options</h2>`,2),q=a("h1",null,"First slide",-1),_=a("p",null,"Some more detailed description or whatever content.",-1),f=a("img",{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=32",alt:"image slot"},null,-1),x=a("h1",null,"Third slide",-1),w=a("p",null,"Constains a customized background image",-1),C=a("h1",null,"Fourth slide",-1),y=a("p",null,"No background image",-1),N=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel</span>  
    <span class="token attr-name">controls</span>
    <span class="token attr-name">indicators</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">active</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=30<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>First slide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Some more detailed description or whatever content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel-slide</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span>
      <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Second slide<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Does the same, just a bit differently.<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=31<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#img</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1024<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>480<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/1024/480/?image=32<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image slot<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Third slide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Constains a customized background image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel-slide</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-carousel-slide</span> <span class="token attr-name">img-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>480px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">img-blank</span> <span class="token attr-name">img-blank-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Blank image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Fourth slide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>No background image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel-slide</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,2);function B(S,F){const t=o("b-carousel-slide"),l=o("b-carousel"),e=o("ClientOnly"),u=o("ComponentReference");return r(),k("div",null,[m,g,v,s(e,null,{default:n(()=>[s(l,null,{default:n(()=>[s(t,{active:"","img-src":"https://picsum.photos/1024/480/?image=10"}),s(t,{"img-src":"https://picsum.photos/1024/480/?image=11"}),s(t,{"img-src":"https://picsum.photos/1024/480/?image=12"})]),_:1})]),_:1}),h,s(e,null,{default:n(()=>[s(l,{interval:2e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480",style:{"text-shadow":"1px 1px 2px #333"},class:"carousel-dark carousel-fade"},{default:n(()=>[s(t,{active:"","img-src":"https://picsum.photos/1024/480/?image=20"}),s(t,{"img-src":"https://picsum.photos/1024/480/?image=21"}),s(t,{"img-src":"https://picsum.photos/1024/480/?image=22"})]),_:1})]),_:1}),b,s(e,null,{default:n(()=>[s(l,{controls:"",indicators:""},{default:n(()=>[s(t,{active:"","img-src":"https://picsum.photos/1024/480/?image=30"},{default:n(()=>[q,_]),_:1}),s(t,{caption:"Second slide",text:"Does the same, just a bit differently.","img-src":"https://picsum.photos/1024/480/?image=31"}),s(t,null,{img:n(()=>[f]),default:n(()=>[x,w]),_:1}),s(t,{"img-height":"480px","img-blank":"","img-blank-color":"pink","img-alt":"Blank image"},{default:n(()=>[C,y]),_:1})]),_:1})]),_:1}),N,s(e,null,{default:n(()=>[s(u)]),_:1})])}var O=i(d,[["render",B],["__file","Carousel.html.vue"]]);export{O as default};
