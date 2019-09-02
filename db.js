// ––––––––––––––– SECTION 01 ––––––––––––––––––––

// first we have the construction mode that turns off the website
// use this if something breaks and you can't figure it out
// changing this to true will turn the website off temporarily!


const construction_mode = false
const construction_mode_text = {
	"construction_title": 	"Under Construction",
	"construction_text": 	"OAA is temporarily being worked on. The page will be back up shortly.",
}





// ––––––––––––––– SECTION 02 ––––––––––––––––––––

// next we have al the general website info
// here you can change the title of the site, the text, the links etc etc


const generalInfo = {
	"browser_tab_title": 	"Open Art Assignment",
	"header_main_title": 	"OAA",
	"header_sub_title": 	"Open Art Assignment",
	"header_text": [

		// paragraph #1
		// duplicate the line below to add more paragraphs if desired, include comma at the end of the line

		"Browse college art assignments. Download, revise, share, use. Free for artists & designed to help art adjuncts share knowledge and build community. Want to share your own assignments? Click the link below.",
		"This is a beta version of OAA. Lots of improvements...",
	],

		// Link to my Google Form:
		// https://docs.google.com/forms/d/1od6CCmDMtKYxUJL8Vgn4MBRTaT9fmJftyCjZRu_EQrA/edit

	"add_assignment_text": "upload assignment",
	"add_assignment_link": "https://forms.gle/EVmwB8rMXd7RbmWi6",
	"assignment_links": [

		// these will appear in order
		// rearrange the order as much as you Want
		// for now don't add or subtract any, well add that later
		// change the wording to the right of "link_text" as much as you want
		// you can also change the "show_link" from true to false if you want to hide any of these
		// for now dont mess with the "search_id" part, we'll add that later

		{ "link_text": "Drawing", 		"show_link": true,		"search_id": "drawing"			},
		{ "link_text": "2D Design", 	"show_link": true,		"search_id": "twoDDesign"		},
		{ "link_text": "3D Design",		"show_link": true,		"search_id": "threeDDesign"		},
		{ "link_text": "Painting", 		"show_link": true,		"search_id": "painting"			},
		{ "link_text": "Sculpture", 	"show_link": false,		"search_id": "sculpture"		},
		{ "link_text": "Intro to Art",	"show_link": true,		"search_id": "introToArt"		},
		{ "link_text": "Art History",	"show_link": true,		"search_id": "artHistory"		},
	],

	// here you can edit or turn off the footer text that links to the upload assignment form
	// change "show_footer_text" to false to turn it off completely

	"show_footer_text": true,
	"footer_text_01": "Want to add an assignment? Upload it ", // the space at the end is important here
	"footer_link": "here",
	"footer_text_02": ".",
}





// ––––––––––––––– SECTION 03 ––––––––––––––––––––

// below are all the assignments
// to make a new one copy and paste any of these and then change all the pertinant info
// remember to add all the appropriate files to the website folder
// make sure to include the "{...}" brackets and all the appropriate commas and quatation marks 
// also, the order does not matter here for now so add things wherever you want :)


