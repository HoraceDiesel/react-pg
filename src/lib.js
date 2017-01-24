import React from "react";
import dummys from "./dummys.json";
import './stylesheets/styles.scss'

export const hello = (
	<h1 id={dummys[0].id}
		className="hello">
	{ dummys[0].text}
	</h1>
)

export const goodbye = (
	<h1 id="bye"
		className="goodbye">
	{ dummys[1].text }
	</h1>
)