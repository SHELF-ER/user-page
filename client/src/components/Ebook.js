import React  from 'react';
import { Link } from 'react-router-dom';
import ebookcss from '../css/index.module.css';
import ProfileWithUseFetch from "./ProfileWithUseFetch";

function Ebook() {
	document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = 'white';
  return (
	<ProfileWithUseFetch/>
  );
}

export default Ebook;
