function healthNews(){
    return $.ajax({
        url:'https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
        datatype:'jsonp',
        success:function(result){
            console.log(result);
                
            $.each(result.articles, function(i, item){
            
                console.log( i + '<br>' + item.title + '<br>' + item.content);
                var news_title = item.title;
                var news_content = item.content;
                var news_image = item.urlToImage;

                $('.news-Section').append(`
                    <div class = "card">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${news_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${news_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${news_content} </p>
                        </div>
                    </div>
                    
                
                `)

                if (result.articles && i == 5) {
                    return false;
                }
                
                $('.newsHeading').text(news_title);
                
                
            });
            
        },
        error:function(){
            alert('error loading health news via api');
        }
    });
    }

function sportNews(){
        return $.ajax({
            url:'https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
            datatype:'jsonp',
            success:function(sport){
            console.log(sport);
            $.each(sport.articles, function(i, items){
                
                var sport_title = items.title;
                var sport_content = items.content;
                var sport_image = items.urlToImage;
                var sport_url = items.url;

                $('.sport-section').append(`
                    <div class = "card">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${sport_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${sport_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${sport_content} </p>
                        </div>
                    </div>
           
                `)

                if (sport.articles && i == 5) {
                    return false;
                }
                $('.newsHeading').text(sport_title);
                $('.card-image').click(function(){
                    alert('works');
                   // window.open('sport_url', '_blank', 'resizable=no', 'false');
                   $('.sport-section').load('${sport_url}');
                })

            })
        },
        error:function(){
            console.log('Error loading feeds via api');
            alert('Error loading feeds via api');
        }
        
    })
    }

function SciNews(){
        return $.ajax({
            url:'https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
            datatype:'jsonp',
            success:function(science){
            
            $.each(science.articles, function(i, items){
                
                var edu_title = items.title;
                var edu_content = items.content;
                var edu_image = items.urlToImage;
                var edu_url = items.url;

                $('.science-section').append(`
                    <div class = "card">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${edu_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${edu_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${edu_content} </p>
                        </div>
                    </div>
                
                `)

                if (edu.articles && i == 5) {
                    return false;
                }
                $('.newsHeading').text(edu_title);
                $('.card-image').click(function(e){
                    alert('works');
                    e.preventDefault();
                    const url = edu_url;
                    window.open(url,'_blank', 'resizable', 'false');
                })

            })
        },
        error:function(){
            alert('error loading science and tech news via api');
        }
        
    })
    }

$(document).ready(function(){
    
    healthNews()
    sportNews()
    SciNews()  
               
});

