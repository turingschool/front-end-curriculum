---
title: WAI-ARIA Roles
---

<section>
  <h1>Quick Review</h1>
  <p> <li>There are 3 billion (and counting) people using the internet.</li>

<li>In America alone there are 57 million Americans with a disability (2012)</li>

<li>19.9 Million (8.2%) have difficulty lifting or grasping. This could, for example impact their use of a mouse or keyboard.</li>

<li>15.2 Million (6.3%) have a cognitive, mental, or emotional impairment.</li>

<li>8.1 Million (3.3%) have a vision impairment. These people might rely on a screen magnifier or a screen reader, or might have a form of color blindness.</li>

<li>7.6 Million (3.1%) have a hearing impairment. They might rely on transcripts and / or captions for audio and video media.</li></P>
</section>

<section class="aria-lesson">
  <h1>What is WAI-ARIA?</h1>
</section>

<section class="aria-lesson">
  <h3>WAI:</h3>
  <p>Web Accessibility Initiative</p>
</section>

<section class="aria-lesson">
  <h3>ARIA:</h3>
  <p>Accessible Rich Internet Application</p>
</section>

<section class="aria-lesson">
  <h3>The Roles Model</h3>
  <p>Defines ways to make web content more accessible to persons with disabilities.</p>
</section>

<section class="aria-lesson">
  <h3>Example of an ARIA Role</h3>
  <code>&lt;span role="checkbox" aria-checked="true"&gt; &lt;/span&gt;</code>
</section>

<section class="aria-lesson">
  <h2>Rules of ARIA use:</h2>
</section>

<section class="aria-lesson">
  <strong>Elements can only have one role.</strong>
  <p>Choose the one that best represents what that element does.</p>
  <p>In other words: A button can't be both a header and navigation. Pick one.</p>
</section>

<section class="aria-lesson">
  <strong>Use a native semantic HTML element or attribute if available instead of re-purposing an element and adding an ARIA role.</strong>
</section>

<section class="aria-lesson">
  <p>HTML5 has semantic tags for exactly this purpose that are built with implicit ARIA roles behind the scenes. Don't make things harder on yourself or a screen reader.</p>
  <p><i>bad:</i> <code>&lt;h1 role=button&gt;heading button&lt;/h1&gt;</code></p>
  <p>If you must, use a nested element:</p>
  <p><i>good:</i> <code>&lt;h1&gt;&lt;button&gt;heading button&lt;/button&gt;&lt;/h1&gt;</code></p>
</section>

<section class="aria-lesson">
  <h2>More Obscure Semantic HTML5 Elements</h2>
</section>

<section class="aria-lesson">
    <p><code>&lt;q&gt;&lt;/q&gt;</code> : inline quoted text</p>
    <p><code>&lt;time&gt;&lt;/time&gt;</code> : date or specific time</p>
    <p><code>&lt;cite&gt;&lt;/cite&gt;</code> : reference to a cited book, play, etc</p>
    <p><code>&lt;input type="email"&gt;&lt;/input&gt;</code> : specific type of input field</p>
    <p><code>&lt;figcaption&gt;&lt;/figcaption&gt;</code> : detailed caption on an image</p>
    <p><code>&lt;code&gt;&lt;/code&gt;</code> : code snippet</p>
    <p><code>&lt;aside&gt;&lt;/aside&gt;</code> : chunk of text that isn't the primary focus of the page</p>
    <p><code>&lt;article&gt;&lt;/article&gt;</code> : small subsection of content</p>
    <p><code>&lt;abbr&gt;&lt;/abbr&gt;</code> : abbreviation</p>
</section>

<section class="aria-lesson">
  <a href='https://www.w3.org/TR/html-markup/elements.html'>Semantic HTML5 Elements</a>
</section>

<section class="aria-lesson">
  <strong>All interactive ARIA controls must be usable with the keyboard.</strong>
  <p>If you write your own widget that is clickable or pressable on a mobile device it must also be navigable via keyboard commands with focus/active etc.</p>
</section>

<section class="aria-lesson">
  <strong>Do not use role="presentation" or aria-hidden="true" on a visible focusable element.</strong>
  <p>This will result in a thing NOT being visible or focusable for readers, only use this if the element is already hidden<br/>(ie <code>{ display: none }</code>)</p>
</section>

