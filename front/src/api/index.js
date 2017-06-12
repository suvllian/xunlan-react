import { postFetch, getFetch } from './resource.js';

exports.login = (formData) => { 
	formData.append("concrete", "login");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.getIndexBanner = () => {
	let data = "concrete=getIndexBanner&type=1";
	let promiseRes = getFetch(data);
	return promiseRes;
}

exports.getNewsBanner = () => {
	let data = "concrete=getIndexBanner&type=2";
	let promiseRes = getFetch(data);
	return promiseRes;
}

exports.getFriendLink = () => {
	let data = "concrete=getFriendLink";
	let promiseRes = getFetch(data);
	return promiseRes;
}