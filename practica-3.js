"use strict"

class User{
  constructor(name, lastName, nickname, date){
    this.name = name;
    this.lastName = lastName;
    this.nickname = nickname;
    this.date = date;
    this.posts = [];
    this.friends = [];
  }
  
  post(content){
    let post = new Post(content, this);
    this.posts.push(post);
    this.logPost(content, post.date);
    this.notifiedFriends(post);
  }

  comment(content, post){
    if(content.length <= 100){
      let comment = new Comment(content, this, post);
      this.logComment(comment);
      post.author.postHasBeenCommentedBy(post, comment)
    }
    else{
      console.log('El comentario es muy largo');
    }
  }

  postHasBeenCommentedBy(post, comment){
    console.log('-.-.-.-.-.-.-.-.-.-.-');
    console.log('Notificacion');
    console.log('Post: ' + post);
    console.log('Usuario: ' + comment.author);
    console.log('Comentario: ' + comment.content);
    console.log('-.-.-.-.-.-.-.-.-.-.-');
  }

  logComment(comment){
    console.log('-----------------------');
    console.log('Quien: ' + this.nickname);
    console.log('Que: ' + comment.content);
    console.log('Cuando: ' + comment.date);
    console.log('-----------------------');
  }
  
  logPost(content, date){
    console.log('-----------------------');
    console.log('Quien: ' + this.nickname);
    console.log('Que: ' + content);
    console.log('Cuando: ' + date);
    console.log('-----------------------');
  }
  
  notifiedFriends(post){
    this.friends.map(f => f.postDoneBy(this, post));  
  }

  postDoneBy(aUser, aPost){
    console.log('-.-.-.-.-.-.-.-.-.-.-');
    console.log('Notificacion');
    console.log('Post: ' + aPost);
    console.log('Usuario: ' + aUser);
    console.log('-.-.-.-.-.-.-.-.-.-.-');
  }
  
  add(friend){
    if(!this.isFriend(friend))
      this.friends.push(friend);   
  }
  remove(friend){
    if(this.isFriend(friend))
      this.friends = this.friends.filter(f => f !== friend);
  }

  isFriend(friend){
    return this.friends.includes(friend);
  }
}

//--------------------------

class Post{
  constructor(content, author){
    this.content = content;
    this.author = author;
    this.date = new Date();
    this.comments = [];
  }
}

class Comment{
  constructor(content, author, post){
    this.content = content;
    this.author = author;
    this.post = post;
    this.date = new Date();
  }
}

//--------------------------



let user1 = new User('Aaa', 'Bbb', 'Ccc', new Date('April 18, 1989 00:00:00'));
let user2 = new User('Ddd', 'Eee', 'Fff', new Date('April 10, 1989 00:00:00'));

user1.add(user2);
user2.add(user1);

user1.post('Hola');
user1.post('Chau');

user2.comment('Holaaaaaaaaaaaa', user1.posts[0]);

//console.log(user1);

//console.log(user1.posts[0]);
