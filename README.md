page.js => 신규 페이지 생성 (예: app/about/page.js은 <your-domain>/about page을 생성)

layout.js => 형제 및 중첩 페이지를 감싸는 신규 레이아웃 생성

not-found.js => ‘Not Found’ 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)

error.js => 기타 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)

loading.js => 형제 또는 중첩 페이지(또는 레이아웃)가 데이터를 가져오는 동안 표시되는 폴백 페이지

route.js => API 경로 생성(즉, JSX 코드가 아닌 데이터를 반환하는 페이지, 예: JSON 형식)

동적 라우팅 => 폴더명에 [***]로 작성