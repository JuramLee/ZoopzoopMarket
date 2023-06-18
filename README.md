***
### 1. 프로젝트 소개
***
<br />
<div align="center">
<img width="20%" src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/117559842/17ed16f5-694b-41c0-a38b-100d6bddaed0"/>
  </div> 
 
<h3 align="center">줍줍마켓</h3>
<h4>줍줍마켓은 중고 거래 플랫폼입니다.</h4>
<ul>
  <li>제목과 본문 혹은 태그에 포함된 키워드로 손쉬운 중고템 및 무료템 검색 기능</li>
  <li>등록된 아이템의 구매와 판매</li>
  <li>실시간 채팅</li>
  <li>판매가 완료된 거래내역을 기반의 시세 검색</li>
  <li>마이페이지 내 가계부 탭에서 나의 거래활동 확인</li> 
  <li>리뷰를 통한 구매한 아이템 판매자 평가</li>
</ul>
<h4>Link : https://zoopzoop-market.vercel.app/</h4>

<br/>

***
### 2. 서비스 화면
***
<h3 align="center">회원가입과 로그인</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/b7205d3a-092c-493b-a505-6b1557168aec" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">메인페이지</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/9807b36f-48b6-4dcc-bea4-98d7de36422d"  width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">아이템 등록</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/dc281b9a-b29c-4521-abd3-0c0fb7791e1d" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">아이템 수정과 판매완료</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/93e659cb-e546-4f82-a872-d447982ddbb6" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">마이페이지</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/5807b90c-dd6b-4daa-80cc-33033688f2c5" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">리뷰 등록</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/2903c864-6199-4cf9-8a39-a9dac166ad61" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">리뷰 수정, 삭제</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/cdd946c6-2d1b-4942-9aa8-60668600351b" width="40%"/>
</div>

<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">검색과 채팅걸기</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/3e251515-e606-494e-a4c5-a0a2ec9ce2dc" width="40%"/>
</div>
<h4 align="center"><br />=========================================<br /><br /></h4>
<h3 align="center">아이템 리스트와 시세검색</h3>
<div align="center">
  <img src="https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/3940a299-52cd-4c85-a409-5a7a8491bdf4" width="40%"/>
</div>
<br />

