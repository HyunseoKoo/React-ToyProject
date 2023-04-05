## 프로젝트 설명

    영화 트레일러 오픈 API를 활용하여 영화 목록을 조회하는 사이트를 구현하였습니다.

## 배포 주소

    serverless 배포
    https://react-movie-trailer-project.vercel.app/

## 프로젝트 폴더 구조

    * src
        ㄴapis
            ㄴ@core.js
            ㄴmovieApi.js
        ㄴFont
		ㄴKCC-Ganpan.ttf
        ㄴComponents
		ㄴCard : 영화 카드 설정
            ㄴLayout : 공통 Header + Footer 설정
            ㄴSkeletons : Loading 시 skeleton 설정
	  ㄴHooks/queries
            ㄴ@config.js : query config 공통설정
            ㄴget-detail-infos.js : DetailPage에 불러올 데이터 (useQuery) 설정
            ㄴget-video.js :  DetailPage에 불러올 영상 데이터 (useQuery) 설정
            ㄴget-infinite-movieList.js : 카테고리별 페이지에 불러올 데이터 (useQuery) 설정
            ㄴget-infinite-search.js : 검색 페이지에 불러올 데이터 (useQuery) 설정
            ㄴnow-playing.js : home 페이지에 불러올 데이터 (useQuery) 설정
        ㄴPages
            ㄴHome : 게이트 페이지
                ㄴComponents
                    ㄴBanner
                    ㄴPreview
                    ㄴmovieCard.js
                    ㄴmovieSlider.js
            ㄴDetailPage : 이슈리스트를 불러오는 페이지
		ㄴSearch : 검색어 입력 시 불러오는 페이지(인피니티스크롤적용)
            ㄴNowPlay : 현재상영중인 영화 불러오는 페이지(인피니티스크롤적용)
            ㄴTopRated : 평점높은 영화 불러오는 페이지(인피니티스크롤적용)
            ㄴUpcoming : 개봉예정 영화 불러오는 페이지(인피니티스크롤적용)
        ㄴroutes
            ㄴrouting.js : 라우팅 설정
        ㄴstyles : 공통 스타일 설정
        ㄴutils
            ㄴstore.js : configureStore 설정

        -------------------------------------------
        * App.js
        * index.js

## 팀원

    구현서 (팀장)
    김나실
    이재훈
    이주람
    장영승

## 사용 기술 스택

    > FrontEnd : HTML / JavaScript / React
    > 라이브러리 : styled-component / styled-reset / husky / eslint / prettier / react-fontawesome / react-query
    > 협업도구 : Git + GitHub

## 요구 사항 구현 내역


| 요구사항                              | 구현여부 |
| ------------------------------------- | -------- |
| 1. 기본사항                         | 구현여부 |
| react-qurey를 사용하여 데이터를 캐싱할 것                     | O        |
| 목록을 불러올 때는 react-query의 useInfinitQuery를 사용하여 무한 스크롤링으로 불러울 것       | O        |
| 로딩 중에는 목록 가장 하단 부에 skelton UI를 나타낼 것           | O        |
| ---                                   | ---      |
| 2. 페이지 구성                        | 구현여부 |
| a. home page           | O        |
| 사용 API: /movie/popular           | O        |
| 각 영화의 평점 및 짧은 미리보기(소개)가 나타나야함           | O        |
| 미리보기는 길이가 길다면 특정 글자 수를 넘어가면 … 으로 표시할 수 있도록 UI를 고려할 것           | O        |
| b. now playing page           |         |
| 사용 API: /movie/now_playing           | O        |
| c. upcoming page          |         |
| 사용 API: /movie/upcoming           | O        |
| d. top-rated pag          |         |
| 사용 API: /movie/top_rated        | O        |
| e. 영화 상세 페이지          |         |
| 사용 API: /movie/{movie_id}        | O        |
| f. 검색 결과 페이지          |         |
| 사용 API: /search/movie        | O        |
| ---                                   | ---      |
| 5. 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동                       | O        |
| ---                                   | ---      |
| 6. favicon을 이용하여 웹 표시 아이콘을 수정할 것                               | O |
| ---                                   | ---      |
| 7. 페이지 별 구현 사항            |        |
| movies / 리스트 페이지            | ---        |
| 한번 당 가져올 데이터 최대 20            | O        |
| 제목, 포스터, 미리보기(소개), 별점 표시           | O        |
| 포스터 없는 경우, 대체 이미지 사용            | O        |
| movie / 상세 페이지            | ---         |
| 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이           | O        |
| 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기           | O        |
| 그 외의 데이터 추가 활용 여부는 자유            | O        |
| search            | ---         |
| 제목, 포스터, 미리보기(소개), 별점           | O        |
| 포스터 없는 경우, 대체 이미지 사용            | O        |
| 구현 후 serverless 환경에서 배포      | O        |


## 협업방식

Daily 스프린트 회의 -> 회의록 작성
칸반보드로 업무진행상황 공유 -> 이슈, 에러 관련 공유(급한건은 단톡공유)
코드 도움필요한 경우 카톡 공지 + discord 공부방에서 질문
+ 코드컨벤션 및 커밋 컨벤션 통일
+ Eslint와 Prettier 통일
