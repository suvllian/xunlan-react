import { postFetch, getFetch } from './resource.js';

exports.login = (formData) => { 
	formData.append("concrete", "login");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.getIndexData = () => {
	let data = "concrete=getIndexData";
	return getFetch(data);
}

exports.getAboutData = () => {
	let data = "concrete=getAboutData";
	return getFetch(data);
}