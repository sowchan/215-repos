var postsData = [];

function addListeners(){
    $("nav a").click(function(e) {
        e.preventDefault();
        var id = e.currentTarget.id;
        var posts = postsData[id];
        console.log(postsData[id]);
        if (posts){
            var postString = `<p>Title: ${post.title}</p>`

        $(".blog-holder").html(`
        <p>title: ${posts.title}</p>
            <p>Author: ${posts.author}</p>
            <p>publishDate: ${posts.publishDate}</p>
            <p>story: ${posts.story}</p>
            <div>
            <ul>`,
             $.each(post.comments, function(idx.comment){
             }
            `<li>${comment.userName}</li>`;
            </ul>
            </div>`
            );
    
    }})
}



function getData(){
    $.getJSON("../data/data.json", function(blogPosts){
        console.log(blogPosts);
        postsData = blogPosts;

        $.each(postsData, function(idx, value){
            if (idx<3)
            $("nav").append(`<a id="${idx}" href="#">${value.title}</a>`)
        })


        addListeners();
    })
}

$(document).ready(function(){
    getData();
})