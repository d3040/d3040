# Documentation plan: d3040.com

## About

My name is Daniel Clavijo and this is the documentation plan for my personal site. Firstly, let me walk you through the document you hopefully will read. There are two main reasons why I'm creating this site 1) my portfolio, and 2) learn a lot while doing so. Actually, one of the things I am beginning with right now is GitHub so, as the beginner's guide dictates, I created this README file to explain a little bit about this journey I have been willing to start many years ago and finally doing.

As a LOTR[^1] fan would say:

> "It's a dangerous business, Frodo, going out of your door. You step into the road, and if you don't keep your feet, there is no knowing where you might be swept off to."

In this file, I'll be documenting about the developing process of this site and going deeper into the content.

## Process

### 1. Setting my custom domain in GitHub Pages:

A professor at my university used to say: *"ignorance is expensive"*, and there are many ways in which something can cost you more than expected. In my case, when I finally decided to create my website, one of the first things I did was looking for a host provider. I purchased a basic plan and I payed for it 3 consecutive years and never deploy my site. A word to the wise; there are several platforms that provide, free-of-charge, to host your website. Of course it all depends on what are you looking for but if you want to create your own personal website, I think the most reasonable thing to do is to start using one of this platforms, such as GitHub pages.

Today (10/10/2022) I linked my domain _d3040.com_ to my GitHub account using this tutorial: [configure a custom domain for your GitHub pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). Be ware of the [domain propagation](https://whyandhowto.com/thecnical/what-is-domain-propagation), it takes up to 48h to the root name servers to be updated with your website's DNS information.

Use [MDN Web Docs](https://developer.mozilla.org/) to reference documentation. in the articles: [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works), "... you'll get a simplified view of what happens when you open a webpage in a web browser."

### 2. The content:

The site is organized in four major topics:

1. The _About_ section contains information about me, like my principles and latest updates,
2. _The Beaver's Hut_ is a compilation of my notes about different topics shuch as web developer or urban planning. This is created using a python documentation generator called [Sphinx](https://www.sphinx-doc.org/en/master/index.html),
3. My _Projects_, the ideas I'm curious about, and
4. The _Lab_, mostly for experimental layout, like [Jen Simmons](https://labs.jensimmons.com/).

There are 3 goals for documenting my site's development process:

* to measure how it was done (enlist the steps),
* to look for my opportunities, and
* to write down my findings.

> Content implies meaning and _HTML should be coded to represent the data that will be populated and not based on its default presentation styling._[^3] Writing semantic markup has its benefits, not just to increase the SEO's page ranking but to identify much easier blocks of meaningful code or to help visually impaired users navigate a page through screen readers.

### 3. The style

Any site's design should not be taken lightly, it should mirror values and goals from in which they represent. In my case, I wanted to focus on my coding abilities-not my desing abilities- and the best way of doing so, was to use sites from organizations I admire the most, to recreate their's from scratch (accordingly the required licensing policies).

My home page is a tribute to [Mozilla](https://www.mozilla.org/) and [Mozilla Manifesto](https://www.mozilla.org/en-US/about/manifesto/).

### 4. First Deploy

Friday, 21st July 2023. There's work to be done:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


| Level of importance | Description                             |Start |Finish|
| ------------------- | --------------------------------------- | ---- | ---- |
|0 										|	Navbar's sections icons									|			 |			|
|0 										|	Image in get-in-contact sections				|			 |			|
|1 										|	Enable contact form 										|			 |			|
|2 										|	Contract a hosting plan									|			 |			|
|3 										|	Udapte DNS 															|			 |			|
|0 										|	Enable language form 										|			 |			|
|0 										|	Site's animation												|			 |			|
|0 										|	Review Grid layout for navbar						|			 |			|

## Easter eggs:

* GitHub Pages does not support server-side languages such as PHP, Ruby, or Python.
* Privacy and the :visited selector:

	Before about 2010, the CSS :visited selector allowed websites to uncover a user's browsing history and figure out what sites the user had visited. This was done through window.getComputedStyle and other techniques. This process was quick to execute, and made it possible not only to determine where the user had been on the web, but could also be used to guess a lot of information about the user's identity. To style links appropriately, put the :visited rule after the :link rule but before the :hover and :active rules, as defined by the LVHA-order: :link — :visited — :hover — :active.

* *target="_blank"* should be avoided.
* The _appearance_ CSS property is used to control native appearance of UI controls, that are based on operating system's theme (appearance: none;).
* The _lang_ global attribute helps define the language of an element: the language that non-editable elements are written in, or the language that the editable elements should be written in by the user. The attribute contains a single "language tag" in the format defined in RFC 5646: Tags for Identifying Languages (also known as BCP 47). Note: The default value of lang is unknown, therefore it is recommended to always specify this attribute with the appropriate value.
* _:focus-within_ selector.


[^1]: Lord of The Rings.
[^2]: got the idea from [Jen Simmons's lab](https://labs.jensimmons.com)
[^3]: [Semantics in HTML -MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
