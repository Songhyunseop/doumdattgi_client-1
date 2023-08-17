import * as S from "./workAgreement.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import CommentDrawer from "../../commons/parts/commentDrawer";
import { useQueryFetchOneRequest } from "../../commons/hooks/queries/useQueryFetchOneRequest";
import { useRouter } from "next/router";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useRequestAcceptRefuse } from "../../commons/hooks/custom/useRequestAcceptRefuse/index";
import {
  getDate,
  getDate2,
  getDateTime
} from "../../../commons/libraries/getDate";
import { useRequestProcess } from "../../commons/hooks/custom/useRequestProcess/index";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { fallback } from "../../../commons/libraries/fallback";
import {
  faCircleCheck,
  faCircleXmark
} from "@fortawesome/free-regular-svg-icons";
import { CategoryObj } from "../../../commons/libraries/translate";

export default function WorkAgreement(): JSX.Element {
  const router = useRouter();

  const { data, refetch } = useQueryFetchOneRequest(router.query.id as string);
  const { data: login } = useQueryFetchLoginUser();
  console.log(data);

  // 작업 상태
  const status = {
    WAITING: "대기중",
    ACCEPT: "시작",
    REFUSE: "거절",
    FINISH: "완료"
  };

  // 로그인한 ID에 따라 작업자인지 작업을 신청한 사람인지 확인
  const ID = login?.fetchLoginUser?.user_id;
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (ID === data?.fetchOneRequest?.seller_id) {
      setIsSeller(true);
    } else {
      setIsSeller(false);
    }
  }, [data, login]);

  const {
    onClickRequestAccept,
    onClickRequestRefuse,
    onClickRequestDone,
    isOk,
    isRefuse,
    isDone
  } = useRequestAcceptRefuse();

  const { onClickRequestProcessBuyer, onClickRequestProcessSeller } =
    useRequestProcess();

  // 불러온 작업 금액으로 시간 계산
  // const time = Number(data?.fetchOneRequest.request_price) / 9620;

  // 작업 신청, 시작, 전달, 완료
  const create = getDateTime(data?.fetchOneRequest.request_createAt);
  const start = getDateTime(data?.fetchOneRequest?.request_startAt);
  const send = getDateTime(data?.fetchOneRequest.request_sendAt);
  const completed = getDateTime(data?.fetchOneRequest.request_completedAt);

  // 작업 거절, 진행, 대기, 종료
  const isAccept = data?.fetchOneRequest?.request_isAccept ?? "WAITING";
  const waiting = data?.fetchOneRequest?.request_isAccept === "WAITING";
  const accept = data?.fetchOneRequest?.request_isAccept === "ACCEPT";
  const refuse = data?.fetchOneRequest?.request_isAccept === "REFUSE";
  const finish = data?.fetchOneRequest?.request_isAccept === "FINISH";

  useEffect(() => {
    refetch({ request_id: router.query.id as string });
  }, [isAccept]);

  console.log(isAccept);

  return (
    <>
      <CommentDrawer data={data} />
      {/* <S.Wrapper>
        <S.Container>
          <S.Category>
            {isRefuse === true || isAccept === "REFUSE" ? "거절됨" : <></>}
            {isOk === true ||
            (isAccept === "ACCEPT" &&
              completed === "1970-1-1" &&
              isDone === false)
              ? "진행중"
              : isAccept === "WAITING" &&
                completed === "1970-1-1" &&
                isRefuse === false
              ? "대기중"
              : ""}
            {isDone === true ? (
              "종료"
            ) : completed !== "1970-1-1" ? (
              "종료"
            ) : (
              <></>
            )}
          </S.Category>
          <S.Title>{data?.fetchOneRequest?.request_title}</S.Title>
          <S.ProcessBox>
            <S.StatusBox>
              <S.Check>
                <S.CheckImage src="/check.png" />
              </S.Check>
              <S.Theme>신청</S.Theme>
              <S.Date>
                {getDateTime(data?.fetchOneRequest?.request_createAt)}
              </S.Date>
            </S.StatusBox>
            <S.Line />
            <S.StatusBox>
              {isAccept === "REFUSE" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : isOk === true ||
                (isAccept === "ACCEPT" && start !== "1970-1-1") ||
                isAccept === "FINISH" ||
                isDone === true ||
                completed !== "1970-1-1" ? (
                <>
                  <S.StartWork>
                    <S.CheckImage src="/check.png" />
                  </S.StartWork>
                  <S.Theme>작업 시작</S.Theme>
                  <S.Date>
                    {getDateTime(data?.fetchOneRequest?.request_startAt)}
                  </S.Date>
                </>
              ) : (
                <>
                  <S.NoneCheck>
                    <S.CheckImage src="/check.png" />
                  </S.NoneCheck>
                </>
              )}
            </S.StatusBox>
            {isAccept === "REFUSE" ? (
              <S.NoneLine />
            ) : start === "1970-1-1" ? (
              <S.NoneLine />
            ) : (
              <S.Line1 />
            )}
            <S.StatusBox>
              {send === "1970-1-1" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : (
                <>
                  <S.SendWork>
                    <S.CheckImage src="/check.png" />
                  </S.SendWork>
                  <S.Theme>작업물 전달</S.Theme>
                  <S.Date>
                    {getDateTime(data?.fetchOneRequest?.request_sendAt)}
                  </S.Date>
                </>
              )}
            </S.StatusBox>
            {send === "1970-1-1" ? <S.NoneLine /> : <S.Line2 />}
            <S.StatusBox>
              {isDone === true ? (
                <>
                  <S.Complete>
                    <S.CheckImage src="/check.png" />
                  </S.Complete>
                  <S.Theme>완료</S.Theme>
                  <S.Date>
                    {getDateTime(data?.fetchOneRequest?.request_completedAt)}
                  </S.Date>
                </>
              ) : completed === "1970-1-1" ? (
                <S.NoneCheck>
                  <S.CheckImage src="/check.png" />
                </S.NoneCheck>
              ) : (
                <>
                  <S.Complete>
                    <S.CheckImage src="/check.png" />
                  </S.Complete>
                  <S.Theme>완료</S.Theme>
                  <S.Date>
                    {getDateTime(data?.fetchOneRequest?.request_completedAt)}
                  </S.Date>
                </>
              )}
            </S.StatusBox>
          </S.ProcessBox>
          <S.ContentsDetail>신청 내용</S.ContentsDetail>
          {isClient && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchOneRequest?.request_content) ?? ""
                )
              }}
            ></S.Contents>
          )}

          <S.PaymentBox>
            <S.Price>9,620원</S.Price>
            <S.SpecialCharacter> x </S.SpecialCharacter>
            <S.Price>{`${time}시간`}</S.Price>
            <S.SpecialCharacter> = </S.SpecialCharacter>
            <S.SpecialCharacter> ₩ </S.SpecialCharacter>
            <S.Price>{`${data?.fetchOneRequest?.request_price}원`}</S.Price>
          </S.PaymentBox>
          {data?.fetchOneRequest?.buyer_id === ID ? (
            <>
              {isAccept === "WAITING" && start === "1970-1-1" ? (
                <S.AcceptBox>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    style={{ fontSize: "60px", marginRight: "10px" }}
                  />
                  수락 대기중
                </S.AcceptBox>
              ) : (
                <></>
              )}
              {send === "1970-1-1" && isAccept === "ACCEPT" ? (
                <>
                  <S.AcceptBox>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ fontSize: "60px", marginRight: "10px" }}
                    />
                    작업 완료 대기중
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
              {isAccept === "REFUSE" ? (
                <S.AcceptBox>
                  <S.Icon src="/reject.png" />
                  의뢰 거절
                </S.AcceptBox>
              ) : (
                <></>
              )}
              {isDone === true ||
              (create !== "1970-1-1" &&
                start !== "1970-1-1" &&
                send !== "1970-1-1" &&
                completed !== "1970-1-1") ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    작업 확정 완료
                  </S.AcceptBox>
                </>
              ) : send !== "1970-1-1" && completed === "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    작업물 전달 완료
                  </S.AcceptBox>
                  <S.Contents>
                    작업 완료 확정 전, 꼭 확인해주세요.
                    <S.ContentsIndex>
                      • 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                      올바르게 전송하였는지 확인해주세요.
                    </S.ContentsIndex>
                    <S.ContentsIndex>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.ContentsIndex>
                    <S.ContentsIndex>
                      • '작업 완료 확정하기'를 누르지 않을 경우 3일 뒤에
                      자동으로 확정이 이루어집니다.
                    </S.ContentsIndex>
                  </S.Contents>
                  <S.Btn2
                    onClick={() => {
                      onClickRequestProcessBuyer(), onClickRequestDone();
                    }}
                  >
                    작업 완료 확정하기
                  </S.Btn2>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          {data?.fetchOneRequest?.seller_id === ID ? (
            <>
              {isRefuse === true || isAccept === "REFUSE" ? (
                <S.AcceptBox>
                  <S.Icon src="/reject.png" />
                  의뢰 거절
                </S.AcceptBox>
              ) : isOk === false &&
                isAccept === "WAITING" &&
                completed === "1970-1-1" ? (
                <S.Box>
                  <S.Btn onClick={onClickRequestRefuse}>거절하기</S.Btn>
                  <S.Btn onClick={onClickRequestAccept} className="accept">
                    수락하기
                  </S.Btn>
                </S.Box>
              ) : (
                <></>
              )}
              {send !== "1970-1-1" && completed === "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ fontSize: "60px", marginRight: "10px" }}
                    />
                    확정 대기중
                  </S.AcceptBox>
                </>
              ) : isOk === true ||
                (isAccept === "ACCEPT" && send === "1970-1-1") ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    의뢰 수락
                  </S.AcceptBox>
                  <S.Contents>
                    작업 완료 전, 꼭 확인해주세요.
                    <S.ContentsIndex>
                      • 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                      올바르게 전송하였는지 확인해주세요.
                    </S.ContentsIndex>
                    <S.ContentsIndex>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.ContentsIndex>
                  </S.Contents>
                  <S.Btn2 onClick={onClickRequestProcessSeller}>
                    작업 완료하기
                  </S.Btn2>
                </>
              ) : (
                <></>
              )}
              {completed !== "1970-1-1" ? (
                <>
                  <S.AcceptBox>
                    <S.Icon src="/accept.png" />
                    의뢰 확정 완료
                  </S.AcceptBox>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          <S.Box>
            <S.UserBox>
              <S.User>작업자</S.User>
              <S.UserPic
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/noimage.png";
                }}
                src={data?.fetchOneRequest?.seller_profileImage}
              />
              <S.User>{data?.fetchOneRequest?.seller_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.seller_email}</S.UserEmail>
            </S.UserBox>
            <S.Between>
              <S.Arrow src="/Vector 3.png" />
              <S.Arrow src="/Vector 4.png" />
            </S.Between>
            <S.UserBox>
              <S.User>신청자</S.User>
              <S.UserPic
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/noimage.png";
                }}
                src={data?.fetchOneRequest?.buyer_profileImage}
              />
              <S.User>{data?.fetchOneRequest?.buyer_nickname}</S.User>
              <S.UserEmail>{data?.fetchOneRequest?.buyer_email}</S.UserEmail>
            </S.UserBox>
          </S.Box>
        </S.Container>
      </S.Wrapper> */}
      <S.Wrapper>
        <S.Container>
          <S.CategoryBox>
            <S.Category>
              {CategoryObj[data?.fetchOneRequest?.product?.product_category ?? ""]}
            </S.Category>
            <S.ChevronIcon icon={faChevronRight} />
            <S.Category>
              {data?.fetchOneRequest?.product?.product_sub_category}
            </S.Category>
          </S.CategoryBox>
          <S.Title>{data?.fetchOneRequest?.request_title}</S.Title>
          <S.ProgressWrap>
            <S.ProgressBox>
              <S.ProgressIcon className="create">
                <S.ProgressCheck icon={faCheck} />
              </S.ProgressIcon>
              <S.ProgressTitle>작업 신청</S.ProgressTitle>
              <S.ProgressDate>{create} <br /> 완료</S.ProgressDate>
            </S.ProgressBox>
            <S.ProgressBar className="create" />
            <S.ProgressBox>
              <S.ProgressIcon
                className={
                  data?.fetchOneRequest?.request_startAt ? refuse ? "refuse" : "start" : ""
                }
              >
                <S.ProgressCheck icon={faCheck} />
              </S.ProgressIcon>
              <S.ProgressTitle>작업 {status[isAccept]}</S.ProgressTitle>
              {data?.fetchOneRequest?.request_startAt && (
                <S.ProgressDate>{start} <br /> 완료</S.ProgressDate>
              )}
            </S.ProgressBox>
            <S.ProgressBar
              className={data?.fetchOneRequest?.request_startAt ? refuse ? "refuse" : "start" : ""}
            />
            <S.ProgressBox>
              <S.ProgressIcon
                className={data?.fetchOneRequest?.request_sendAt ? "send" : ""}
              >
                <S.ProgressCheck icon={faCheck} />
              </S.ProgressIcon>
              <S.ProgressTitle>작업물 전달</S.ProgressTitle>
              {data?.fetchOneRequest?.request_sendAt && (
                <S.ProgressDate>{send} <br /> 완료</S.ProgressDate>
              )}
            </S.ProgressBox>
            <S.ProgressBar
              className={data?.fetchOneRequest?.request_sendAt ? "send" : ""}
            />
            <S.ProgressBox>
              <S.ProgressIcon
                className={
                  data?.fetchOneRequest?.request_completedAt ? "finish" : ""
                }
              >
                <S.ProgressCheck icon={faCheck} />
              </S.ProgressIcon>
              <S.ProgressTitle>작업 완료</S.ProgressTitle>
              {data?.fetchOneRequest?.request_completedAt && (
                <S.ProgressDate>{completed} <br /> 완료</S.ProgressDate>
              )}
            </S.ProgressBox>
          </S.ProgressWrap>
          <S.ServiceWrap>
            <S.ServiceTitle>
              <S.TitleHighlight>{data?.fetchOneRequest?.product?.product_title}</S.TitleHighlight>
              서비스 신청
            </S.ServiceTitle>
            <S.ServiceBox>
              {waiting && isSeller && (
                <>
                  <S.AcceptBtn
                    className="reject"
                    onClick={onClickRequestRefuse}
                  >
                    의뢰 거절하기
                  </S.AcceptBtn>
                  <S.AcceptBtn onClick={onClickRequestAccept}>
                    의뢰 수락하기
                  </S.AcceptBtn>
                </>
              )}
              {waiting && !isSeller && (
                <>
                  <S.StatusIcon icon={faSpinner} className="waiting" />
                  <S.StatusText>작업 대기중</S.StatusText>
                </>
              )}
              {accept && (
                <>
                  <S.StatusIcon icon={faCircleCheck} className="check" />
                  <S.StatusText>
                    {data?.fetchOneRequest?.request_sendAt
                      ? "작업물 전달"
                      : "작업 시작"}
                  </S.StatusText>
                </>
              )}
              {refuse && (
                <>
                  <S.StatusIcon icon={faCircleXmark} className="refuse" />
                  <S.StatusText>작업 거절</S.StatusText>
                </>
              )}
              {finish && (
                <>
                  <S.StatusIcon icon={faCircleCheck} className="check" />
                  <S.StatusText>작업 완료</S.StatusText>
                </>
              )}
            </S.ServiceBox>
          </S.ServiceWrap>
          <S.SectionWrap>
            <S.SectionBox>
              <S.SectionTitle>신청자</S.SectionTitle>
              <S.SectionFlex>
                <S.SectionUserWrap>
                  <S.SectionUserIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={data?.fetchOneRequest?.buyer_profileImage}
                  />
                  <S.SectionUserBox>
                    <S.SectionUserName>
                      {data?.fetchOneRequest?.buyer_nickname}
                    </S.SectionUserName>
                    <S.SectionUserEmail>
                      {data?.fetchOneRequest?.buyer_email}
                    </S.SectionUserEmail>
                  </S.SectionUserBox>
                </S.SectionUserWrap>
                <S.MessageBtn>메세지하기</S.MessageBtn>
              </S.SectionFlex>
            </S.SectionBox>
            <S.SectionBox>
              <S.SectionTitle>신청 시간</S.SectionTitle>
              <S.SectionContents>
                {getDateTime(data?.fetchOneRequest?.request_createAt)}
              </S.SectionContents>
            </S.SectionBox>
          </S.SectionWrap>
          <S.SectionWrap>
            <S.SectionTitle>신청 내용</S.SectionTitle>
            {typeof window !== "undefined" && (
              <S.SectionContents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    String(data?.fetchOneRequest?.request_content) ?? ""
                  )
                }}
              ></S.SectionContents>
            )}
          </S.SectionWrap>
          <S.SectionWrapWhite>
            <S.SectionBox>
              <S.SectionTitle>작업 요청 금액</S.SectionTitle>
              <S.SectionContent>
                {data?.fetchOneRequest?.request_price} P
              </S.SectionContent>
            </S.SectionBox>
            <S.SectionBox>
              <S.SectionTitle>필요 날짜</S.SectionTitle>
              <S.SectionContent>
                {getDate2(data?.fetchOneRequest?.request_dueDate)}
              </S.SectionContent>
            </S.SectionBox>
          </S.SectionWrapWhite>
          {accept && isSeller && !data?.fetchOneRequest?.request_sendAt && (
            <>
              <S.DivideLine />
              <S.SectionWrap>
                <S.SectionTitle>작업 완료 전, 꼭 확인해주세요.</S.SectionTitle>
                <S.NoticeWrap>
                  <S.NoticeText>
                    ・ 작업물 전달은 이메일로 이루어집니다. 상대방의 이메일로
                    올바르게 전송하였는지 확인해주세요.
                  </S.NoticeText>
                  <S.NoticeText>
                    ・ 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                    취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                    따라요.
                  </S.NoticeText>
                </S.NoticeWrap>
              </S.SectionWrap>
              <S.FinishBtn onClick={onClickRequestProcessSeller}>
                작업 완료하기
              </S.FinishBtn>
            </>
          )}
          {accept && !isSeller && data?.fetchOneRequest?.request_sendAt && (
            <>
              <S.DivideLine />
              <S.SectionWrap>
                <S.SectionTitle>
                  작업 완료 확정 전, 꼭 확인해주세요.
                </S.SectionTitle>
                <S.NoticeWrap>
                  <S.NoticeText>
                    ・ 작업물 전달은 이메일로 이루어집니다. 내 이메일로 올바르게
                    전송되었는지 확인해주세요.
                  </S.NoticeText>
                  <S.NoticeText>
                    ・ 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                    취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                    따라요.
                  </S.NoticeText>
                </S.NoticeWrap>
              </S.SectionWrap>
              <S.FinishBtn onClick={onClickRequestProcessBuyer}>
                작업 완료 확정하기
              </S.FinishBtn>
            </>
          )}
          <S.TradeWrap>
            <S.TradeBox>
              <S.TradeTitle>신청자</S.TradeTitle>
              <S.TradeUserIcon
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
                src={data?.fetchOneRequest?.buyer_profileImage}
              />
              <S.TradeUserName>
                {data?.fetchOneRequest?.buyer_nickname}
              </S.TradeUserName>
              <S.TradeUserEmail>
                {data?.fetchOneRequest?.buyer_email}
              </S.TradeUserEmail>
            </S.TradeBox>
            <S.TradeIcon src="/trade.png" />
            <S.TradeBox>
              <S.TradeTitle>작업자</S.TradeTitle>
              <S.TradeUserIcon
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
                src={data?.fetchOneRequest?.seller_profileImage}
              />
              <S.TradeUserName>
                {data?.fetchOneRequest?.seller_nickname}
              </S.TradeUserName>
              <S.TradeUserEmail>
                {data?.fetchOneRequest?.seller_email}
              </S.TradeUserEmail>
            </S.TradeBox>
          </S.TradeWrap>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