***
### 3. 프로젝트 폴더 구조
***
```
src
    ㄴ@Socket
        ㄴsocket.js
    ㄴapis
        ㄴ@core.js
        ㄴchatApis.js
        ㄴmyPageApi.js
        ㄴproductApi.js
        ㄴreviewApi.js
        ㄴuserApi.js
    ㄴAtoms
        ㄴreview.atom.js
    ㄴComponents
        ㄴAddress : 카카오맵을 통한 주소 설정
        ㄴAlert : alert, confirm, notification 모달 설정
        ㄴButtons : 공통 버튼 스타일 설정
              ㄴCompletedBtn : 판매완료변경 버튼
                    ㄴEditBtns : 수정, 삭제 버튼
                    ㄴHeartBtn : 관심상품 설정/해제 버튼
                    ㄴMoreBtn : 상품 전체보기 버튼
                    ㄴRegisterBtn : 상품 등록 버튼
                    ㄴTopBtn : 페이지 상단으로 보내는 버튼
        ㄴCard : 아이템, 판매완료, 리뷰카드 설정
        ㄴChatMessage : 채팅메세 설정
        ㄴIcon : 유저 온도 설정
        ㄴInput : 입력창 설
        ㄴLayout : 공통 Header + Footer 설정
        ㄴLoading : 스켈레톤 설정 페이지 외 로딩설정
        ㄴMap : 카카오맵 지도 설정
        ㄴProfile : 유저 프로필 설정
        ㄴRecentCard : 최근 본 상품 설
        ㄴReview : 상대방 프로필 내 리뷰 설정(*작업전)
        ㄴScrollToTop : 전체페이지 상단으로 보내는 로직 설정
        ㄴSearchBar : 검색 입력 창 설정
        ㄴToggle : 마이페이지 내 메뉴 설정
    ㄴConsts
        ㄴFormType.js : Form 타입 공통 설정
        ㄴQueryKey : 쿼리  설정
    ㄴContext
        ㄴsocket.js : socket 설정 context
    ㄴError
        ㄴindex.js : 에러 페이지
    ㄴHooks
        ㄴQueries
              ㄴ@config.js : query config 공통설정
              ㄴget-chat-query.js : 채팅에 불러올 데이터 (useQuery) 설정
              ㄴget-infinite-query.js : (마이페이지, 검색결과) 무한스크롤 (useQuery) 설정
              ㄴget-mypage-mutation.js : 마이페이지에 불러올 데이터 (useMutation) 설정
              ㄴget-mypage-query.js : 마이페이지에 불러올 데이터 (useQuery) 설정
              ㄴget-product-mutation.js : 관심상품, 판매완료 시 불러올 데이터 (useMutation) 설정
              ㄴget-product-query.js : 상품 관련 페이지에 불러올 데이터 (useQuery) 설정
              ㄴnow-user-query.js : 유저 관련 페이지에 불러올 데이터 (useQuery) 설정
    ㄴPages
        ㄴChat : 채팅 관련 페이지
              ㄴChatDetail : 채팅 상세 페이지
              ㄴChatList : 채팅 목록(대화상대)
              ㄴMessage : 메세지 관련
                    ㄴComponents
                    	  ㄴDateDivide.js
                    	  ㄴMyChat.js
                    	  ㄴYourChat.js
                    ㄴMessage.js
              ㄴindex.js
        ㄴItemDetail : 아이템 상세 페이지
              ㄴComponents
                    ㄴAnotherProduct : 연관상품 관련
                    ㄴDetailContent : 상세페이지 내 내용
                    ㄴDetailHead : 상세페이지 이미지, 프로필영역
              ㄴBuyerDetail : 구매자용 페이지
              ㄴSellerDetail : 판매자용 페이지
        ㄴLanding : 랜딩페이지(첫화면)
              ㄴForm
                    ㄴLogin : 로그인 페이지
                    ㄴSignUp : 회원가입 페이지
        ㄴMain : 로그인 이후 메인 페이지
              ㄴComponents
                    ㄴbannerAd.js : 배너광고 이미지 영역
                    ㄴcategory.js : 카테고리 검색 영역
                    ㄴpreview.js : 중고템, 무료템 슬라이더 영역
              ㄴChatList : 채팅 목록(대화상대)
        ㄴMarketPrice : 시세 페이지
              ㄴComponents
                    ㄴmyProfile.js : 그래프 차 영역
                    ㄴrecentSoldout.js : 최근거래 종료품목
        ㄴMyPage : 마이페이지
              ㄴComponents
                    ㄴmyProfile.js : 마이페이지 내 프로필 영역
              ㄴMyAccountBook : 마이페이지 내 가계부 영역
                    ㄴComponents
                    	  ㄴdetailCard.js : 선택한 연/월 거래내역 표시 영역
                    	  ㄴdetailInfo.js : 총 수입/지출내역 및 당월 수입/지출내역
                    	  ㄴmock.js
                    	  ㄴselector.js : 기간(연/월) 설정
              ㄴMyInterest : 마이페이지 내 관심템 영역
              ㄴMyItem : 마이페이지 내 아이템 영역
              ㄴMyReview : 마이페이지 구매 물품 리뷰 영역
              ㄴMyUserEdit : 마이페이지 내 정보 수정 영역
                    ㄴMyPasswordEdit : 내 정보 수정 - 비밀번호 수정 영역
        ㄴRegister : 아이템 등록/수정 페이지
              ㄴComponents
                    ㄴcategorySelector : 카테고리 태그 등록 영역
                    ㄴuploadFiles : 이미지 등록 영역
        ㄴReview : 리뷰 등록/수정 페이지
              ㄴindex.js : 리뷰 등록
              ㄴreviewDetail.js : 리뷰 상세
              ㄴreviewEdit.js : 리뷰 
        ㄴSearchList : 검색결과를 불러오는 페이지
              ㄴComponents
                    ㄴfreeProduct.js : 무료템 리스트 불러오는 페이지
                    ㄴsearchList.js : 검색결과 불러오는 페이지
                    ㄴusedProduct.js : 중고템 리스트 불러오는 페이지
                    ㄴwholeList.js : 전체, 무료템, 중고템 리스트 불러오는 페이지
        ㄴSkeleton : 스켈레톤 UI 처리 해둔 페이지 모음
              ㄴcomponents
                    ㄴbarSkeleton.js
                    ㄴcardSkeleton.js
                    ㄴprofileSkeleton.js
              ㄴpage
                    ㄴmainSkeleton.js : 메인페이지 스켈레톤
                    ㄴmarketPriceSkele.js : 시세페이지 스켈레톤
                    ㄴmyProfileSkele.js : 프로필 영역 스켈레톤
                    ㄴsearchIndexSkele.js : 검색결과페이지 스켈레톤
                    ㄴwholeListSkele.js : 전체, 무료템, 중고템 리스트 스켈레톤
        ㄴYourProfile : 상대방 프로필 페이지 (*작업중)
    ㄴRepository
        ㄴTokenService.js : 로그인 토큰 설정
    ㄴRoutes
        ㄴprivate.js : 로그인 토큰이 없으면 랜딩페이지로 보내는 라우팅 설정
        ㄴrouting.js : 전체 라우팅 설정
    ㄴstyles : 공통 스타일 설정
        ㄴcommon.js : 공통 스타일
        ㄴglobal.js : 전역 스타일
        ㄴtheme.js : 테마 
    -------------------------------------------
    App.js
    index.js
```
<br>

