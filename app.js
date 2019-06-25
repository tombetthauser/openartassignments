// –––––––––––––––––––––––––     unintentional pho-react state :p     –––––––––––––––––––––––––

let state  = {
	"page": "home",
	"assignmentNumber": "",
	"imageNumber": 0,
	"isModalOpen": false
};

// –––––––––––––––––––––––––     initial function to poulate index.html     –––––––––––––––––––––––––

const init = () => {
	document.getElementsByTagName("body")[0].innerHTML = (
		 	`<div id="headDiv"></div>`
		+ 	`<div id="bodyDiv"></div>`
		+ 	`<div class="modalClass" id="mainModal"></div>`
	);
};

init();

// –––––––––––––––––––––––––     shortcuts to initial index.html divs     –––––––––––––––––––––––––


const html = document.getElementById("html");
const headDiv = document.getElementById("headDiv");
const bodyDiv = document.getElementById("bodyDiv");


// –––––––––––––––––––––––––     loadable html content / divs etc     –––––––––––––––––––––––––


const headTitle = `<h1>OAA</h1>`;
const headSubTitle = `<h2>Open Art Assignments <span class="homeLink">(home)</span></h2>`;

const homeText = (
	  `<p>Browse college art assignments. Download, revise, share, use. Free for ` 
	+ `artists & designed to help art adjuncts share knowledge and build community. ` 
	+ `Want to share your assignments? Upload them ` 
	+ 	`<span id="uploadLink">` 
	+ 		`<a target="new" href="https://docs.google.com/forms/d/e/1FAIpQLSdFWCQAuQOG7rvFbYTdhabgixLXof1wu4XQSF6oRVYZ232r1A/viewform?usp=sf_link">` 
	+ 			`here`
	+ 		`</a>`
	+ 	`</span>.`
	+ `</p>`
);

const homeLinks = (
	  `<ul>` 
	+ `<a class="link" id="drawing"><li>Drawing</li></a>` 
	+ `<a class="link" id="twoDDesign"><li>2D Design</li></a>` 
	+ `<a class="link" id="threeDDesign"><li>3D Design</li></a>` 
	+ `<a class="link" id="painting"><li>Painting</li></a>` 
	+ `<a class="link" id="sculpture"><li>Sculpture</li></a>` 
	+ `<a class="link" id="introToArt"><li>Intro to Art</li></a>` 
	+ `<a class="link" id="artHistory"><li>Art History</li></a>` 
	+ `</ul>`
);

const drawingBody = `<h3>Drawing Assignments:</h3>`;
const twoDDesignBody = `<h3>2D Design Assignments:</h3>`;
const threeDDesignBody = `<h3>3D Design Assignments:</h3>`;
const paintingBody = `<h3>Painting Assignments:</h3>`;
const sculptureBody = `<h3>Sculpture Assignments:</h3>`;
const introToArtBody = `<h3>Introduction to Art Assignments:</h3>`;
const artHistoryBody = `<h3>Art History Assignments:</h3>`;


// –––––––––––––––––––––––––     general use functions - need refactoring :|     –––––––––––––––––––––––––


const loadHome = () => { state.page = "home"; refresh(); };
const loadDrawing = () => { state.page = "drawing"; refresh(); };
const loadTwoDDesign = () => { state.page = "twoDDesign"; refresh(); };
const loadThreeDDesign = () => { state.page = "threeDDesign"; refresh(); };
const loadPainting = () => { state.page = "painting"; refresh(); };
const loadSculpture = () => { state.page = "sculpture"; refresh(); };
const loadIntroToArt = () => { state.page = "introToArt"; refresh(); };
const loadArtHistory = () => { state.page = "artHistory"; refresh(); };

const updateState = (i) => {
	state.assignmentNumber = i;
};

const openModal = (i) => { 
	newImage = assignments[i].images[0];
	document.getElementById("mainModal").style.display = "block";
	document.getElementById("mainModal").innerHTML = (
		 		`<div class='container'>`
		+		    `<a href='#'>`
		+		    `<img class='resize_fit_center' id="modalImage"`
		+		      `src="" />`
		+		    `</a>`
		+		`</div>`
		+		`<div id="modalCloser" onclick="refresh();">&times;</div>`
	);
	if (assignments[i].images.length > 1) {
		document.getElementById("mainModal").innerHTML += (
					`<div id="modalLeft" onclick="imageChange('left');">&#10094;</div>`
			+		`<div id="modalRight" onclick="imageChange('right');">&#10095;</div>`
		);
	};
	document.getElementById("modalImage").src = ("images/" + newImage);
	headDiv.style.opacity = (".4");
	bodyDiv.style.opacity = (".4");
	headDiv.style.filter = ("blur(1px)");
	bodyDiv.style.filter = ("blur(1px)");
};

