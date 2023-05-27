import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map(props: any) {
  const lat = props.lat ?? 33.450701;
  const lng = props.lng ?? 126.570667;

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8cc8689fa2c5a1bf91028ae908ace285&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.lat ?? 37.485013,
            props.lng ?? 126.896559
          ), // 지도의 중심좌표.
          level: 1 // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        let geocoder = new window.kakao.maps.services.Geocoder();

        const markerPosition = new window.kakao.maps.LatLng(
          37.485013,
          126.896559
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition
          //   image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `${props.address}`,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              let coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // {!props.isDetail && props.onChangeLatLng(result[0].y, result[0].x)}
              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords
              });

              var content = `<div class="customoverlay" style="padding: 13px;background: url('/tooltip.png');color: white;width:90px;height:53px;text-align:center;">거래 위치</div>`;

              // 커스텀 오버레이가 표시될 위치입니다
              var position = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 커스텀 오버레이를 생성합니다
              var customOverlay = new window.kakao.maps.CustomOverlay({
                map: map,
                position: position,
                content: content,
                xAnchor: 0.5,
                yAnchor: 1.7
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
        // 마우스 드래그로 지도 이동 가능여부를 설정합니다
        map.setDraggable(true);
        map.setZoomable(true);
      });
    };
  }, [props.address]);
  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}
