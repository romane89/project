const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/',function(req,res){
    res.send('Hello world');
})

const postsList = [
    {
        id: 1,
        title: 'Post 1',
        content: 'This is the first post'
    }
]
// get all posts
app.get('/posts', function(req,res){
    res.send(postsList);
})

//get a single post
app.get('/posts/:id', function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    const post = postsList.find(function(post){
        return post.id === parseInt(id); 
    })

    console.log(post);

    res.send("Get single post");
})

//create a new post
app.post('/posts', function(req,res){
    console.log(req.body)

    const data = req.body;

    const newPost = {
        id: 2,
        title:'Post 2',
        content: 'This is the second post'
    }
    postsList.push(newPost);

    res.send(newPost);
})

//delete one post

app.delete('/posts/:id', function(req, res){
    const id = req.params.id;
    const post = postsList.find(function(post){
        return post.id === parseInt(id);
    })
    const index = postsList.indexOf(post);

    postsList;splice(index, 1);
    res.send('You have reached the delete route');

})

app.listen(PORT, function(){
    console.log(`example app listening on port ${PORT}!`);
})

app.get('/auth/signin', function(req,res){
    res.send('This is the sign in page');
})