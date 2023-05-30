import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import moment from 'moment';
import { PurchaseMockData, SaleMockData } from './mock';
import PayListCard from 'Components/Card/Desktop/payListCard';

const AccountBookDetailInfo = ({ category, date, setDate, year, month, data }) => {
	// mock data 활용 코드
	let saleDateArr = [];
	SaleMockData['payList'].map(item => {
		const saleDate = item.createAt;
		saleDateArr.push(saleDate.split('T')[0]);
	});

	let purchaseDateArr = [];
	PurchaseMockData['payList'].map(item => {
		const saleDate = item.createAt;
		purchaseDateArr.push(saleDate.split('T')[0]);
	});

	data && console.log(data);

	return (
		<>
		<S.Wrap>
			<S.PreviewWrap>
				<S.PreviewContent1>
					<S.Date>{year}년 {month}월</S.Date>
					  {/* <div>
						{ category === "판매" ?
						<S.Div1>
							<div>수입</div>
							<div><span>{data && data.amount.thisMonthSaleAmount === null ? 0 : data.amount.thisMonthSaleAmount}</span>원</div>
							<div><span>{data && data.payList.length}건</span></div>
						</S.Div1>
						:
						<S.Div1>
							<div>지출</div>
							<div><span>{data && data.amount.thisMonthSaleAmount}</span>원</div>
							<div><span>{data && data.amount.thisMonthPurchaseAmount === null ? 0 : data.amount.thisMonthPurchaseAmount}</span>원</div>
							<div><span>{data && data.payList.length}건</span></div>
						</S.Div1>
						}
					  </div> */}
				</S.PreviewContent1>
				<S.PreviewContent>
					{/* <S.SummaryContent1>
						판매건수
						<br />
						구매건수
						<br />
						</S.SummaryContent1>
						<S.SummaryContent2>
						{SaleMockData.count}건<br />
						{PurchaseMockData.count}건<br />
						</S.SummaryContent2>
						<S.SummaryContent2>
						{SaleMockData['amount'].thisMonthSaleAmount}원<br />
						{PurchaseMockData['amount'].thisMonthPurchaseAmount}원<br />
					</S.SummaryContent2> */}
				</S.PreviewContent>
			</S.PreviewWrap>
			<Calendar
				value={date}
				onChange={setDate}
				className="react-calendar"
				formatDay={(locale, date) => moment(date).format('D')}
				tileContent={({ date }) => {
					if (saleDateArr.find(day => day === moment(date).format('YYYY-MM-DD'))) {
						return (
							<div className="sale"></div>
							);
						}
						if (purchaseDateArr.find(day => day === moment(date).format('YYYY-MM-DD'))) {
							return (
								<div className="purchase"></div>
								);
							}
						}}
						/>
			{/* <span>선택한 날짜</span>
          {date.getDate()} */}
		</S.Wrap>
		<S.DetailTitle>세부내역</S.DetailTitle>
		<div>
			{data && data.payList.map(item => (
				<PayListCard item={item}/>
			))}
		</div>
		</>
	);
};

export default AccountBookDetailInfo;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Date = styled.div`
	padding-left: 30px;
	color: ${({theme}) => theme.color.primary[400]};
	font-size: ${({theme}) => theme.fontSize.md};
`;

const PreviewContent1 = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	& > div:nth-child(2) {
		margin-left: 70px;
	}
`;

const Div1 = styled.div`
	display: flex;
`;

// 거래내역 박스
const PreviewWrap = styled.div`
	width: 48%;
	height: 550px;
	box-shadow: 0px 0px 20px #e0e0e0;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.color.primary[100]};
	/* margin-bottom: 30px; */
	padding-top: 30px;
	& > div:nth-child(1) {
		padding-bottom: 30px;
		border-bottom: solid 3px ${({ theme }) => theme.color.gray[100]};
	}
	& > div:nth-child(2) {
		margin-top: 30px;
		height: 250px;
	}
`;

const PreviewContent = styled.div`
	width: 90%;
	height: 80px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const Month = styled.div`
	width: 90px;
	height: 90px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.color.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.big};
	color: ${({ theme }) => theme.color.white};
`;

const Text = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SummaryContent1 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	line-height: 3rem;
	margin-right: 20px;
`;

const SummaryContent2 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 3rem;
	text-align: right;
	margin-right: 10px;
	& > div {
		margin-top: 40px;
		font-size: ${({ theme }) => theme.fontSize.md};
		color: ${({ theme }) => theme.color.primary};
	}
`;

// 가계부 그래프
const GraphWrap = styled.div`
	margin-top: 80px;
	width: 100%;
	height: 700px;
`;

const MonthButtonsZone = styled.div`
	display: flex;
	align-items: right;
	float: right;
	margin: 50px 0 10px;
`;

const MonthButton = styled.button`
	width: 140px;
	height: 40px;
	margin-left: 10px;
	border: 2.5px solid #d9d9d9;
	border-radius: 0.5em;
	background-color: white;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;
	:hover {
		color: red;
	}
	font-size: ${({ theme }) => theme.fontSize.base};
`;

const Graph = styled.div`
	margin-top: 110px;
	width: 100%;
	height: 500px;
	background-color: ${({ theme }) => theme.color.subBeige};
`;

const DetailTitle = styled.div`
	margin: 100px 0 50px;
`;

const S = {
	Wrap,
	Date,
	PreviewContent1,
	PreviewWrap,
	PreviewContent,
	Div1,
	Month,
	Text,
	SummaryContent1,
	SummaryContent2,
	GraphWrap,
	MonthButtonsZone,
	MonthButton,
	Graph,
	DetailTitle
};