<section class="aria-lesson">
  <strong>All interactive elements must have an accessible name.</strong>
  <p><i>bad:</i>  <code>&lt;label&gt;user name&lt;/label&gt; &lt;input type="text"&gt;</code> </p>
  <p><i>good:</i> <code>&lt;label for="user-name"&gt;user name&lt;/label&gt; &lt;input type="text" id="user-name"&gt;</code> </p>
  <small>(Apparently 5th Rule is a “work in progress")</small>
  <a href="https://www.w3.org/TR/aria-in-html/#fifth-rule-of-aria-use">Example Of How This Works</a>
</section>

<section class="aria-lesson">
  <i><strong>Note:</strong> Adding an ARIA role does not change the behavior or appearance of an element for people NOT using assistive technologies</i>
</section>

<section class="aria-lesson">
  <small>Another Word On:</small>
  <h3>Semantic HTML</h3>
  <ul>
    <li>Elements such as <code>&lt;nav&gt;, &lt;button&gt;, &lt;header&gt;, &lt;aside&gt;</code> when read aloud help clarify what part of the html page someone is focused on.</li>
    <li>These elements have default implicit ARIA roles.</li>
    <li>Example: <code>&lt;nav&gt;&lt;/nav&gt;</code> tags have an implicit <code>role="navigation"</code>. <br/> Keep an eye on these so you can avoid writing redundant code.</li>
  </ul>
</section>

<section class="aria-lesson">
  <h2>Alt Tags!</h2>
  <p>
    Hugely important and easy to use on images. Be verbose.
  </p>
  <p><i>bad:</i> <code>&lt;img src="mountain.jpg" alt="mountain" /&gt;</code></p>
  <p><i>good:</i> <code>&lt;img src="mountain.jpg" alt="The cascade mountains at sunset in January" /&gt;</code></p>
</section>

<section class="aria-lesson">
  <a href="https://www.w3.org/TR/html-aria/#docconformance">TABLE FOR WHAT ELEMENTS HAVE IMPLICIT ROLES</a>
</section>

<section class="aria-lesson">
  <h2>ARIA Roles &amp; Examples</h2>
</section>

<section class="aria-lesson">
  <dfn><code>role="img"</code></dfn>
  <p>container for collection of elements that form an image</p>
  <p>ie: can contain captions and descriptive text, or other stuff.</p>
</section>

<section class="aria-lesson">
  <h3>Example of <code>role="img"</code></h3>
  <code>
    &lt;figure role="img" aria-labelledby="fish-caption"&gt;
    <pre>
      o           .'`/
      '      /  (
      O    .-'` ` `'-._      .')
      _/ (o)        '.  .' /
      )       )))     ><  <
      `\  |_\      _.'  '. \
      '-._  _ .-'       '.)
      jgs     `\__\
    </pre>
    &lt;figcaption id="fish-caption"&gt;
      Joan G. Stark, "&lt;cite&gt;fish&lt;/cite&gt;".
      October 1997. ASCII on electrons. 28×8.
    &lt;/figcaption&gt;
    &lt;/figure&gt;
  </code>
</section>

<section class="aria-lesson">
  <p>
    Without the use of ARIA roles and properties AT's (Accessibility Tool) would read off each element of the fish, which is clearly not helpful for the user.
  </p>
</section>

<section class="aria-lesson">
  <dfn><code>role='search'</code></dfn>
  <p>collection of items and elements that collectively allow for search functionality</p>
  <code>
  &lt;form action="/" method="get" role="search"&gt;
    &lt;label for="search-field"&gt;Search:&lt;/label&gt;
    &lt;input type="search" id="search-field"&gt;
    &lt;input type="submit"&gt;
  &lt;/form&gt;
  </code>
</section>

<section class="aria-lesson">
  <dfn><code>role='region'</code></dfn>
  <p>an important section of content that users will want to quickly navigate to.</p>
  <i>note:</i> &lt;section&gt; elements have an implicit role of "region"
  <code>&lt;div role="region"&gt;This is important content"&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='presentation'</code></dfn>
  <p>element whose purpose isn't relevant to the page and will not be visible</p>
  <p><i>ie:</i> decorative patterns or images</p>
  <code>&lt;div role='presentation'&gt;&lt;img src='decorative-floral-thing.png' role='presentation'/&gt;&lt;img src='flower.png'/&gt;&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='checkbox'</code></dfn>
  <p>checkable input that can be true (checked) false (unchecked) or mixed (a group of the two options)</p>
  <code>&lt;span role=&quot;checkbox&quot; aria-checked=&quot;true&quot;&gt;&lt;/span&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='banner'</code></dfn>
  <p>site-oriented content like a large logo or header image, typically spans the whole page</p>
  <code>&lt;header role=&quot;banner&quot;&gt;Welcome&lt;/header&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='button'</code></dfn>
  <p>element that causes user triggered actions when clicked</p>
  <code>&lt;div role=&quot;button&quot;&gt;Click Me&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='contentinfo'</code></dfn>
  <p>element that contains information about the parent document or section</p>
  <p>commonly copyright - should be treated as navigational landmarks (there should be only one per page)</p>
  <code>&lt;div role=&quot;contentinfo&quot;&gt;Copyright &amp;copy; Jane Doe, Turing School of Software and Design&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='alert'</code></dfn>
  <p>message with important information</p>
  <code>&lt;div role=&quot;alert&quot;&gt;Please download a new version of this software.&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='term'</code></dfn>
  <p>element that identifies a term to be defined</p>
  <code>&lt;div role=&quot;term&quot; id=&quot;hypertension-term&quot;&gt;hypertension&lt;/div&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>role='definition'</code></dfn>
  <p>definition of previously specified "term" element</p>
  <p>should include the ARIA attribute <code>aria-labelledby</code></p>
  <code>&lt;div role=&quot;definition&quot; aria-labelledby=&quot;hypertension-term&quot;&gt;high blood pressure&lt;/div&gt;</code>
