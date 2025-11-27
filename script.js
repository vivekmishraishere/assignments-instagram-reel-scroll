let users = [
  {
    userName: "arjun_verma",
    profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
    isFollow: false,
    isLiked: false,
    commentCount: 15,
    likedCount: 340,
    caption: "Chai and chill vibes ☕🇮🇳",
    video: "https://videos.pexels.com/video-files/33349852/14200322_360_640_30fps.mp4",
    shareCount: 22
  },
  {
    userName: "priya_sharma",
    profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    isFollow: true,
    isLiked: true,
    commentCount: 42,
    likedCount: 980,
    caption: "New day, new positivity ✨",
    video: "https://videos.pexels.com/video-files/7505641/7505641-uhd_1440_2560_30fps.mp4",
    shareCount: 30
  },
  {
    userName: "rahul_kapoor",
    profilePhoto: "https://randomuser.me/api/portraits/men/13.jpg",
    isFollow: false,
    isLiked: false,
    commentCount: 10,
    likedCount: 200,
    caption: "Coding + Coffee = Perfect combo ☕💻",
    video: "https://videos.pexels.com/video-files/5613316/5613316-sd_360_640_30fps.mp4",
    shareCount: 12
  },
  {
    userName: "ananya_mehta",
    profilePhoto: "https://randomuser.me/api/portraits/women/14.jpg",
    isFollow: true,
    isLiked: false,
    commentCount: 29,
    likedCount: 670,
    caption: "Desi vibes today 💛🇮🇳",
    video: "https://videos.pexels.com/video-files/2795404/2795404-sd_360_640_25fps.mp4",
    shareCount: 18
  },
  {
    userName: "vikram_singh",
    profilePhoto: "https://randomuser.me/api/portraits/men/15.jpg",
    isFollow: false,
    isLiked: true,
    commentCount: 37,
    likedCount: 850,
    caption: "Fitness is not a destination, it's a lifestyle 💪",
    video: "https://videos.pexels.com/video-files/5787236/5787236-sd_360_640_30fps.mp4",
    shareCount: 20
  },
  {
    userName: "aisha_khan",
    profilePhoto: "https://randomuser.me/api/portraits/women/16.jpg",
    isFollow: false,
    isLiked: false,
    commentCount: 14,
    likedCount: 410,
    caption: "Exploring the beauty of India 🇮🇳✨",
    video: "https://videos.pexels.com/video-files/7334751/7334751-sd_360_640_24fps.mp4",
    shareCount: 17
  },
  {
    userName: "siddharth_rao",
    profilePhoto: "https://randomuser.me/api/portraits/men/17.jpg",
    isFollow: true,
    isLiked: false,
    commentCount: 22,
    likedCount: 530,
    caption: "Golden hour hits different 🌅",
    video: "https://videos.pexels.com/video-files/6254849/6254849-sd_360_640_30fps.mp4",
    shareCount: 11
  },
  {
    userName: "nandini_patel",
    profilePhoto: "https://randomuser.me/api/portraits/women/18.jpg",
    isFollow: false,
    isLiked: true,
    commentCount: 55,
    likedCount: 1400,
    caption: "Feeling grateful today 🙏✨",
    video: "https://videos.pexels.com/video-files/7348229/7348229-sd_360_640_24fps.mp4",
    shareCount: 45
  },
  {
    userName: "manish_jain",
    profilePhoto: "https://randomuser.me/api/portraits/men/19.jpg",
    isFollow: true,
    isLiked: false,
    commentCount: 18,
    likedCount: 460,
    caption: "JavaScript mode ON 😄",
    video: "https://videos.pexels.com/video-files/4252807/4252807-sd_506_960_25fps.mp4",
    shareCount: 14
  },
  {
    userName: "kavya_reddy",
    profilePhoto: "https://randomuser.me/api/portraits/women/20.jpg",
    isFollow: true,
    isLiked: true,
    commentCount: 61,
    likedCount: 1700,
    caption: "Music + long drives = perfect day 🎧🚗",
    video: "https://videos.pexels.com/video-files/8348416/8348416-sd_506_960_30fps.mp4",
    shareCount: 52
  }
];

let allReels = document.querySelector(".allReels");

function addData(){
    let sum = "";
users.forEach(function(elem, idx){
    sum = sum + `<div class="reel">
                <video autoplay muted loop src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.profilePhoto}">
                        <h4>${elem.userName}</h4>
                        <button id="${idx}">${elem.isFollow? "Unfollow": "Follow"}</button>
                    </div>
                    <h3 class="description"> ${elem.caption}</h3>
                </div>
                <div class="right">
                    <div id="${idx}" class="like">
                        <h4 class="like-icon">${elem.isLiked? '<i class="ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                        <h6>${elem.likedCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-fill"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-line"></i></i></h4>
                        
                        
                        </div>
                </div>
            </div>`;

            
            allReels.innerHTML = sum;
});

}

addData();

allReels.addEventListener("click", function(dets){
    if(users[dets.target.id].isLiked == true){
        users[dets.target.id].isLiked = false;
        users[dets.target.id].likedCount--;
    }else if(users[dets.target.id].isLiked == false){
        users[dets.target.id].isLiked = true;
        users[dets.target.id].likedCount++
    }

    if(users[dets.target.id].isFollow == true){
        users[dets.target.id].isFollow = false
    } else {users[dets.target.id].isFollow = true};

    addData();
})

