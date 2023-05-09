import ItemCard from 'Components/Card/Desktop/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Preview = ({ category, location, products }) => {
	let categoryDeclare = category === 0 ? '중고 물품' : '무료나눔';
	let categoryText =
		category === 0
			? `${location} 인기 줍줍템!`
			: `회원님 주변의 무료나눔 물품들 이에요!`;

	const [swiper, setSwiper] = useState(null);

	const handleNext = () => {
		swiper.slideNext();
	};

	const handlePrev = () => {
		swiper.slidePrev();
	};

	return (
		<S.Wrapper>
			<S.UpperSwiper>
				<S.CategoryBox>{categoryDeclare}</S.CategoryBox>
				<S.CategoryText>{categoryText}</S.CategoryText>
				<S.More> 더보기 &gt; </S.More>
			</S.UpperSwiper>
			<S.SwiperWrapper>
				<S.Btn onClick={handlePrev}> &lt;</S.Btn>
				<Swiper onSwiper={setSwiper} spaceBetween={0} slidesPerView={3}>
					{products.map(item => (
						<SwiperSlide>
							<ItemCard key={item} product={item} isFree={true} />
						</SwiperSlide>
					))}
				</Swiper>

				<S.Btn onClick={handleNext}> &gt;</S.Btn>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
	margin-top: 20px;
`;
const UpperSwiper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	margin-top: 50px;
	position: relative;
`;
const CategoryBox = styled.div`
	width: 150px;
	text-align: center;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	border-radius: 10px;
`;
const CategoryText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-left: 15px;
	width: 350px;
`;

const More = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	position: absolute;
	justify-content: flex-end;
	right: 0%;
	cursor: pointer;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
`;
const SwiperWrapper = styled.div`
	width: 100%;
	margin: 10px;
	border: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
	margin-top: 30px;
	display: flex;
	align-items: center;
`;
const Btn = styled.button`
	border: none;
	font-size: ${({ theme }) => theme.fontSize.xl};
	margin-left: 10px;
	margin-right: 10px;
	background: none;
	:hover {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const S = {
	Wrapper,
	UpperSwiper,
	CategoryBox,
	CategoryText,
	More,
	SwiperWrapper,
	Btn,
};