</section>


<section class="aria-lesson">
  <h2>ARIA Attributes</h2>
  <p>added to HTML like roles, but they serve a different purpose</p>
  <p><i>ie:</i>
    <code>&lt;div role=&quot;definition&quot; aria-labelledby=&quot;term&quot;&gt;definition of term&lt;/div&gt;</code></p>
</section>

<section class="aria-lesson">
  <dfn><code>aria-checked="true"</code></dfn>
  <p>On an element meant to look like a checkbox, with the box checked, that doesn't already have a semantic HTML checkbox around it.</p>
  <code>&lt;span role=&quot;checkbox&quot; aria-checked=&quot;true&quot;&gt;&lt;/span&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>aria-label="close"</code></dfn>
  <p>When there isn’t a label for an element to specify what it is or does</p>
  <p><i>ie:</i> The button looks like a typical close button, but an AT would read only the "X" which is unclear. The label describes what happens with the button is clicked.</p>
  <code>&lt;button aria-label=&quot;Close&quot; onclick=&quot;myDialog.close()&quot;&gt;X&lt;/button&gt;</code>
</section>

<section class="aria-lesson">
  <dfn><code>aria-labelledby="elementID"</code></dfn>
  <p>contains the ID of the element the group is focused on or needs to be associated with</p>
<code>
  &lt;figure aria-labelledby=&quot;mountain&quot; role=&quot;group&quot;&gt;<br/>
      &lt;img src=&quot;mountain.jpg&quot; alt=&quot;The cascade mountains at sunset in January&quot;/&gt;<br/>
      &lt;figcaption id=&quot;mountain&quot;&gt;I climbed the Cascades on &lt;time datetime=&quot;2016-01-01 24:00&quot;&gt;New Years Eve&lt;/time&gt;&lt;/figcaption&gt;<br/>
  &lt;/figure&gt;</code>
</section>

<section class="aria-lesson">
  <h1>Aria Roles, States and Properties</h1>
  <img src='https://raw.githubusercontent.com/Tman22/wai-aria/master/roles.png' alt='list of aria roles'/>
</section>

<section class="aria-lesson">
  <h1>YOUR TURN</h1>
</section>

<section class="aria-lesson">
  Take the following HTML snippet and make it accessible using explicit semantic HTML, ARIA roles, and attributes. .
</section>

<section class="aria-lesson">
  <a href="https://gist.github.com/martensonbj/b98a7d300ead397945aa038fe9aa078a">Exercise</a>
</section>

<section class="aria-lesson">
  <h1>Example Solution</h1>
</section>

<section class="aria-lesson">
  <a href="https://gist.github.com/martensonbj/43dd4bfdc3eefdcc6308acdba90794c0">Exercise Solution</a>
</section>

<section class="aria-lesson">
  <h3>Homework: Make your portoflio Accessible.</h3>
</section>

<section class="aria-lesson">
  <h2>Resources:</h2>
  HTML Nu Validator : https://validator.w3.org/nu <br/>
  Table of Elements with Implicit ARIA Roles: https://www.w3.org/TR/html-aria/#docconformance <br/>
  HTML5 Elements: https://www.w3.org/TR/html-markup/elements.html <br/>
  How to use Aria Effectively : https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/ <br/>
  HTML Accessibility Task Force   http://www.w3.org/WAI/PF/html-task-force <br/>
  HTML Quiz: https://www.sitepoint.com/10-typical-html-interview-exercises/ <br/>
</section>