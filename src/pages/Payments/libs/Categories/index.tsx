import { useState } from 'react';
import { CategoryCard } from './CategoryCard';
import { SubcategoryCard } from './SubcategoryCard';

const categories = [
	{
		id: 0,
		title: 'Мобильная связь',
		image: 'https://cdn.onlinewebfonts.com/svg/img_29401.png'
	},
	{
		id: 1,
		title: 'Сайты объявлений',
		image: 'https://avatars.mds.yandex.net/i?id=74537e9ac03bf65e8b12dc605536276f2c81af08-8243281-images-thumbs&n=13'
	},
	{
		id: 2,
		title: 'Букмекерские компании',
		image: 'https://avatars.mds.yandex.net/i?id=5044bb56fd32fa9cc44b9c3670eba9de2d2dfc42-3163703-images-thumbs&n=13'
	},
	{
		id: 3,
		title: 'Коммунальные службы',
		image: 'https://yt3.ggpht.com/a/AATXAJzOoi1ZUV5bY71rwTcSKO9YytGWoJC4du5eUcqf=s900-c-k-c0xffffffff-no-rj-mo'
	},
	{
		id: 5,
		title: 'Образование',
		image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/academia-1-393889.png'
	},
	{
		id: 6,
		title: 'Штрафы и налоги',
		image: 'https://static.thenounproject.com/png/1873149-200.png'
	},
	{
		id: 7,
		title: 'Транспорт и билеты',
		image: 'https://spng.subpng.com/20190607/ell/kisspng-public-transport-computer-icons-bus-rail-transport-images-of-transportation-icon-image-rock-cafe-5cfa3a8b895992.7703978715599028595626.jpg'
	},
	{
		id: 8,
		title: 'Финансовые услуги',
		image: 'https://avatars.mds.yandex.net/i?id=abd29e1e96adcfe4b3a118f882478c49-5221780-images-thumbs&n=13'
	},
	{
		id: 9,
		title: 'Красота и здоровье',
		image: 'https://img1.pngindir.com/20180330/zhw/kisspng-computer-icons-pulse-heart-clip-art-wellness-5abebe92b057e4.5001324015224500667223.jpg'
	},
];

const subcategories = [
	{
		paretntCategoryId: 0,
		title: 'Beeline',
		image: 'https://icon2.cleanpng.com/20180413/rcw/kisspng-sphere-circle-beeline-taxi-logos-5ad16fafbfb022.0527803515236750557852.jpg',
		paymentIdentifier: 'Номер телефона',
	},
	{
		paretntCategoryId: 0,
		title: 'Activ',
		image: 'https://sun9-52.userapi.com/impf/c639620/v639620608/1890/Rm14AHPrK7k.jpg?size=320x320&quality=96&sign=6e75f5a8988174320d30e94148c9b7ab&c_uniq_tag=BPLpLZXHDqCOvhepkpN8ybTp4UU9yIE58bZYnYvINYo&type=album',
		paymentIdentifier: 'Номер телефона',
	},
	{
		paretntCategoryId: 0,
		title: 'Jusan Mobile',
		image: 'https://avatars.mds.yandex.net/i?id=f723a2af9acf73721c96156cb2cc889c-4256903-images-thumbs&n=13',
		paymentIdentifier: 'Номер телефона',
	},
	{
		paretntCategoryId: 1,
		title: 'OLX.kz',
		image: 'https://android.biblprog.org.ua/programsimages/olx-ua/olx-ua-icon.jpg',
		paymentIdentifier: 'Номер объявления',
	},
	{
		paretntCategoryId: 1,
		title: 'Колеса',
		image: 'https://lh3.googleusercontent.com/QnX-CG-zMhaPYSQIbwwFIT45FCzudkFj9ZRG-TVAxn2KaP9eWjuIf0JW8KNeEdGUzBg=s180',
		paymentIdentifier: 'Номер объявления',
	},
	{
		paretntCategoryId: 1,
		title: 'Крыша',
		image: 'https://avatars.mds.yandex.net/i?id=5de8ead6f78523ad790b532583fb5bc30ff800df-4012107-images-thumbs&n=13',
		paymentIdentifier: 'Номер объявления',
	},
	{
		paretntCategoryId: 2,
		title: 'Parimatch.kz',
		image: 'https://www.yonkerstribune.com/wp-content/uploads/2022/11/1C6E189B-4C5B-4A88-84BC-012AB30371B6.jpeg',
		paymentIdentifier: 'Номер аккаунта',
	},
	{
		paretntCategoryId: 2,
		title: '1xbet.kz',
		image: 'https://image.winudf.com/v2/image1/Y29tLlNwb3J0c19iZXR0aW5nLlRpcHNfMXhTcG9ydHNfYmV0dGluZ19pY29uXzE2Mzk2MDI5NzFfMDc4/icon.png?w=340&fakeurl=1',
		paymentIdentifier: 'Номер аккаунта',
	},
	{
		paretntCategoryId: 2,
		title: 'OlimpBet.kz',
		image: 'https://sun1-30.userapi.com/s/v1/ig2/vwpAHzctBEXVWBlHG8TmWVJTAJ341OVWkML4lh9vuOzOU39VyN0mJsKwt0zfusu0SMHOx21pcV7q8oTXylgTfXHD.jpg?size=200x200&quality=96&crop=0,0,299,299&ava=1',
		paymentIdentifier: 'Номер аккаунта',
	},
]

