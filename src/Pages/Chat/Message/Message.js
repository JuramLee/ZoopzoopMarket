import UserApi from 'Apis/userApi';
import { useEffect, useRef, useState } from 'react';
import MyMessage from './Components/MyChat';
import YourMessage from './Components/YourChat';
import DateDivide from './Components/DateDevide';
import dayjs from 'dayjs';

const MessageDetail = ({ chat }) => {
	const scrollRef = useRef();
	const [myNick, setMyNick] = useState();

	useEffect(() => {
		const myInfo = async () => {
			try {
				const res = await UserApi.userInfo();
				setMyNick(res.data.nick_name);
			} catch (err) {
				console.log(err);
			}
		};
		myInfo();
	}, []);

	useEffect(() => {
		scrollRef.current.scrollIntoView({
			block: 'end',
			inline: 'nearest',
		});
	}, [chat]);
	return (
		<div>
			<div>
				{chat?.map((msg, idx) => {
					let isDate = false;
					const created = dayjs(chat[idx].createdAt);
					if (idx !== chat.length - 1) {
						const nextCreated = dayjs(chat[idx + 1].createdAt);
						created.format('YYYY-MM-DD') === nextCreated.format('YYYY-MM-DD')
							? isDate
							: (isDate = true);
					}
					return (
						<>
							<DateDivide isDate={isDate} created={created} idx={idx} />
							{msg.User.nick_name === myNick ? (
								<MyMessage msg={msg} />
							) : (
								<YourMessage msg={msg} />
							)}
						</>
					);
				})}
			</div>
			<div ref={scrollRef}></div>
		</div>
	);
};

export default MessageDetail;
