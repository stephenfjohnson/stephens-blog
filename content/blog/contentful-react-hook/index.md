---
title: Contentful React Native Hook
date: '2019-07-19T22:12:03.284Z'
description: 'Learn how to fetch data from Contentful with React Hooks'
category: 'React'
---
Recently i had to pull date in from Contentful for a React Native project that i am working on called [backdropfinder.com](http://backdropfinder.com). Looking through the documentation i found that it was still tailored towards classes. Building the fetch with hooks cleaned up the code and made the loading logic very easy. 

Here is the finished CodeSandbox:

[https://codesandbox.io/embed/contentful-react-hook-m1pr2?fontsize=14](https://codesandbox.io/embed/contentful-react-hook-m1pr2?fontsize=14)

First we create a new folder in your project I like to keep all my util hooks in one folder called /hooks. 

I choose to name my files based off of the use structure so i have called this useContentfulData.js

Start by importing React and as of 7-19-2019 using the browser dist at least for React Native

    import React, { useState, useEffect } from 'react';
    import { createClient } from 'contentful/dist/contentful.browser.js';

After importing **createClient** we will add in our SpaceID and Access Token. These can be set as a secret or as variable.

    const SPACE_ID = '************';
    const ACCESS_TOKEN = '*******************************';

Now all we need to do is initialize the client with:

    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });

Now we can create the hook:

The hook is wrapped in an arrow function named useBackdrops in my case.

    const useBackdrops = regionChange => {}

Then i create a new empty object with useState for the incoming Contentful data.

I also create a new bool with useState for the loading status of the data.

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

Now we wrap the Contentful client in a useEffect arrow function. This acts much like componentDidMount and will run on load and any time a new region is passed into my hook.

This getEntries will fetch the content type ‘Backdrop’ from the Contentful API. Then it is going to pass the entries as an object via setData to our state.

The loading is also going to be turned off with setLoading changed to false. We will be able to access the Data and Loading State via the hook when we want to consume the content in the file that we import useBackdrop hook into.

    useEffect(() => {
        client.getEntries({ content_type: 'backdrop' }).then((entries) => {
          setData(entries);
          setLoading(false);
        });
      }, []);

The return statement then takes the data values and loading state and passes it to the file that will be importing the hook.

    return [data, loading];

The last thing to do is export the function(useBackdrops) with:

    export default useBackdrops;

Now that the hook has been created we can import it into your file that you want to use the data in.

    import { useContentfulData } from './useContentfulData';

Once imported we can call the hook inside the arrow function. This will give us the data and loading state as we pass it the region and contentType. 

    const App = () => {
      const [backdropData, loadingBackdropData] = useContentfulData('backdrop');
      const [cityData, loadingCityData] = useContentfulData('city');
    }

This region could be empty if you wanted to fetch all or it could be swapped for a linked date set to provide filtering.

    useContentfulData('city', '<region>');

Now we have the data set in state for the loading and the Contentful data we can write some JSX and logic to show a loading message before the dataset has loaded and show the data as a list.

    if (loadingBackdropData || loadingCityData) {
    	return <h1>Loading</h1>;
    }

First we will use the map function on the data from state to get the individual indexes and data objects.

    {backdropData.items.map((backdrop, i) => {
    	console.log(i, backdrop);
    })}

Now that the data is logging as individuals objects we can drill down and start getting the fields. (This markup will heavily depend upon how you have structured the fields in Contentiful)

    console.log(backdrop.fields.backdropName);

The last thing i will do is add a DIV wrapper with key={i} this insures that each instance is unique in the dom. Now that the content is displaying everything should be set up.

    return <p key={i}>{backdrop.fields.backdropName}</p>;

If you see anything wrong with this code or text please let me know via Twitter or fork the Sandbox and send it to me. I also would love any feed back on this style of content.