export function Categories() {
	const [activeCategory, setActiveCategory] = useState(categories[0].id);
	const [paymentIdentifierText, setPaymentIdentifierText] = useState(subcategories[0].paymentIdentifier);
	const [paymentIdentifierValue, setPaymentIdentifierValue] = useState('');
	const [paymentAmount, setPaymentAmount] = useState(0);

	function onCategoryClick (categoryId: number) {
		setActiveCategory(categoryId);
	};

	function onSubcategoryClick(paymentIdentifier: string) {
		setPaymentIdentifierText(paymentIdentifier);
	}

	function onPaymentSubmit() {
		console.log(paymentAmount);
		// TODO: send request to backend
		// fetch('https://mywebsite.example/endpoint/', {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		firstParam: 'yourValue',
		// 		secondParam: 'yourOtherValue',
		// 	})
		// })
	}

	function updatePaymentIdentifierValue(e) {
		setPaymentIdentifierValue(e.target.value)
	}

	function updatePaymentAmount(e) {
		setPaymentAmount(Number(e.target.value));
	}

	return (
		<>
			<h1 className="text-black font-bold text-4xl mt-12">Категории</h1>
			<div className="flex gap-5 bg-white rounded-3xl p-3 mt-6" style={{flexWrap: 'wrap'}}>
				{categories.map((category, index) => (
					<CategoryCard
						key={index}
						id={category.id}
						title={category.title}
						image={category.image}
						onCategoryClick={onCategoryClick}
					/>
				))}
			</div>

			<h1 className="text-black font-bold text-4xl mt-12">Подкатегории</h1>
			<div className="flex gap-5 bg-white rounded-3xl p-3 mt-6">
				{subcategories.filter((subcategory) => subcategory.paretntCategoryId === activeCategory).map((subcategory, index) => (
					<SubcategoryCard
						key={index}
						title={subcategory.title}
						image={subcategory.image}
						paymentIdentifier={subcategory.paymentIdentifier}
						onSubcategoryClick={onSubcategoryClick}
					/>
				))}
			</div>

			<div className="flex gap-5 bg-white rounded-3xl p-3 mt-6" style={{
				display: 'flex',
				flexDirection: 'column',
				width: '200px',
				background: 'white'
			}}>
				{paymentIdentifierText}
				<input style={{background: 'rgb(246 246 245)'}} type="text" onChange={updatePaymentIdentifierValue} value={paymentIdentifierValue}></input>
				Введите сумму
				<input style={{background: 'rgb(246 246 245)'}} type="number" onChange={updatePaymentAmount} value={paymentAmount}></input>
				<button onClick={onPaymentSubmit}>Сделать платеж</button>
			</div>
		</>
	);
}
