import { Axios } from './@core';

const PATH = '/api/product';

const ProductApi = {
	register(title, price, description, category, region, tag, images) {
		return Axios.post(PATH, {
			title,
			price,
			description,
			category,
			region,
			tag,
			images,
		});
	},
	mainList({ region, usedProduct, freeProduct }) {
		return Axios.get(PATH, { region, usedProduct, freeProduct });
	},
	detail(id) {
		return Axios.get(PATH + '/detail', {
			params: { prod_idx: id },
		});
	},
};
export default ProductApi;
