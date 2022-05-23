import{_ as l,r as a,o as r,a as c,b as t,d as n,F as u,e as s,c as p}from"./app.89067f19.js";const i={},k=n("h1",{id:"panel-\u9762\u677F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#panel-\u9762\u677F","aria-hidden":"true"},"#"),s(" Panel \u9762\u677F")],-1),d=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ez-panel</span> 
        <span class="token attr-name">:panel-json</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name"><span class="token namespace">v-model:</span>search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name"><span class="token namespace">v-model:</span>pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:tableTotal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:tableData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">containerColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#f3f3f3<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rolePanel<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">@refresh-table</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tableBottom</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u6E05 \u9664<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ez-panel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">breadcrumb</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">navigations</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7CFB\u7EDF\u7BA1\u7406&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">setting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">searchItems</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">isTrim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8F93\u5165&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">setting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6210\u7EE9&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6570\u5B66&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;math&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8BED\u8A00&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;chinese&#39;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">slotName</span><span class="token operator">:</span> <span class="token string">&#39;chinese&#39;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u82F1\u6587&#39;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;english&#39;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> search <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> rolePanel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> combine <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>combine<span class="token punctuation">)</span>
    data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">71</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">78</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u521A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">98</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">88</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rolePanel<span class="token punctuation">.</span>value<span class="token punctuation">.</span>table<span class="token punctuation">.</span><span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>ezPanel\u5C5E\u6027</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>panelJson</td><td>\u9762\u677F\u6E32\u67D3\u914D\u7F6E</td><td>object</td><td>-</td><td>\u5FC5\u586B</td></tr><tr><td>search</td><td>\u641C\u7D22\u8868\u5355</td><td>object</td><td>-</td><td>-</td></tr><tr><td>pagination</td><td>\u5206\u9875\u8868\u5355</td><td>object</td><td>-</td><td>-</td></tr><tr><td>tableTotal</td><td>\u8868\u683C\u603B\u91CF</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tableData</td><td>\u8868\u683C\u6570\u636E</td><td>array</td><td>-</td><td>-</td></tr><tr><td>containerColor</td><td>\u9762\u677F\u5BB9\u5668\u5185\u5BB9\u80CC\u666F\u8272</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><p>panelJson\u914D\u7F6E</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>breadcrumb</td><td>\u9762\u5305\u5C51\u5BFC\u822A\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>search</td><td>\u641C\u7D22\u533A\u57DF\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>table</td><td>\u8868\u683C\u533A\u57DF\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>pagination</td><td>\u5206\u9875\u533A\u57DF\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><p>panelJson.breadcrumb\u914D\u7F6E</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>separator</td><td>\u5BFC\u822A\u5206\u9694\u7B26\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5B57\u7B26\u6216ElementPlus\u5B57\u7B26\u4E32\u56FE\u6807</td><td>string</td><td>-</td><td>&#39;/&#39;</td></tr><tr><td>navigations</td><td>\u5BFC\u822A\u5177\u4F53\u5185\u5BB9\u914D\u7F6E</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><p>panelJson.search\u914D\u7F6E</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>setting</td><td>\u540CsearchJson\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>bindAttrs</td><td>\u540CezSearch\u5C5E\u6027</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><p>panelJson.table\u914D\u7F6E</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>setting</td><td>\u540CtableJson\u914D\u7F6E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>bindAttrs</td><td>\u540CezTable\u5C5E\u6027</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><p>panelJson.pagination\u914D\u7F6E</p>`,12),b=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u53EF\u9009\u503C"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),m=n("td",null,"bindAttrs",-1),h=s("\u53C2\u8003ElementPlus\u7684"),y={href:"https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},g=s("pagination\u5C5E\u6027"),_=n("td",null,"object",-1),q=n("td",null,"-",-1),f=n("td",null,"-",-1),v=p("<p>ezPanel\u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>changeSearch</td><td>\u641C\u7D22\u63A7\u4EF6\u53D8\u66F4\u65F6\u7684\u56DE\u8C03</td><td>searchForm:\u641C\u7D22\u8868\u5355</td></tr><tr><td>changePagination</td><td>\u5206\u9875\u63A7\u4EF6\u53D8\u66F4\u65F6\u7684\u56DE\u8C03</td><td>paginationForm:\u5206\u9875\u8868\u5355</td></tr><tr><td>sizeChange</td><td>pageSize \u6539\u53D8\u65F6\u89E6\u53D1</td><td>size:\u6BCF\u9875\u6761\u6570</td></tr><tr><td>currentChange</td><td>current-change\u6539\u53D8\u65F6\u89E6\u53D1</td><td>page:\u5F53\u524D\u9875</td></tr><tr><td>prevClick</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1</td><td>page:\u5F53\u524D\u9875</td></tr><tr><td>nextClick</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1</td><td>page:\u5F53\u524D\u9875</td></tr><tr><td>refreshTable</td><td>\u70B9\u51FB\u8FD4\u56DE\u65F6\u56DE\u8C03</td><td>{combine,search,pagination},search:\u641C\u7D22\u8868\u5355\uFF1Bpagination\uFF1A\u5206\u9875\u8868\u5355\uFF1Bcombine\uFF1A\u641C\u7D22\u8868\u5355\u3001\u5206\u9875\u8868\u5355\u5408\u5E76</td></tr></tbody></table><p>ezPanel\u63D2\u69FD</p><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>breadTop</td><td>\u9762\u5305\u5C51\u5BFC\u822A\u9876\u90E8</td></tr><tr><td>breadBottom</td><td>\u9762\u5305\u5C51\u5BFC\u822A\u5E95\u90E8</td></tr><tr><td>containerTop</td><td>\u5BB9\u5668\u5185\u9876\u90E8</td></tr><tr><td>containerBottom</td><td>\u5BB9\u5668\u5185\u5E95\u90E8</td></tr><tr><td>tableTop</td><td>\u8868\u683C\u9876\u90E8</td></tr><tr><td>tableBottom</td><td>\u8868\u683C\u5E95\u90E8</td></tr><tr><td>searchButton</td><td>\u641C\u7D22\u533A\u57DF\u63D2\u5165\u6309\u94AE</td></tr><tr><td>ezEmpty</td><td>\u5F53\u8868\u683C\u6570\u636E\u4E3A\u7A7A\u65F6\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td></tr><tr><td>ezAppend</td><td>\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C \u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002 \u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002</td></tr><tr><td>pagination</td><td>\u8868\u683C\u5E95\u90E8\u5206\u9875\u63A7\u4EF6\u5B58\u653E\u63D2\u69FD</td></tr><tr><td>\u8868\u683C\u914D\u7F6E\u4E2DslotName\u6216headerSlot\u5B9A\u4E49\u7684\u63D2\u69FD</td><td>-</td></tr></tbody></table>",4);function j(z,P){const e=a("Panel"),o=a("ExternalLinkIcon");return r(),c(u,null,[k,t(e),d,n("table",null,[b,n("tbody",null,[n("tr",null,[m,n("td",null,[h,n("a",y,[g,t(o)])]),_,q,f])])]),v],64)}var x=l(i,[["render",j],["__file","Panel.html.vue"]]);export{x as default};
