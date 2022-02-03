var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
        
            text: 'Boa tarde Aaron',
            timestamp: '2/3/2022 19:01:20'
        },{
        
        text: 'Nice to day to harvest Jaboticaba',
        timestamp: '2/3/2022 06:01:20'
    },{
        
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [{
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var containerDiv = document.getElementById("container");


var tweetDiv = document.getElementById("tweets");


function minifiedFollowerCount(){
if (user1.followerCount>999999){
    let minifiedValue= user1.followerCount/1000000
    return minifiedValue+"M"
}
}



function timeStamp(timestamp){
var myDate = new Date(timestamp);
var result = myDate.getTime();
var timeNow=Date.now()
var timeAgo=timeNow-result;
var finalTimeAgo=timeAgo/(1000*60*60)
if(finalTimeAgo<1){
    return finalTimeAgo/60+"m"
} else if(finalTimeAgo>=1&&finalTimeAgo<24){
    return Math.floor(finalTimeAgo)+"h"
} else{
    return Math.floor(finalTimeAgo/24)+" days ago"
}

}







containerDiv.innerHTML = `
  <img src="/${user1.coverPhotoURL}" id="coverphoto"/>
  <div class='under-cover'>
    <div class='left-hand-side'>
        <img src="/${user1.avatarURL}"id="main-avatar-photo"/>
        <div id="headernamecont">
            <h1 id="headername">${user1.displayName}</h1>  
            <img src="/assets/Twitter_Verified_Badge.png"id="verified"/>
        </div>
        <p id="username">${user1.userName}</p>
    </div>
    <button class='btn btn-following'>Following</button>
    <button class='btn btn-unfollow'>Unfollow</button>
    <button class='btn btn-follow'>Follow</button>
    
  </div>
  <div class="joined">
  <img src="/assets/calendar.png" id='calendar'><p>Joined ${user1.joinedDate}</p> 
  </div>
  <div id="follow-section">
  <span>${user1.followingCount}</span><p>Following</p>
  <span>${minifiedFollowerCount()}</span><p>Followers</p>
  </div>
  `




user1.tweets.forEach(function (tweets, i) {
    var individualTweetContainer = document.createElement('div');
    individualTweetContainer.innerHTML = `
    <div class="tweet-container">
        <img src="/${user1.avatarURL}"/> 
        <div class='right-hand-side-tweet'>
            <div class='user-info-tweet'>
                <h2>${user1.displayName}</h2>
                <img src="/assets/Twitter_Verified_Badge.png"class='tweet-badge'/ >
                <h3>${user1.userName}</h3>
                <span>·</span>
                <h3>${timeStamp(tweets.timestamp)}</h3>
            </div>
            <p>${tweets.text}</p>
            <div class='social-interaction'>
             <div class='social-interaction-small'>
              <img src="/assets/comments.png">
              <p>5.2K</p>
             </div>
             <div class='social-interaction-small'>
              <img src="/assets/retweet.png"><p>5.2K</p>
              </div>
              <div class='social-interaction-small'>
              <img src="/assets/like.png"><p>5.2K</p>
              </div>
              <div class='social-interaction-small'>
              <img src="/assets/download.png">
              </div>

            </div>
        </div>
    </div>
    `
    tweetDiv.appendChild(individualTweetContainer)


})

let tab1 = document.body.querySelector('#tab1')
let tab2 = document.body.querySelector('#tab2')
let tab3 = document.body.querySelector('#tab3')
let tab4 = document.body.querySelector('#tab4')

tab1.addEventListener("click", function () {
    tab1.classList.add("active")
    tab2.classList.remove("active")
    tab3.classList.remove("active")
    tab4.classList.remove("active")
})

tab2.addEventListener("click", function () {
    tab1.classList.remove("active")
    tab2.classList.add("active")
    tab3.classList.remove("active")
    tab4.classList.remove("active")
})

tab3.addEventListener("click", function () {
    tab1.classList.remove("active")
    tab2.classList.remove("active")
    tab3.classList.add("active")
    tab4.classList.remove("active")
})

tab4.addEventListener("click", function () {
    tab1.classList.remove("active")
    tab2.classList.remove("active")
    tab3.classList.remove("active")
    tab4.classList.add("active")
})


var btnFollowing = document.body.querySelector('.btn-following');
var btnFollow = document.body.querySelector('.btn-follow');
var btnUnfollow = document.body.querySelector('.btn-unfollow');

btnFollowing.addEventListener("mouseover", function( event ) {
    btnFollowing.style.display = "none";
    btnUnfollow.style.display = "block"
})

btnFollowing.addEventListener("mouseleave", function( event ) {
    btnFollowing.style.display = "block";
    btnUnfollow.style.display = "none"
})


btnUnfollow.addEventListener('click', function(){
    btnFollowing.style.display = "none";
    btnFollow.style.display = "block"
})



btnFollow.addEventListener('click', function(){
    btnFollowing.style.display = "block";
    btnFollow.style.display = "none"
})

const paramsUser1 = new URLSearchParams("?user=user1")

const paramsUser2 = new URLSearchParams("?user=user2")

