function addContributor(imageUrl, contributorName, githubLink, linkedinLink) {
    var contributorsContainer = document.getElementById('contributors-container');

    var contributorCard = document.createElement('div'); //duv created with class card
    contributorCard.className = 'card';

    var imgSection = document.createElement('div');
    imgSection.className = 'img-sec'; //image 

    var img = document.createElement('img');
    img.src = imageUrl;
    //img dimension
    img.height = '150';
    img.width = '150';

    imgSection.appendChild(img);
    var infoSection = document.createElement('div');
    infoSection.className = 'info';

    var nameLabel = document.createElement('div');
    nameLabel.className = 'label';
    nameLabel.textContent = contributorName;

    var descLabel = document.createElement('div');
    descLabel.className = 'desc';
    descLabel.textContent = 'Contributor';
    //social link section
    var socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    //github
    var githubLinkElement = document.createElement('a');
    githubLinkElement.href = githubLink;
    githubLinkElement.target = '_blank';

    var githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github fa-2x hero';
    githubLinkElement.appendChild(githubIcon);

    //linkedin
    var linkedinLinkElement = document.createElement('a');
    linkedinLinkElement.href = linkedinLink;
    linkedinLinkElement.target = '_blank';

    var linkedinIcon = document.createElement('i');
    linkedinIcon.className = 'fa-brands fa-linkedin fa-2x hero';
    linkedinLinkElement.appendChild(linkedinIcon);

    socialLinks.appendChild(githubLinkElement);
    socialLinks.appendChild(linkedinLinkElement);

    infoSection.appendChild(nameLabel);
    infoSection.appendChild(descLabel);
    infoSection.appendChild(socialLinks);

    contributorCard.appendChild(imgSection);
    contributorCard.appendChild(infoSection);

    contributorsContainer.appendChild(contributorCard);
}



var imageUrl = 'https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png';
var contributorName = 'Sarthak Vishwakarma';
var githubLink = 'https://github.com/hackbysarthak03';
var linkedin = 'https://www.linkedin.com/in/hellosarthak/';
addContributor(imageUrl, contributorName, githubLink);
var imageUrl = 'https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png';
var contributorName = 'Tejas Mishra';
var githubLink = 'https://github.com/Tejasmishr';
var linkedin='https://www.linkedin.com/in/tejasmishr/'
addContributor(imageUrl, contributorName, githubLink,linkedin);





// --------------------------------------Don't Change Above Code---------------------------


// Format Of Adding Team Names  ----->>>
//Step 1 : call the Function addContributors()
//pass the values your () image url , Your Name , Your github account link )


// -- >  addContributor(Url Of Image, contributor Name (Your Name), github Account Link , linkedin account link);

addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Aditya Gaur","https://github.com/AdityaGaur7","#")

addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Aaradhaya Singh","https://github.com/aaradhayasingh811","#")

addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Meet Thakur","https://github.com/MeetThakur","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Visa Coder","https://www.github.com/codeWithVisa","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Nalukui malimba","https://github.com/nalukui01","#")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Anjali Gupta","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Hrishap Joshi","https://github.com/Hrishap")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Md Faizan Khan","https://github.com/thefznkhan")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Saleh Ahmed","https://github.com/SalehAhmed10")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Bishal Roy","https://github.com/R0Y15")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Saurabh Singh","https://github.com/saurabhsingh720")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Mateo Álvarez","https://github.com/drifterDev")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Ankit Goyal","https://github.com/Ankit9126")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Varsha Awasthi","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png"," Shubham Goyal","https://github.com/ShubhamGoyal7125")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Aastha Gupta","https://github.com/motivated-star")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Prakash Mondal","https://github.com/rko0211")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Deepak Maurya","https://github.com/deepakmaur")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Kartik Labhshetwar","https://github.com/KartikLabhshetwar")

addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Piyush Kumar Tyagi","https://github.com/piyushtyagiofficial")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Dhiraj Laulkar","https://github.com/githubdhiraj")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Reajul Haque Reayz","https://github.com/Reayz")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Bhushan K   ","https://github.com/KBhushan07","#")