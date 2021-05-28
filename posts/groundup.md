---
title: 'Ground-up'
author: 'Juan M. Rada'
date: '2019-10-23'
description: 'Find your representatives/senator'
tags: ['nextjs', 'mongodb', 'javascript']
---

# Ground-Up

An application to keep track of US representatives.

![NextJS Ground-up](https://cdn1.bbcode0.com/uploads/2021/5/27/ea641796f2ad2572275365e2cbd0bf8a-full.png)

## Technologies Used:

-   NextJs
-   MongoDB
-   Vercel
-   Fastify

## Intro:

I wanted to identify all U.S. congresspersons from both the House of Representatives and the Senate. Thankfully, ProPublica has an API with this data (and much more). I scraped the data, cleaned it, and stored it in MongoDB. I used a serverless function to get the data from MongoDB.

```javascript
export async function getServerSideProps() {
    const { db } = await connectToDatabase()

    const houseRepresentatives = await db.collection('members').find({ chamber: 'house' }).toArray()

    return {
        props: {
            houseRepresentatives: JSON.parse(JSON.stringify(houseRepresentatives)),
        },
    }
}
```

Definitely not the best way to do it... but it works.

## API:

A simple REST API with data about the U.S. Congress and Senate built using Fastify.

### Schema:

```javascript
const membersSchema = new Schema({
    name: { type: String, required: true }, //Full name
    state: { type: String, required: true }, //State
    chamber: { type: String, required: true }, //House or senate
    role: { type: String, required: true }, //Role in house-senate
    gender: { type: String, required: true }, // F-M or other if applies
    party: { type: String, required: true }, //Party
    twitter: { type: String }, //Twitter
})
```

### Endpoints

-   All members: `/api/members/all `
-   Members by state: `/api/members/state/:state`
-   Members by party: `/api/members/party/:party`
-   Members by chamber: `/api/members/chamber/:chamber`
-   Mix previous queries: `/api/{query1}/:query1/{query2}/:query2`

### Check the app

[Check the MERN app here](https://ground-up-1.herokuapp.com/)

[Check the NextJS app here](https://ground-up-v1.jmrada14.vercel.app/)

[Check the code](https://github.com/jmrada14/ground-up-v1)
