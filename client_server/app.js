const express = require('express');
const Blog = require('./models/blog');
const mongoose = require('mongoose');


const app = express();
const URI = 'mongodb+srv://ateeshkumar:ykrzyb83bzTo1Yzw@cluster0.wqn3ksp.mongodb.net/Blog?retryWrites=true&w=majority';
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log("Connected to DB");
app.listen(3000);
})
.catch((err)=>{Console.log(err)});
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet:'By Ateesh Kumar',
//         body:'app.listen(3000)'
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

app.get('/',(req,res)=>{
    // const blogs = [
    //     {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, autem.'},
    //     {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, autem.'},
    //     {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, autem.'}
    // ];
    res.redirect('/blogs');
    

    
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/blogs',(req,res)=>{
    Blog.find()
    .then((blogs)=>{
        res.render('index',{title:'Home',blogs});
    }).catch((err)=>{
        console.log(err);
    })
});
app.post('/blogs',(req,res)=>{
    const blogs = new Blog(req.body)
    blogs.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
});
app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog:result,title:'Blog Details'});
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html',{root:__dirname});
});
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Creat a New blog'});
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html',{root:__dirname});
});

app.use((req,res)=>{
    res.render('404',{title:'404'});
})