***
### 4. 팀원
***

| 구현서 | 김나실 | 박선영 | 이주람 | 이재훈 | 장영승 |
| :----: | :----: | :----: | :----: | :----: | :----: |
|<img src="https://avatars.githubusercontent.com/u/117560047?v=4" width="90px"/>|<img src="https://avatars.githubusercontent.com/u/117559842?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/117560052?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/113501460?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/91282032?v=4" width="90px" />|<img src="https://avatars.githubusercontent.com/u/50819030?v=4" width="90px" />|
|[HyunseoKoo](https://github.com/HyunseoKoo)|[nasilKiM](https://github.com/nasilKiM)|[seonyeong719](https://github.com/seonyeong719)|[JuramLee](https://github.com/JuramLee)|[JaeHoonKOR](https://github.com/JaeHoonKOR)|[YoungSeungJang](https://github.com/YoungSeungJang)|
|역할|역할|역할|역할|역할|역할|
<br>


***
### 5. 사용 기술 스택
***

   ![image](https://github.com/Frontend-TEAM1/ZoopzoopMarket/assets/113501460/8c909055-0901-4738-9b00-f859b3324e94)
    
<br>

***
### 6 Browser Support
***

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
--- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 

<br />

***
### 7. 협업 방식
***
기획 단계 : Figma를 통한 서비스 기획 및 Wireframe 작업<br/>
구현 단계 : Notion을 통한 Daily 스크럼 + 스프린트 회의 + 칸반보드 + github<br/>
<br/>
❣️ Figma 주소<br />https://www.figma.com/file/q7b02izl7kucudDRoXtmav/Untitled?type=design&node-id=1%3A2&t=m9JEyjau7qMYv10l-1<br />
❣️ Notion 주소<br />https://www.notion.so/ZOOP-ZOOP-c505857b1d7a430e958a79533c3f391e?pvs=4<br />
❣️ github 주소<br />https://github.com/Frontend-TEAM1/ZoopzoopMarket<br />
