const teamStore = document.getElementById('basicTeam');

teamEmptyStorage = "";

team.map((item, index)=>{
	teamEmptyStorage += `
	<div class="row team-list sort-destination" data-sort-id="team">
	<div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
	<span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
	<span class="thumb-info-wrapper">
	<a href="about-me.html">
	<img src="${item.photo}" class="img-fluid" alt="">
	<span class="thumb-info-title">
	<span class="thumb-info-inner">${item.name}</span>
	<span class="thumb-info-type">${item.position}</span>
	</span>
	</a>
	</span>
	<span class="thumb-info-caption">
	<span class="thumb-info-caption-text">${item.description}</span>
	<span class="thumb-info-social-icons mb-4">
	<a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i><span>Facebook</span></a>
	<a href="http://www.linkedin.com/"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a>
	</span>
	</span>
	</span>
	</div>
	`
})

teamStore.innerHTML = teamEmptyStorage;

console.log(team)












// const basicTeamStore = document.getElementById('basicTeam');

// basicTeamMembers = "";

// team.map((item, index)=>{
//     basicTeamMembers = `	
//     <div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
// 	<span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
// 	<span class="thumb-info-wrapper">
// 	<a href="about-me.html">
// 	<img src="${item.photo}" class="img-fluid" alt="">
// 	<span class="thumb-info-title">
// 	<span class="thumb-info-inner">${item.name}</span>
// 	<span class="thumb-info-type">${item.position}</span>
// 	</span>
// 	</a>
// 	</span>
// 	<span class="thumb-info-caption">
// 	<span class="thumb-info-caption-text">${item.description}</span>
// 	<span class="thumb-info-social-icons mb-4">
// 	<a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i><span>Facebook</span></a>
// 	<a href="http://www.linkedin.com/"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a>
// 	</span>
// 	</span>
// 	</span>
// 	</div>
//     `
// })

// basicTeamStore.innerHTML = basicTeamMembers;

// console.log(team)
// console.log(basicTeamStore)
// console.log(basicTeamMembers)



