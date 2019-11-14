function healthNews(){
    return $.ajax({
        url:'https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
        datatype:'jsonp',
        success:function(result){
            console.log(result);
                
            $.each(result.articles, function(i, item){
            
                console.log( i + '<br>' + item.title + '<br>' + item.content);
                var news_title = item.title;
                var news_content = item.description;
                var news_image = item.urlToImage;
                var news_url = item.url;

                $('.news-Section').append(`
                    <div class = "card" data-aos="fade-down">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${news_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${news_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${news_content} </p>
                            <div class="share">
                                <div class="read">
                                    <button> <a href="${news_url}" target="_blank"> Read More </a> </button>
                                </div>
                                <div class="social-share">
                                    <!-- <i class="fa fa-share-alt fa-1x"></i> -->
                                    <div class="socials">
                                    <a class="was" href="https://wa.me/?text=${news_content} + '' + ${news_url}  +  shared from Newsifyapp.netlify.com "
                                    target="_blank"> <i class="fab fa-whatsapp" aria-hidden="true"></i> Share </a>

                                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                                            data-text="News Update: ${news_content} " data-url="${news_url}" data-hashtags="Newsifyapp"
                                            data-show-count="false">Tweet</a>
                                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                `)

                // if (result.articles && i == 5) {
                //     return false;
                // }
                
                $('.newsHeading').text(news_title);
                
                
            });
            
        },
        error:function(){
           // alert('error loading health news via api');
           $('.news-Section').append(`
           <div class="alert alert-danger" data-aos = "fade-down">
           <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Error!</strong> Failed to get health news feed for user
</div>

           `)
            
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
                var sport_content = items.description;
                var sport_image = items.urlToImage;
                var sport_url = items.url;

                $('.sport-section').append(`
                    <div class = "card" data-aos="fade-down">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${sport_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${sport_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${sport_content} </p>
                            <div class="share">
                                <div class="read">
                                    <button> <a href="${sport_url}" target="_blank"> Read More </a> </button>
                                </div>
                                <div class="social-share">
                                    <!-- <i class="fa fa-share-alt fa-1x"></i> -->
                                    <div class="socials">
                                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                                            data-text="News Update: ${sport_content} " data-url="${sport_url}" data-hashtags="Newsifyapp"
                                            data-show-count="false">Tweet</a>
                                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                        <a class="was" href="https://wa.me/?text=${sport_content} + '' + ${sport_url}  +  shared from Newsifyapp.netlify.com "
                                            target="_blank"> <i class="fab fa-whatsapp" aria-hidden="true"></i> Share </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)

                // if (sport.articles && i == 5) {
                //     return false;
                // }
                $('.newsHeading').text(sport_title);
                
            })
        },
        error:function(){
            $('.sport-section').append(`
           <div class="alert alert-danger" data-aos = "fade-down">
           <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Error!</strong> Failed to get sport news feed for user
</div>

           `)
            
        }
        
    })
    }

function SciNews(){
        return $.ajax({
            url:'https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
            datatype:'jsonp',
            success:function(science){
            
            $.each(science.articles, function(i, items){
                
                var sci_title = items.title;
                var sci_content = items.description;
                var sci_image = items.urlToImage;
                var sci_url = items.url;

                $('.science-section').append(`
                    <div class = "card" data-aos="fade-down">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${sci_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${sci_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${sci_content} </p>
                            <div class="share">
                                <div class="read">
                                    <button> <a href="${sci_url}" target="_blank"> Read More </a> </button>
                                </div>
                                <div class="social-share">
                                    <!-- <i class="fa fa-share-alt fa-1x"></i> -->
                                    <div class="socials">
                                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                                            data-text="News Update: ${sci_content} " data-url="${sci_url}" data-hashtags="Newsifyapp"
                                            data-show-count="false">Tweet</a>
                                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                        <a class="was" href="https://wa.me/?text=${sci_content} + '' + ${sci_url}  +  shared from Newsifyapp.netlify.com "
                                            target="_blank"> <i class="fab fa-whatsapp" aria-hidden="true"></i> Share </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `)

                // if (edu.articles && i == 5) {
                //     return false;
                // }
               
                
            })
        },
        error:function(){
            $('.science-section').append(`
            <div class="alert alert-danger" data-aos = "fade-down">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
   <strong>Error!</strong> Failed to get Science & Tech news feed for user
 </div>
 
            `)
                     }
        
    })
    }


function education(){
        return $.ajax({
            url:'https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0',
            datatype:'jsonp',
            success:function(education){
            
            $.each(education.articles, function(i, items){
                
                var edu_title = items.title;
                var edu_content = items.description;
                var edu_image = items.urlToImage;
                var edu_url = items.url;

                $('.education-section').append(`
                    <div class = "card" data-aos="fade-down">
                        <div class="card-header">
                            <p class = "news-title"> <b> ${edu_title}  </b> </p>
                        </div>
                        <div class = "card-image">
                        <img src = "${edu_image}">
                        </div
                        <div class="card-content">
                            <p id="news-content"> ${edu_content} </p>
                            <div class="share">
                                <div class="read">
                                    <button> <a href="${edu_url}" target="_blank"> Read More </a> </button>
                                </div>
                                <div class="social-share">
                                    <!-- <i class="fa fa-share-alt fa-1x"></i> -->
                                    <div class="socials">
                                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                                            data-text="News Update: ${edu_content} " data-url="${edu_url}" data-hashtags="Newsifyapp"
                                            data-show-count="false">Tweet</a>
                                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                        <a class="was" href="https://wa.me/?text=${edu_content} + '' + ${edu_url}  +  shared from Newsifyapp.netlify.com "
                                            target="_blank"> <i class="fab fa-whatsapp" aria-hidden="true"></i> Share </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `)

                
                $('.newsHeading').text(edu_title);
                
            })
        },
        error:function(){
            $('.education-section').append(`
            <div class="alert alert-danger" data-aos = "fade-down">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
   <strong>Error!</strong> Failed to get Education news feed for user
 </div>
 
            `)
                     }
        
    })
    }

$(document).ready(function(){
    
    
    healthNews()
    sportNews()
    SciNews()  
    education()
    
    AOS.init();           
});

