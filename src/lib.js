import React from "react";
import dummys from "./dummys.json";

export const hello = (
	<h1 id={dummys[0].id}
		className="title"
		style={{background: 'purple', color: 'yellow'}}>
	{ dummys[0].text}
	</h1>
)

export const goodbye = (
	<h1 id="bye"
		className="title"
		style={{background: 'yellow', color: 'purple'}}>
	{ dummys[1].text }
	</h1>
)