require('dotenv').config()
console.log('my name is kaif');

const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 92,
  "public_gists": 4,
  "followers": 30453,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2024-08-30T23:09:51Z"
}
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('my name is kaif')
})

app.get('/login',(req, res) => {
    res.send('<h1>what is your name</h1>')
} )

app.get('/youtube', function(req, res) {
    res.send('<h2>teacher hitesh choudhary</h2>')
})

app.get('/hitesh', (req,res) => {
   res.json(github)
})

app.get(process.env.PORT, function(req, res) {
    res.send('<h2>teacher hitesh choudhary</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
