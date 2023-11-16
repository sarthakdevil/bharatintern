function toggleMenu() {
  var ul = document.querySelector('nav > ul');
  ul.classList.toggle('show');
}
var card1=document.getElementById("card1");
fetch("https://api.github.com/users/Sarthakdevil")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the data
    console.log(data);
    heading=document.createElement('h1');
    heading.innerHTML=`github: ${data.login}`;
    heading.style.color="white"
    card1.appendChild(heading);
    
    img=document.createElement('img');
    img.id="git_avatar";
    img.src=data.avatar_url;
    img.alt=data.login;
    img.height='200';
    img.width='200';
    card1.appendChild(img);

    para1=document.createElement('p');
    para1.id="git_follower";
    para1.innerHTML=`Followers :${data.followers}`;
    para1.style.color="white";
    card1.appendChild(para1);

    para2=document.createElement('p');
    para2.id="git_repo";
    para2.style.color="white";
    para2.innerHTML=`Public Repositories :${data.public_repos}`;
    card1.appendChild(para2);

    para3=document.createElement('p');
    para3.id="git_bio";
    para3.style.color="white";
    para3.innerHTML=`Bio :${data.bio}`;
    para3.style.inlinesize="50px";
    card1.appendChild(para3);

  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#card1",{
    duration:0.8,
    y:-500,
    ScrollTrigger:"#trigger",
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#card2",{
    duration:1.2,
    y:-500,
    ScrollTrigger:"#trigger"
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#card3",{
    duration:1.7,
    y:-500,
    ScrollTrigger:"#trigger"
  });
  gsap.to("#landingpage>img",{
    duration:0.5,
    x:10,
    ScrollTrigger:"#landingpage"
  });