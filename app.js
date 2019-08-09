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
	document.getElementById("browserTabTitle").innerHTML = generalInfo.browser_tab_title;
};

init();

// –––––––––––––––––––––––––     shortcuts to initial index.html divs     –––––––––––––––––––––––––


const html = document.getElementById("html");
const headDiv = document.getElementById("headDiv");
const bodyDiv = document.getElementById("bodyDiv");


// –––––––––––––––––––––––––     loadable html content / divs etc     –––––––––––––––––––––––––


const headTitle = `<h1>` + generalInfo.header_main_title + `</h1>`;
const headSubTitle = `<h2>` + generalInfo.header_sub_title + `</h2>`;

let homeText = `<div class="borderWrapper">`
for (let i = 0; i < generalInfo.header_text.length; i++) {
	homeText += `<p>` + generalInfo.header_text[i] + `</p>`
};
homeText += (
	  `<a class="headerLink" href="">` 
	+ 	`home`
	+ `</a>`
	+ `<a class="headerLink" target="new" href="` + generalInfo.add_assignment_link + `">` 
	+ 	generalInfo.add_assignment_text
	+ `</a>`
	+ `</div>`
);



let homeLinks = ""
for (let i = 0; i < generalInfo.assignment_links.length; i++) {
	if (generalInfo.assignment_links[i].show_link) {
		homeLinks += (
					`<a id="` + generalInfo.assignment_links[i].search_id + `"><div class="link rootLink">` 
					+ generalInfo.assignment_links[i].link_text
					+ `</div></a>`
		);
	};
};

const drawingBody = `<h3>Drawing Assignments:</h3>`;
const twoDDesignBody = `<h3>2D Design Assignments:</h3>`;
const threeDDesignBody = `<h3>3D Design Assignments:</h3>`;
const paintingBody = `<h3>Painting Assignments:</h3>`;
const sculptureBody = `<h3>Sculpture Assignments:</h3>`;
const introToArtBody = `<h3>Introduction to Art Assignments:</h3>`;
const artHistoryBody = `<h3>Art History Assignments:</h3>`;

const addAssignmentFooter = (
	  `<p class="addAssignmentFooter">` + generalInfo.footer_text_01 
	+ 	`<span id="uploadLink">` 
	+ 		`<a target="new" href="` + generalInfo.add_assignment_link + `">` 
	+ 			generalInfo.footer_link
	+ 		`</a>`
	+ 	`</span>` + generalInfo.footer_text_02
	+ `</p>`
);


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

const infoModal = (n) => {
		alert("Uploaded by " + assignments[n].author + ", " + assignments[n].uploadYear + ".");
	// if (assignments[state.assignmentNumber].author !== "") {
	// 	alert("Uploaded anonymously, " + assignments[n].uploadYear + ".");
	// } else {
	// 	alert("Uploaded by " + assignments[n].author + ", " + assignments[n].uploadYear + ".");
	// };
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
	headDiv.style.opacity = (".15");
	bodyDiv.style.opacity = (".15");
	// headDiv.style.filter = ("blur(1px)");
	// bodyDiv.style.filter = ("blur(1px)");
};

const loadHomeListeners = () => {
	if (generalInfo.assignment_links[0].show_link) {document.getElementById("drawing").addEventListener( "click", loadDrawing );};
	if (generalInfo.assignment_links[1].show_link) {document.getElementById("twoDDesign").addEventListener( "click", loadTwoDDesign );};
	if (generalInfo.assignment_links[2].show_link) {document.getElementById("threeDDesign").addEventListener( "click", loadThreeDDesign );};
	if (generalInfo.assignment_links[3].show_link) {document.getElementById("painting").addEventListener( "click", loadPainting );};
	if (generalInfo.assignment_links[4].show_link) {document.getElementById("sculpture").addEventListener( "click", loadSculpture );};
	if (generalInfo.assignment_links[5].show_link) {document.getElementById("introToArt").addEventListener( "click", loadIntroToArt );};
	if (generalInfo.assignment_links[6].show_link) {document.getElementById("artHistory").addEventListener( "click", loadArtHistory );};
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
		if (assignments[i].images.length > 0) {
			state.assignment = assignments[i];
			imageFile = (`class="modalLinkedThumbnail" onclick="updateState(` + i + `); openModal(` + i + `);"`);
		} else {
			imageFile = ``;
		};
		infoButton = ``;


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
			updateState(i);
			bodyDiv.innerHTML += (
					`<div class="row">` 
				+	  	`<div class="column columnOne"">`
				+	  		`<a ` + imageFile + `>`
				+	 			`<img class="thumbnail" src="` + thumbnailFile + `">`
				+	 		`</a>`
				+ 		`</div>`
				+ 		`<div class="column columnTwo assignmentCardDiv">`
				+ 			`<h3 class="assignmentTitle">` + assignments[i].title + `</h3>`
				+ 			`<div class="assignmentCardLinkGroup">`
				+ 				googleLinkATag
				+ 				wordFileATag
				+ 				pdfATag
				+ 				infoButton
				+ 			`</div>`
				+ 		`</div>`
				+ 	`</div>`
			);
			assignmentCounter ++;
		};
	};
	if (!assignmentCounter) {
		bodyDiv.innerHTML += `<p class="row">Sorry, no assignments yet.</p>`;
	};
	if (generalInfo.show_footer_text) { bodyDiv.innerHTML += addAssignmentFooter };
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


if (construction_mode) {
	document.getElementById("body").innerHTML = (
		  `<h2>` + construction_mode_text.construction_title + `</h2>`
		+ `<p>` + construction_mode_text.construction_text + `</p>`
	)
} else { refresh() };
headDiv.addEventListener("click", loadHome);