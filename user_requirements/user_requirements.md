# Chuck Norris Requirements 📝

No pressure, but Chuck Norris needs a new website building in React. 😅

The following document is a list of User Requirements for the site. 

If the website isn't up to scratch, Chuck Norris *will* round house kick you in the face. 

His requirements are as follow:

## Requirement 1 - Chuck Card 🥋

- In `chuck_card.tsx` the `<h2>` must display Chucks greeting (which is included in useState in `App.tsx`). To display Chucks greeting pass it down to `<ChuckCard />` through props. 

- In `chuck_card.tsx` the `<img/>` element must display a picture of Chuck. Replace the string "Chuck image here!" with the ChuckImage object (no quote marks required).

## Requirement 2 - Chuck Info ℹ️

- The page must display some information about Chuck. In `chuck_info.tsx` use props to display how many whales Chuck has saved and how many round house kicks he has done.

## Requirement 3 - Chuck Jokes 🃏

- The page must display some jokes about Chuck. These jokes can be found in one of the useState declarations. Using what you know about JavaScript, `.map()` over jokes and return the `<ChuckJokes />` component underneath the heading "Jokes: ".

- Pass the joke down to `<ChuckJokes />` using props 

## Extension 🔥

- Underneath Jokes, create a heading with the text "Filtered Jokes: "

- Create a variable called `const filteredJokes` and assign some logic to it that filters jokes based on whether they have an id of 3. 

Hint: remember to consider what type this should be, refer to `joke.ts`

- Beneath the heading "Filtered Jokes: " map over filtered jokes. Only the joke with the id of 3 should appear. 


## The End 🙌

Take a deep sigh of relief. You've survived Chuck...

This time.