const assignments = [
	{
		"title": 		"3D Design Visual Glossary",
		"subjects": 	["threeDDesign"],
		"googleLink": 	"",
		"file": 		"",
		"pdf":	 		"3D Visual Glossary Project.pdf",
		"wordFile":		"3D Visual Glossary Project.docx",
		"thumbnail": 	"3D Design Visual Glossary Thumbnail 65.jpg",
		"images": 		["cats.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"],
		"author": 		"Bill Clinton", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	1967,
		"hide": 		false
	},
	// {
	// 	"title": 		"Medieval Cat Paintings (for debugging)",
	// 	"subjects": 	["painting"],
	// 	"googleLink": 	"http://www.infinitelooper.com/?v=DLzxrzFCyOs",
	// 	"file": 		"",
	// 	"pdf":	 		"",
	// 	"wordFile":		"",
	// 	"thumbnail": 	"catsthumb.jpg",
	// 	"images": 		["cats.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"],
	// 	"author": 		"Bill Clinton", // leave empty quotes (like this: "") for anonymous post
	// 	"uploadYear":	1967,
	// 	"hide": 		false
	// },
	{
		"title": 		"2D Design: Assignment #2",
		"subjects": 	["twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/1-nvTa1dqK-ECMEYb8j0sIJWrjJX9k4kmNGE664FfSMY/edit?usp=sharing",
		"file": 		"2dassignment2",
		"pdf":	 		"2dassignment2.pdf",
		"wordFile":		"2dassignment2.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"ART C131 - Personal Project Proposal",
		"subjects": 	[],
		"googleLink": 	"https://docs.google.com/document/d/1_mpZrHipeW7jlZ5PwF6BfAquP6ZL7diw-r-b9FFM_x4/edit?usp=sharing",
		"file": 		"personalprojectproposal",
		"pdf":	 		"personalprojectproposal.pdf",
		"wordFile":		"personalprojectproposal.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Timeline Assignment: Handout",
		"subjects": 	["artHistory"],
		"googleLink": 	"https://docs.google.com/document/d/1s5SAb6xzhsY8xXLq91yqlgzWfQ3Ypo8RipwE4aDwHVQ/edit?usp=sharing",
		"file": 		"timelineassignmenthandout",
		"pdf":	 		"timelineassignmenthandout.pdf",
		"wordFile":		"timelineassignmenthandout.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Extra Credit Paper Assignment",
		"subjects": 	["artHistory"],
		"googleLink": 	"https://docs.google.com/document/d/1weWqRQgeBqVklfXn2qhD6GKwWst9jbP7Fj192a-rdUw/edit?usp=sharing",
		"file": 		"extracreditpaperassignment",
		"pdf":	 		"extracreditpaperassignment.pdf",
		"wordFile":		"extracreditpaperassignment.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design: Assignment #3",
		"subjects": 	["twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/18jDRc72zqQlSNHHArSRRjaQed3OTbX7E_io0LdQmvqE/edit?usp=sharing",
		"file": 		"2ddesignassignment3",
		"pdf":	 		"2ddesignassignment3.pdf",
		"wordFile":		"2ddesignassignment3.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design: Assignment #4",
		"subjects": 	["twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/1wybjCxurn8kqGWMzaSMrZA1ENoCJAIsekfA4OincbKc/edit?usp=sharing",
		"file": 		"2ddesignassignment4",
		"pdf":	 		"2ddesignassignment4.pdf",
		"wordFile":		"2ddesignassignment4.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Painting / Light Diagram",
		"subjects": 	["painting"],
		"googleLink": 	"https://docs.google.com/document/d/1Y6g_t_pCsC7GKILTzGTl7XdqWyo-bYCYiiu8kC4LGzU/edit?usp=sharing",
		"file": 		"paintinglightdiagram",
		"pdf":	 		"paintinglightdiagram.pdf",
		"wordFile":		"paintinglightdiagram.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Brush & Paint Handout",
		"subjects": 	["painting", "twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/1TDf28_FVBJ0zuyACk9b9sxmnx2eydqFFb3qb0GTO_e8/edit?usp=sharing",
		"file": 		"brushpainthandout",
		"pdf":	 		"brushpainthandout.pdf",
		"wordFile":		"",
		"thumbnail": 	"brushThumb.jpg",
		"images": 		["brushassignmentimage.jpg", "whatispainttwo.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"In Class Activity - Color Wheel & Gradients - 2014",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/1kPN23gj8SPS_hvTVfLPtuzc1ZtrSSpuIJ6kB0sePRGc/edit?usp=sharing",
		"file": 		"inclassactivitycolorwheelgradients",
		"pdf":	 		"inclassactivitycolorwheelgradients.pdf",
		"wordFile":		"inclassactivitycolorwheelgradients.docx",
		"thumbnail": 	"Screen Shot 2019-06-24 at 12.16.25 PM.jpg",
		"images": 		["Screen Shot 2019-06-24 at 12.15.15 PM.jpg", "Screen Shot 2019-06-24 at 12.15.07 PM.jpg", "Screen Shot 2019-06-24 at 12.14.57 PM.jpg", "Screen Shot 2019-06-24 at 12.14.43 PM.jpg", "Screen Shot 2019-06-24 at 12.14.35 PM.jpg", "Screen Shot 2019-06-24 at 12.14.08 PM.jpg", "Screen Shot 2019-06-24 at 12.13.53 PM.jpg", "Screen Shot 2019-06-24 at 12.13.34 PM.jpg", "Screen Shot 2019-06-24 at 12.13.20 PM.jpg", "Screen Shot 2019-06-24 at 12.13.02 PM.jpg", "Screen Shot 2019-06-24 at 12.12.42 PM.jpg", "Screen Shot 2019-06-24 at 12.12.30 PM.jpg", "Screen Shot 2019-06-24 at 12.12.21 PM.jpg", "Screen Shot 2019-06-24 at 12.12.02 PM.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"In-Class Activity - Complement Still Life - 2014",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/138S2LLBS8LF0SU4VXDKK4veKm2s0AnZpfnn8R_UuPiw/edit?usp=sharing",
		"file": 		"inclassactivitycomplementstilllife",
		"pdf":	 		"inclassactivitycomplementstilllife.pdf",
		"wordFile":		"inclassactivitycomplementstilllife.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"How to Paint George Washington Handout",
		"subjects": 	["painting"],
		"googleLink": 	"https://docs.google.com/document/d/112WlHMeY8e1OtGw6kMeThqdxh8qvJtTf399hovmzkj4/edit?usp=sharing",
		"file": 		"howtopaintgeorgewashingtonhandout",
		"pdf":	 		"howtopaintgeorgewashingtonhandout.pdf",
		"wordFile":		"howtopaintgeorgewashingtonhandout.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Rorschach Test Activity",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1TziRzNYqnli1VBZpjBVqiQTJqGp5P4fKtf8f0C7k64M/edit?usp=sharing",
		"file": 		"rorschachtestactivity",
		"pdf":	 		"",
		"wordFile":		"",
		"thumbnail": 	"inkblotthumb.jpg",
		"images": 		["rorschachimage.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Painting Analysis - Midterm",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/15-xCk399gDqhXn8UDJpo7UXKF4BgNjZhlytVCPruglU/edit?usp=sharing",
		"file": 		"2ddesignpaintinganalysismidterm",
		"pdf":	 		"2ddesignpaintinganalysismidterm.pdf",
		"wordFile":		"2ddesignpaintinganalysismidterm.docx",
		"thumbnail": 	"twodpaintinganalysismidtermthumb.jpg",
		"images": 		["twodpaintinganalysismidtermone.jpg", "twodpaintinganalysismidtermtwo.jpg", "twodpaintinganalysismidtermthree.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Sample Analysis",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/1Yv3uBN8DYuGhAVzgTR1dUtAIuO0Q27uM4idKLvIncYI/edit?usp=sharing",
		"file": 		"2ddesignsampleanalysis",
		"pdf":	 		"2ddesignsampleanalysis.pdf",
		"wordFile":		"2ddesignsampleanalysis.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Glass Painting",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/1lY80SHIOYdxRqRd5nSFMqbLrI_ZVRLQgIWrBm2LuzA4/edit?usp=sharing",
		"file": 		"2ddesignglasspainting",
		"pdf":	 		"2ddesignglasspainting.pdf",
		"wordFile":		"2ddesignglasspainting.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Kinds of Paintings",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/1CtVT5h_s9I3b_Z0ef9rJnPljoXnDGAZO_51JBap9eX4/edit?usp=sharing",
		"file": 		"2ddesignkindsofpaintings",
		"pdf":	 		"2ddesignkindsofpaintings.pdf",
		"wordFile":		"2ddesignkindsofpaintings.docx",
		"thumbnail": 	"typesofpaintingthumb.jpg",
		"images": 		["typesofpaintingimage.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Existential Painting",
		"subjects": 	["twoDDesign", "painting"],
		"googleLink": 	"https://docs.google.com/document/d/1WFBVTH96hZ0pLsdRJK0UIGnRzg40aq9OwKkctu9LgZg/edit?usp=sharing",
		"file": 		"2ddesignexistentialpainting",
		"pdf":	 		"2ddesignexistentialpainting.pdf",
		"wordFile":		"2ddesignexistentialpainting.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Ear Painting",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/14q-sSQsV9Xnr-M1n9b3Lc7noqocq5UNNtFlqr5hRtP8/edit?usp=sharing",
		"file": 		"2ddesignearpainting",
		"pdf":	 		"2ddesignearpainting.pdf",
		"wordFile":		"2ddesignearpainting.docx",
		"thumbnail": 	"earthumbnail.jpg",
		"images": 		["earpainting.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Skull Painting",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1HBSGYMESo4lFVRbdz1tvkHkNTjL0cHOZJXbWPs22e6Q/edit?usp=sharing",
		"file": 		"2ddesigndepressingpainting",
		"pdf":	 		"2ddesigndepressingpainting.pdf",
		"wordFile":		"2ddesigndepressingpainting.docx",
		"thumbnail": 	"skullthumbnail.jpg",
		"images": 		["skullthumbnail.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Strange Painting",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1RAO4M506ie4mCykIG0fNqmldpXbKGo1-412fLu5Z-38/edit?usp=sharing",
		"file": 		"2ddesignstrangepainting",
		"pdf":	 		"2ddesignstrangepainting.pdf",
		"wordFile":		"2ddesignstrangepainting.docx",
		"thumbnail": 	"strangepaintingthumbnail.jpg",
		"images": 		["strangepainting.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Geometric Painting",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/16N1y7lutQZTuVgoFaXDC0dLnZRkdrplYedx8iL_2SjE/edit?usp=sharing",
		"file": 		"2ddesigngeometricpainting",
		"pdf":	 		"2ddesigngeometricpainting.pdf",
		"wordFile":		"2ddesigngeometricpainting.docx",
		"thumbnail": 	"geometricpaintingthumb.jpg",
		"images": 		["geometricpainting.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Linear Perspective",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1Aq3PkpzZ-rdmHQCsptJrw3XPiZ-Hisqx-rzmDz9_KoQ/edit?usp=sharing",
		"file": 		"2ddesignlinearperspective",
		"pdf":	 		"2ddesignlinearperspective.pdf",
		"wordFile":		"2ddesignlinearperspective.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Linear Perspective (Simplified)",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1BcHcNxZtjbCW5PGuwAXCEnV023r17RUgomYaZZHb1Yg/edit?usp=sharing",
		"file": 		"2ddesignlinearperspectivesimplified",
		"pdf":	 		"2ddesignlinearperspectivesimplified.pdf",
		"wordFile":		"2ddesignlinearperspectivesimplified.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Art / Design Packet - Final",
		"subjects": 	["twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/14Kbt0D6SwnBqY1ruSLIcz07HE_nh9SnDbNeuAnWaLew/edit?usp=sharing",
		"file": 		"2ddesignartdesignpacketfinal",
		"pdf":	 		"2ddesignartdesignpacketfinal.pdf",
		"wordFile":		"2ddesignartdesignpacketfinal.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - How To Draw A Cube",
		"subjects": 	["twoDDesign", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1QBJo_8f9oYFp6NvGPKZOqm0w0V3cbNim5isXseneptY/edit?usp=sharing",
		"file": 		"2ddesignhowtodrawacube",
		"pdf":	 		"2ddesignhowtodrawacube.pdf",
		"wordFile":		"2ddesignhowtodrawacube.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"2D Design - Final Written Assignment",
		"subjects": 	["twoDDesign"],
		"googleLink": 	"https://docs.google.com/document/d/1Us4mNu1A4r91-5DZseHYhZ7UjRzTh7iB38KeK3gFE1g/edit?usp=sharing",
		"file": 		"2ddesignfinalwrittenassignment",
		"pdf":	 		"2ddesignfinalwrittenassignment.pdf",
		"wordFile":		"2ddesignfinalwrittenassignment.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	// {
	// 	"title": 		"Buying Supplies",
	// 	"subjects": 	["twoDDesign", "painting", "drawing"],
	// 	"googleLink": 	"https://docs.google.com/document/d/1Wv5now2qh04aVgcnMez040YDg9CqtrQbmHeJPZbFdPU/edit?usp=sharing",
	// 	"file": 		"buyingsupplieshowtobeanartist",
	// 	"pdf":	 		"buyingsupplieshowtobeanartist.pdf",
	// 	"wordFile":		"buyingsupplieshowtobeanartist.docx",
	// 	"thumbnail": 	"buyingsuppliesthumb.jpg",
	// 	"images": 		["buyingsuppliespageone.jpg", "buyingsuppliespagetwo.jpg"],
	// 	"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
	// 	"uploadYear":	2019,
	// 	"hide": 		false
	// },
	{
		"title": 		"Buying Paint - How To Be An Artist",
		"subjects": 	[],
		"googleLink": 	"https://docs.google.com/document/d/12tAM6Hg99BQBxS-vJ4X9n52KRkqsDtKg6kVtpMaznBI/edit?usp=sharing",
		"file": 		"buyingpainthowtobeanartist",
		"pdf":	 		"buyingpainthowtobeanartist.pdf",
		"wordFile":		"buyingpainthowtobeanartist.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Reaching Out to Other Artists - How To Be An Artist",
		"subjects": 	[],
		"googleLink": 	"https://docs.google.com/document/d/1DRxvyYmYIPkWMq3cjDRIhiCVhynNpu-EL7vgCJHYUz4/edit?usp=sharing",
		"file": 		"reachingouttootherartistshowtobeanartist",
		"pdf":	 		"reachingouttootherartistshowtobeanartist.pdf",
		"wordFile":		"reachingouttootherartistshowtobeanartist.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Introduction - How To Be An Artist",
		"subjects": 	[],
		"googleLink": 	"https://docs.google.com/document/d/1SraSBj8DOuF7_Of1rhobXlGZjbqxO7ZzsQRvIzgQfhc/edit?usp=sharing",
		"file": 		"introductionhowtobeanartist",
		"pdf":	 		"introductionhowtobeanartist.pdf",
		"wordFile":		"introductionhowtobeanartist.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Handout for Prehistoric Flute Song",
		"subjects": 	["artHistory"],
		"googleLink": 	"https://docs.google.com/document/d/1RmeMAfLpcQNH0ZdXWTeuQf4niEX6Sc0CazFWze4hlc8/edit?usp=sharing",
		"file": 		"handoutforprehistoricflutesong",
		"pdf":	 		"handoutforprehistoricflutesong.pdf",
		"wordFile":		"handoutforprehistoricflutesong.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Homework Assignment - Art / Not Art / Art?",
		"subjects": 	[],
		"googleLink": 	"https://docs.google.com/document/d/1sjIlGhFIIZXrQcLDh5m05lIIvKGrVpV2gCk9DyrbwZI/edit?usp=sharing",
		"file": 		"homeworkassignmentartnotartart",
		"pdf":	 		"homeworkassignmentartnotartart.pdf",
		"wordFile":		"homeworkassignmentartnotartart.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"Homework Assignment - Silhouettes",
		"subjects": 	["twoDDesign", "painting", "drawing"],
		"googleLink": 	"https://docs.google.com/document/d/1UUx6-tZF3Z77u5RBmRbk_FaNY40x3_f7CyCF8-EeVEU/edit?usp=sharing",
		"file": 		"homeworkassignmentsilhouettes",
		"pdf":	 		"homeworkassignmentsilhouettes.pdf",
		"wordFile":		"homeworkassignmentsilhouettes.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"APPRECIATION (Delano) – Midterm",
		"subjects": 	["introToArt"],
		"googleLink": 	"https://docs.google.com/document/d/1QbGHsfElWCXURzffGWa5jltFr_1MFAjU_4yS1uHv4LI/edit?usp=sharing",
		"file": 		"appreciationdelanomidterm",
		"pdf":	 		"appreciationdelanomidterm.pdf",
		"wordFile":		"appreciationdelanomidterm.docx",
		"thumbnail": 	"Screen Shot 2019-06-24 at 1.24.59 AM.jpg",
		"images": 		["Screen Shot 2019-06-24 at 1.25.06 AM.jpg", "Screen Shot 2019-06-24 at 1.25.16 AM.jpg", "Screen Shot 2019-06-24 at 1.25.25 AM.jpg"],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	{
		"title": 		"AGRICULTURE TIMELINE",
		"subjects": 	["artHistory"],
		"googleLink": 	"https://docs.google.com/document/d/1XTA6dZIy5S-o13b3Yx1KFde8i6xj0vcmocfs4DtYUlw/edit?usp=sharing",
		"file": 		"agriculturetimeline",
		"pdf":	 		"agriculturetimeline.pdf",
		"wordFile":		"agriculturetimeline.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	// {
	// 	"title": 		"Critique Rubric – Drawing",
	// 	"subjects": 	["drawing"],
	// 	"googleLink": 	"https://docs.google.com/document/d/1f0eUz78lAV_-dmYr8jTNueyhGTNXSNFZkgoiCF6THiQ/edit?usp=sharing",
	// 	"file": 		"critiquerubricdrawing",
	// 	"pdf":	 		"critiquerubricdrawing.pdf",
	// 	"wordFile":		"critiquerubricdrawing.docx",
	// 	"thumbnail": 	"",
	// 	"images": 		[],
	// 	"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
	// 	"uploadYear":	2019,
	// 	"hide": 		false
	// },
	{
		"title": 		"COMPARATIVE ANALYSIS - ArtHist",
		"subjects": 	["artHistory", "twoDDesign", "introToArt"],
		"googleLink": 	"https://docs.google.com/document/d/1LHeIvDE3CFdFI1s4tkBrVbqx_erSbF-D9JvbMu9Qppc/edit?usp=sharing",
		"file": 		"comparativeanalysisarthist",
		"pdf":	 		"comparativeanalysisarthist.pdf",
		"wordFile":		"comparativeanalysisarthist.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
	// {
	// 	"title": 		"In Danger of Not Passing - Handout",
	// 	"subjects": 	["artHistory", "twoDDesign", "introToArt", "painting", "drawing"],
	// 	"googleLink": 	"https://docs.google.com/document/d/1dsA2I2NNojLgBlNmzW--QOhtp73NX4yL0ucP2fblUzk/edit?usp=sharing",
	// 	"file": 		"indangerofnotpassinghandout",
	// 	"pdf":	 		"indangerofnotpassinghandout.pdf",
	// 	"wordFile":		"indangerofnotpassinghandout.docx",
	// 	"thumbnail": 	"",
	// 	"images": 		[],
	// 	"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
	// 	"uploadYear":	2019,
	// 	"hide": 		false
	// },
	// {
	// 	"title": 		"Portfolio Requirements - Drawing I",
	// 	"subjects": 	["drawing"],
	// 	"googleLink": 	"https://docs.google.com/document/d/1ek5P-HejJLGSLZsOu2sAS_F7T0xoEAoaF1KaZNAimtk/edit?usp=sharing",
	// 	"file": 		"portfoliorequirementsdrawingi",
	// 	"pdf":	 		"portfoliorequirementsdrawingi.pdf",
	// 	"wordFile":		"portfoliorequirementsdrawingi.docx",
	// 	"thumbnail": 	"",
	// 	"images": 		[],
	// 	"author": 		"", // leave empty quotes (like this: "") for anonymous post
	// 	"uploadYear":	2019,
	// 	"hide": 		false
	// },
	{
		"title": 		"FINAL WRITTEN EXAM - Art Hist.",
		"subjects": 	["artHistory"],
		"googleLink": 	"https://docs.google.com/document/d/1jrFJu0EW1JhPTzxwkcmop3A-Vd_bQ8OEf9ghHWwLgko/edit?usp=sharing",
		"file": 		"finalwrittenexamarthist",
		"pdf":	 		"finalwrittenexamarthist.pdf",
		"wordFile":		"finalwrittenexamarthist.docx",
		"thumbnail": 	"",
		"images": 		[],
		"author": 		"Tom Betthauser", // leave empty quotes (like this: "") for anonymous post
		"uploadYear":	2019,
		"hide": 		false
	},
]