const loadHomeListeners = () => {
	document.getElementById("drawing").addEventListener( "click", loadDrawing );
	document.getElementById("twoDDesign").addEventListener( "click", loadTwoDDesign );
	document.getElementById("threeDDesign").addEventListener( "click", loadThreeDDesign );
	document.getElementById("painting").addEventListener( "click", loadPainting );
	document.getElementById("sculpture").addEventListener( "click", loadSculpture );
	document.getElementById("sculpture").addEventListener( "click", loadSculpture );
	document.getElementById("introToArt").addEventListener( "click", loadIntroToArt );
	document.getElementById("artHistory").addEventListener( "click", loadArtHistory );
};

const imageChange = (leftRight) => {
	let newImage
	let totalImages = assignments[state.assignmentNumber].images.length;
	if (leftRight === "left") {
		newImage = assignments[state.assignmentNumber].images[(state.imageNumber - 1)];
		state.imageNumber --;
	} else {
		newImage = assignments[state.assignmentNumber].images[(state.imageNumber + 1)];
		state.imageNumber ++;
	};
	if (state.imageNumber >= totalImages) {
		state.imageNumber = 0;
		newImage = assignments[state.assignmentNumber].images[(state.imageNumber)];
	} else if (state.imageNumber < 0) {
		state.imageNumber = totalImages - 1;
		newImage = assignments[state.assignmentNumber].images[(state.imageNumber)];
	};
	document.getElementById("modalImage").src = ("images/" + newImage);
}

const loadAssignments = (assignmentTag) => {
	let assignmentCounter = 0;
	for(i = 0; i < assignments.length; i++) {
		let thumbnailFile;
		let imageFileATag = "";
		let googleLinkATag = "";
		let wordFileATag = "";
		let pdfATag = "";
		if (assignments[i].thumbnail !== "") {
			thumbnailFile = (`images/` + assignments[i].thumbnail);
		} else {
			thumbnailFile = `images/placeholderThumbnail.jpg`;
		};
		if (assignments[i].images.length > 0) {
			state.assignment = assignments[i];
			imageFile = (`class="modalLinkedThumbnail" onclick="updateState(` + i + `); openModal(` + i + `);"`);
		} else {
			imageFile = ``;
		};
		if (assignments[i].googleLink != "") {
			googleLinkATag = (
								`<a class="assignmentLink" target="new" href="` + assignments[i].googleLink + `">google doc</a>`
			);
		};
		if (assignments[i].wordFile != "") {
			wordFileATag = (
								`<a class="assignmentLink" target="new" href="assignments/` + assignments[i].wordFile + `">word</a>`
			);
		};
		if (assignments[i].pdf != "") {
			pdfATag = (
								`<a class="assignmentLink" target="new" href="assignments/` + assignments[i].pdf + `">pdf</a>`
			);
		};
		let addAssignment = false;
		for(n = 0; n < assignments[i].subjects.length; n++) {
			if (assignments[i].subjects[n] === state.page && assignments[i].hide === false) {
				addAssignment = true;
			};
		};
		if (addAssignment === true) {
			let thumbnailPic;
			bodyDiv.innerHTML += (
					`<div class="row">` 
				+	  	`<div class="column columnOne"">`
				+	  		`<a ` + imageFile + `>`
				+	 			`<img class="thumbnail" src="` + thumbnailFile + `">`
				+	 		`</a>`
				+ 		`</div>`
				+ 		`<div class="column columnTwo">`
				+ 			`<h3 class="assignmentTitle">` + assignments[i].title + `</h3>`
				+ 				googleLinkATag
				+ 				wordFileATag
				+ 				pdfATag
				+ 		`</div>`
				+ 	`</div>`
			);
			assignmentCounter ++;
		};
	};
	if (!assignmentCounter) {
		bodyDiv.innerHTML += `<p class="row">Sorry, no assignments yet.</p>`;
	};
};


// –––––––––––––––––––––––––     the page refresh function - implement a switch statement someday :>o     –––––––––––––––––––––––––


const refresh = () => {
	document.getElementById("mainModal").style.display = "none";
	headDiv.innerHTML = headTitle + headSubTitle + homeText;
	if (state.page === "drawing") { bodyDiv.innerHTML = drawingBody; loadAssignments(); }
	else if (state.page === "twoDDesign") { bodyDiv.innerHTML = twoDDesignBody; loadAssignments(); }
	else if (state.page === "threeDDesign") { bodyDiv.innerHTML = threeDDesignBody; loadAssignments(); }
	else if (state.page === "painting") { bodyDiv.innerHTML = paintingBody; loadAssignments(); }
	else if (state.page === "sculpture") { bodyDiv.innerHTML = sculptureBody; loadAssignments(); }
	else if (state.page === "introToArt") { bodyDiv.innerHTML = introToArtBody; loadAssignments(); }
	else if (state.page === "artHistory") { bodyDiv.innerHTML = artHistoryBody; loadAssignments(); }
	else { bodyDiv.innerHTML = homeLinks; loadHomeListeners(); };
	headDiv.style.opacity = ("1");
	bodyDiv.style.opacity = ("1");
	headDiv.style.filter = ("none");
	bodyDiv.style.filter = ("none");
};


// –––––––––––––––––––––––––     loading initial home content / links     –––––––––––––––––––––––––


refresh();
headDiv.addEventListener("click", loadHome);