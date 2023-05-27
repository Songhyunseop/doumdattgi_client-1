import * as S from "./workAgreement.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import CommentDrawer from "../../commons/parts/commentDrawer";
import { useQueryFetchOneRequest } from "../../commons/hooks/queries/useQueryFetchOneRequest";
import { useRouter } from "next/router";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useRequestAcceptRefuse } from "../../commons/hooks/custom/useRequestAcceptRefuse/index";
import { getDate, getDateTime } from "../../../commons/libraries/getDate";
import { useRequestProcess } from "../../commons/hooks/custom/useRequestProcess/index";
import DOMPurify from "dompurify";

export default function WorkAgreement(): JSX.Element {
  const router = useRouter();

  const { data } = useQueryFetchOneRequest(router.query.id as string);
  const { data: login } = useQueryFetchLoginUser();

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

  // 로그인한 ID에 따라 작업자인지 작업을 신청한 사람인지 확인
  const ID = login?.fetchLoginUser?.user_id;

  // 불러온 작업 금액으로 시간 계산
  const time = Number(data?.fetchOneRequest.request_price) / 9620;

  // 작업 신청, 시작, 전달, 완료
  const create = getDate(data?.fetchOneRequest.request_createAt);
  const start = getDate(data?.fetchOneRequest.request_startAt);
  const send = getDate(data?.fetchOneRequest.request_sendAt);
  const completed = getDate(data?.fetchOneRequest.request_completedAt);

  // 작업 거절, 진행, 대기, 종료
  const isAccept = data?.fetchOneRequest?.request_isAccept;

  return (
    <>
      <CommentDrawer data={data} />
      <S.Wrapper>
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
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchOneRequest?.request_content) ?? ""
                )
              }}
            ></S.Contents>
          )}

          <S.PaymentBox>
            <S.Price>9620 원</S.Price>
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
                    <S.Box>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.Box>
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
                  <S.Between></S.Between>
                  <S.Btn onClick={onClickRequestAccept}>수락하기</S.Btn>
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
                    <S.Box>
                      • 판매자와 신청자가 상호 협의한 경우 이미 시작한 작업을
                      취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                      따라요.
                    </S.Box>
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
      </S.Wrapper>
    </>
  );
}
