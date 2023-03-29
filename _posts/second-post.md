---
title: 'Second Verse...'
excerpt: "same as the first, but a little bit louder and a whole lot worse! Don't worry, it's not really an error (hopefully) - read on for the fix."
coverImage: '/assets/blog/second-post/cover.png'
date: '2023-03-28T16:55:07.322Z'
author:
  name: Chris Miller
  picture: '/assets/blog/authors/chris.jpeg'
ogImage:
  url: '/assets/blog/second-post/cover.png'
---

same as the first, but a little bit louder and a whole lot worse! Don't worry, it's not really an error (hopefully) - read on for the fix.

Full disclaimer: markdown noob here

## Gotcha

![Image](/assets/blog/second-post/markdown.png)

I ran into a little bit of trouble when I first attempted to update my own blog post page in the source code for this site. After updating the excerpt property in the markdown file (note the badly misplaced tick for example), I was greeted to this:

![Image](/assets/blog/second-post/cover.png)

## THE HORROR!!

The fix is a simple one (I'm not disclosing how long it took me to figure out, though)

Just wrap the string in double instead of single quotes and we're good to go!

![Image](/assets/blog/second-post/fix.png)

![Image](/assets/blog/second-post/business.png)

## Nice.