---
title: "Let's Make It Better!"
coverImage: '/assets/blog/third-post/excerpt-default.png'
date: '2023-03-29T18:10:07.322Z'
author:
  name: Chris Miller
  picture: '/assets/blog/authors/chris.jpeg'
ogImage:
  url: '/assets/blog/third-post/excerpt-default.png'
---

Now that we made it through our excerpt debacle, I got to thinking, do we really have to set that manually for each post?

As it turns out, we do not! 

---

I took a trip over the gray-matter (used by blog-starter template to parse meta data from md files) docs and
reviewed the excerpt option examples.

![Image](/assets/blog/third-post/excerpt-default.png)


All we need to do is add another instance of the default frontmatter delimiter, `---` wherever we want our excerpt to end.

Then, we update our api.ts file to pass in option excerpt = true and set the field:

![Image](/assets/blog/third-post/good-excerpt.png)


## Sure beats this:

![Image](/assets/blog/third-post/bad-excerpt.png)

## Cool.


