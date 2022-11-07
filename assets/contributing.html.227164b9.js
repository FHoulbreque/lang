import{_ as l,r as o,o as r,c,a as e,b as n,d as a,w as d,e as s}from"./app.863b8e09.js";const h={},u=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),n(" Contributing")],-1),p=e("p",null,[n("Contributions are "),e("strong",null,"welcome"),n(" and will be fully "),e("strong",null,"credited"),n(".")],-1),g={href:"https://github.com/Laravel-Lang/lang",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"how-can-i-add-a-language-in-this-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-can-i-add-a-language-in-this-project","aria-hidden":"true"},"#"),n(" How can I add a language in this project ?")],-1),m=e("li",null,"Fork this repository;",-1),b={href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[n("Install dependencies by running console command:"),e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"composer"),n(` update
`)])])])],-1),v={href:"https://laravel.com/docs/8.x/localization",target:"_blank",rel:"noopener noreferrer"},k={href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"fr",-1),x=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`vendor/bin/lang create fr
`)])],-1),q=s("<li>This command will create all the necessary files and fill them with initial data. The files will be located in the <code>locales/{locale}</code> directory;</li><li>Keep in mind that the <code>*-inline.json</code> files does not come with Laravel and the idea of this file is not to put a specific name to each attribute (as in <code>validation.php</code>) but a generic name for the validation attributes. Therefore in the translations of this file the placeholder <code>:attribute</code> <strong>should not</strong> appear.</li><li>Add a pull request with the name of the language <blockquote><p>ex: [fr]: Added new localization</p></blockquote></li>",3),j=s(`<h2 id="how-can-i-fix-a-file" tabindex="-1"><a class="header-anchor" href="#how-can-i-fix-a-file" aria-hidden="true">#</a> How can I fix a file ?</h2><ul><li>Fork this repository;</li><li>Update the files; <blockquote><p>Note that in inline files (<code>json-inline.json</code> and <code>php-inline.json</code>), keys are the &quot;non-inline&quot; option.</p><p>For example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;The :attribute must be at least :length characters.&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This field must be at least :length characters.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li>Add a pull request with the name of the language <blockquote><p>ex: [fr]: Updated translations</p></blockquote></li></ul><h2 id="what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english" aria-hidden="true">#</a> What should I do if there is a tag whose translation is the same as in English?</h2>`,3),y=e("em",null,"completion status",-1),I=e("em",null,"status list",-1),L=s(`<p>We can avoid this situation in the following way:</p><ul><li><p>Fork this repository if you haven&#39;t already;</p></li><li><p>Create a <code>_excludes.json</code> file in the localization folder if it doesn&#39;t already exist;</p></li><li><p>This file contains an array of values for each exception.</p><blockquote><p>For example, we need to exclude Micronesia from the status check for Italian:</p><p><em>locales/it/json.json</em>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Micronesia, Federated States Of&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Micronesia&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>locales/it/_excludes.json</em>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;Micronesia&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li><p>Add these changes to the pull request you will send.</p></li></ul>`,2);function T(F,C){const t=o("ExternalLinkIcon"),i=o("RouterLink");return r(),c("div",null,[u,p,e("p",null,[n("We accept contributions via Pull Requests on "),e("a",g,[n("Github"),a(t)]),n(".")]),f,e("ul",null,[m,e("li",null,[n("Make sure you have "),e("a",b,[n("PHP 8.1"),a(t)]),n(" or higher installed on your computer;")]),_,e("li",null,[n("Call the console command, passing in the argument the name of the localization to be added. Localization code must comply with "),e("a",v,[n("ISO-15897"),a(t)]),n(" and "),e("a",k,[n("ISO-639-1"),a(t)]),n(" (ex: "),w,n(" for French):"),x]),q]),j,e("p",null,[n("In some languages there are some strings whose translation is the same as in English. In this case, the script that generates the "),a(i,{to:"/status.html"},{default:d(()=>[n("status")]),_:1}),n(" adds them by default to the list of pending translations. This affects the "),y,n(" for this language which would never be marked in "),I,n(" with ( ✔) but with (❗) even if all other strings were translated.")]),L])}const E=l(h,[["render",T],["__file","contributing.html.vue"]]);export{E as default};
