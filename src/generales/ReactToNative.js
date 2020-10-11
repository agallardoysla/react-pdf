import React from 'react';

export function View({ style }) {
	return <div style={style}></div>;
}

export function Text({ style }) {
	return <h1 style={style}></h1>;
}

export function Image({ style }) {
	return <img style={style}></img>;
}

export function Link({ style, src }) {
	return <link src={src} style={style}></link>;
}
