import styled from 'styled-components';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import { Link } from 'react-router-dom';
import { MockAxios } from 'Apis/@core';
import { useQuery } from 'react-query';

const DesktopMainPage = () => {
	//mockData용 =============
	const { data } = useQuery(['product'], () => {
		return MockAxios.get('/product').then(res => {
			return res.data;
		});
	});

	return (
		<S.Wrapper>
			{/* 버튼 컴포넌트 확인 코드로 추후 삭제 예정 */}
			<CustomButton variant={'primary'} shape={'submitBtn'} size={'submitBtn'}>
				버튼 스타일 확인용
			</CustomButton>
			<Link to={'/register'}>
				<S.BtnSection>
					<RegisterBtn />
				</S.BtnSection>
			</Link>
		</S.Wrapper>
	);
};

export default DesktopMainPage;

const Wrapper = styled.div`
	width: 80%;
	min-width: 700px;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 10px;
`;
const TitleBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary};
	padding-top: 30px;
	padding-bottom: 30px;
`;

const SearchSection = styled.div`
	width: 100%;
	border-top: 3px double ${({ theme }) => theme.color.subBeigeGreen};
	border-bottom: 3px double ${({ theme }) => theme.color.subBeigeGreen};
	padding: 40px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BtnSection = styled.div`
	width: 50px;
	height: 50px;
`;

const CategoryWrapper = styled.div`
	padding-bottom: 20px;
`;

const S = {
	Wrapper,
	TitleBox,
	SearchSection,
	BtnSection,
};
