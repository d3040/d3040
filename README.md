# Documentation plan: d3040.com

## About

My name is Daniel Clavijo and this is the documentation plan for my personal site. Firstly, let me walk you through the document you hopefully will read. There are two main reasons why I'm creating this site; the first one is to have a way to share my projects and my portfolio, the second is to learn a lot of stuff while doing so. Actually, one of the things I am beginning with right now is GitHub so, as the beginner's guide dictates, I created this README file to explain a little bit about this journey I have been willing to start many years ago and finally I'm starting.

As a LOTR[^1] fan would say:

> "It's a dangerous business, Frodo, going out of your door. You step into the road, and if you don't keep your feet, there is no knowing where you might be swept off to."

As a whole, in this file, I'll write about my experiences while making this site what it is. The aim for this is that _you_, the reader, will understand a little bit more about the way I am building my so-expected-site and maybe join me in this quest into the yet-to-know future.

## Content

### 1. Setting my custom domain in GitHub Pages:

A professor at my university used to say: *"ignorance is expensive"*, and there are many ways in which something can cost you more than expected. In my case, when I finally decided to create my website, one of the first things I did was looking for a host provider. I purchased a basic plan and I payed for it 3 consecutive years and never deploy my site. A word to the wise; there are several platforms that provide, free-of-charge, to host your website. Of course it all depends on what are you looking for but if you want to create your own personal website, I think the most reasonable thing to do is to start using one of this platforms, such as GitHub pages.

Today (10/10/2022), I manage to link my DNS to my GitHub account. It was pretty straight forward but after following all the steps to [configure a custom domain for your GitHub pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), when ever I refreshed my Firefox Web Browser I was still looking at my previous content (not my expected blank canvas), and I didn't know what was happening so I dived into the subject and ended up with this article that relaxed my nerves: [What is domain propagation?](https://whyandhowto.com/thecnical/what-is-domain-propagation) In a nutshell, it takes up to 48h to the root name servers to be updated with your website's DNS information, the only thing I had to do was to wait.

As a newbie, this could be frustrating because you expect to see changes right away, but there is some basic theory that always comes in handy. If you are looking for information about Web Development, one of the best places to start with is [MDN Web Docs](https://developer.mozilla.org/); among the bast documentation, there is [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works) a neat page that will give you the head start in this amazing universe of shared information.

### 2. The content:

With every website comes great information so, what's this precious stuff I want to share with the entire world?

- CV (a.k.a about)
- Research (a.k.a Studies & Notes)
- Portfolio (a.k.a Lab[^2])
- Personal project (a.k.a Brinken)

Content implies meaning and _HTML should be coded to represent the data that will be populated and not based on its default presentation styling._[^3] Writing semantic markup has its benefits, not just to increase the SEO's page ranking but to identify much easier blocks of meaningfull code or to help visually impaired users navigate a page through screen readers.

#### 2.1 Home Page X-rays:

```html
<!DOCTYPE html>
<html lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>tab's title</title>
    </head>
    <body>
        <!-- navigation bar -->
        <nav>
            <ul>
                <li>logo</li>
                <li>home</li>
                <li>2nd page</li>
                <li>3rd page</li>
                <li>...</li>
            </ul>
        </nav>
       <!-- updates & news -->
        <header>
            <section class="headers active">
                <h1>new's header</h1>
                <h2>subtitle</h2>
                <p>brief update description</p>
            </section>
        </header>
        <!-- about -->
        <main>
            <section id="learning-path">
                <ul>
                    <li>
                        <h3>activity 4, <span class="date">date4</span></h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>activity 3, <span class="date">date3</span></h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>activity 2, <span class="date">date2</span></h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>activity 1, <span class="date">date1</span></h3>
                        <p>description</p>
                    </li>
                </ul>
            </section>
            <section id="interests">
                <ul>
                    <li>interest1</li>
                    <li>interest2</li>
                    <li>interest3</li>
                    <li>interest4</li>
                    <li>interest5</li>
                    <li>interest6</li>
                    <li>interest7</li>
                    <li>interest8</li>
                    <li>interest9</li>
                    <li>interest10</li>
                </ul>
            </section>
            <section id="principles">
                <h2>my principles</h2>
                <ol>
                    <li>
                        <h3>principle1</h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>principle2</h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>principle3</h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>principle4</h3>
                        <p>description</p>
                    </li>
                    <li>
                        <h3>principle5</h3>
                        <p>description</p>
                    </li>
                </ol>
            </section>
            <section id="contact">
                <ul>
                    <li id="social-media">
                        <ul>
                            <li>
                                <span class="icon" id="twitter"></span>
                                <button>twitter</button>
                            </li>
                            <li>
                                <span class="icon" id="github"></span>
                                Github,<a href="#">link to proyect.</a>
                            </li>
                    </li>
                    <li id="photo"><img src="#" alt="my-picture"></li>
                    <li id="email">email@domain.com</li>
                </ul>
            </section>
        </main>
        <!-- site map -->
        <footer>
            site map
        </footer>
  </body>
</html>
```

### :beaver: Learning hut:

| Topic |          Description          | Date |  t  | t+h | h |
|:-----:|-------------------------------|:----:|:---:|:---:|:-:|
|Test   |Making db path                 |211021|22:00|23:00|1  |
|Content|Adding content to website 		|220103|22:30|23:31|1  |
|Content|Adding content to website 		|220104|20:20|21:49|1.5|
|Content|Addinf content to website      |220106|22:30|23:00|0.5|	


[^1]: Lord of The Rings.
[^2]: got the idea from [Jen Simmons's lab](https://labs.jensimmons.com)
[^3]: [Semantics in HTML -MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
